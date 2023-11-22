import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MetaTagsService } from 'src/app/services/meta-tags.service';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent {
  activeView: string = 'transactions'; // Initial view
  isDdlEnabled: boolean = false;
  fireCloseAnimation: boolean = false;
  serviceDDL: any = {
    selected: null,
    placeholder: 'Service Name',
    list: [
      {
        key: 'Service Name',
        title: {
          en: 'Service Name',
          ar: 'Service Name'
        }
      },
      {
        key: 'Service Name',
        title: {
          en: 'Service Name',
          ar: 'Service Name'
        }
      },
      {
        key: 'Service Name',
        title: {
          en: 'Service Name',
          ar: 'Service Name'
        }
      },
    ]
  };
  serviceChange(option: any) {
    this.serviceDDL.selected = option;
  }
  toggleDDL() {
    if (this.isDdlEnabled) {
      this.fireCloseAnimation = true;
      setTimeout(() => {
        this.isDdlEnabled = false;
        this.fireCloseAnimation = false;
      }, 300);
    } else {
      this.isDdlEnabled = true;
    }
  }
  showTransactions() {
    this.activeView = 'transactions';
  }

  showTopup() {
    this.activeView = 'topup';
  }
  keyword: string = '';
  data: any = {
    pagination: {
      pageSize: 10,
      pageIndex: 1,
      totalCount: 0
    },
    data: []
  };
  topupData: any = {
    pagination: {
      pageSize: 10,
      pageIndex: 1,
      totalCount: 0
    },
    data: []
  };

  constructor(
    private translate: TranslateService,
    private metaTagsService: MetaTagsService,
    private multimediaService: MultimediaService,
    private authService: MsalService
  ) {
    this.metaTagsService.updateMetaTags({
      title: "Wallet Page | Woqod",
      description: "Profile Page | Woqod",
      keywords: ["Woqod 1", "Woqod 2"]
    });
  }

  ngOnInit(): void {
    this.getDashboardWalletHistory();
    this.getDashboardWalletTopupHistory();
  }

  getDashboardWalletHistory() {
    let payload = {
      PageSize: this.data.pagination.pageSize,
      PageNumber: this.data.pagination.pageIndex,
    };

    if (this.keyword) Object.assign(payload, { searchTerm: this.keyword });

    this.multimediaService.getDashboardWalletHistory(payload).subscribe((response) => {
      this.data.pagination.totalCount = response.totalCount || 1000;
      this.data.data = (response.pageItems || []).map((item: any) => {
        return {
          title: item.name,
          invoiceNumber: item.invoiceNumber,
          tracking: item.tracking,
          trackingAddress: item.trackingAddress,
          serviceName: item.serviceName,
          date: item.transactionDate ? new Date(item.transactionDate) : null,
          amount: item.amount,
          amountText: item.amountSubItem,
          isSuccess: item.isSuccess || false
        }
      });
    });
  }

  getDashboardWalletTopupHistory() {
    // const userDetails = this.authService.instance.getActiveAccount();    
    // console.log(userDetails);
    // let userDetails: any = localStorage.getItem('userDetails');
    // userDetails = userDetails ? JSON.parse(userDetails) : null;
    // const userID = userDetails?.siteUsersID || '';

    // const token = localStorage.getItem('token');

    let payload = {
      // UserID: userID,
      // BearerToken: token,
      PageSize: this.topupData.pagination.pageSize,
      PageNumber: this.topupData.pagination.pageIndex,
    };

    if (this.keyword) Object.assign(payload, { searchTerm: this.keyword });


    this.multimediaService.getDashboardWalletTopupHistory(payload).subscribe((response) => {
      this.topupData.pagination.totalCount = response.totalCount || 1000;
      this.topupData.data = (response.pageItems || []).map((item: any) => {
        return {
          name: item.name,
          date: item.topUpDate ? new Date(item.topUpDate) : null,
          amount: item.amount,
          amountText: 'Static text',
        }
      });
    });
  }

  changePageTopUp(pageNo: number) {
    this.topupData.pagination.pageIndex = pageNo;
    this.getDashboardWalletTopupHistory();
  }

  changePageTransactions(pageNo: number) {
    this.data.pagination.pageIndex = pageNo;
    this.getDashboardWalletHistory();
  }

  changeKeyword(event: any) {
    this.keyword = event;
    this.data.pagination.pageIndex = 1;
    this.getDashboardWalletHistory();
    this.getDashboardWalletTopupHistory();
  }
}
