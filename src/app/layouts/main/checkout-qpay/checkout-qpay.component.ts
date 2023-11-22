import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MultimediaService } from 'src/app/services/apis/multimedia.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-checkout-qpay',
  templateUrl: './checkout-qpay.component.html',
  styleUrls: ['./checkout-qpay.component.scss']
})
export class CheckoutQpayComponent {
  amount: number = 0;
  token: string = '';
  bookingID: string = '';
  VehicleId: string = '';
  qpResponse: any;
  error: any;

  constructor(
    private route: ActivatedRoute,
    private multimediaService: MultimediaService,
    private sharedService: SharedService
  ) {
  }

  ngOnInit(): void {
    this.amount = +this.route.snapshot.queryParams?.amount || 0;
    this.token = this.route.snapshot.queryParams?.token || '';
    this.bookingID = this.route.snapshot.queryParams?.booking_id || '';
    this.VehicleId = this.route.snapshot.queryParams?.vehicle_id || '';
    if (this.amount && this.token) {
      localStorage.setItem('mobileToken', this.token);
      this.toPayment();
      // console.log(localStorage.getItem('mobileToken'));
    }
  }

  toPayment() {
    let payload = {
      amount: this.amount
    };
    if (this.bookingID) Object.assign(payload, { BookingId: this.bookingID });
    if (this.VehicleId) Object.assign(payload, { VehicleId: this.VehicleId });
    // 
    this.multimediaService.getPaymentDataQP(payload, this.bookingID ? 'fahes' : 'woqod').subscribe((response) => {
      this.qpResponse = response;
    },
      (error) => {
        this.error = error;
        this.sharedService.disableFullLoader();
        console.log(error);
        // this.checkValidate = false;
        // console.error("Error:", error);
        // this.isFormEnabled = false; // Keep the form inputs disabled
      });
  }

}
