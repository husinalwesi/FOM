import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-rent-shop-attachment',
  templateUrl: './rent-shop-attachment.component.html',
  styleUrls: ['./rent-shop-attachment.component.scss']
})
export class RentShopAttachmentComponent {
  @Output() nextStep: EventEmitter<any> = new EventEmitter();
  @Output() prevStep: EventEmitter<any> = new EventEmitter();
  isSubmitted: boolean = false;
  isVerified: boolean = false;
  checkBox1: any = {
    title: 'RENT_SHOP_TERMS_CONDITION.CHECKBOX1',
    name: 'limitedHours',
    value: false
  };

  checkBox2: any = {
    title: 'RENT_SHOP_TERMS_CONDITION.CHECKBOX2',
    name: 'limitedHours',
    value: false
  };

  checkBox3: any = {
    title: 'RENT_SHOP_TERMS_CONDITION.CHECKBOX3',
    name: 'limitedHours',
    value: false
  };

  franchiseCompany: string = "no";

  commercialRegisteration: any = {
    label: 'SHOP.COMMERCIAL_REGISTRATION_CR_COPY',
    accept: ['pdf', 'word', 'jpg', 'png'],
    isRequired: true,
    file: null,
    url: ""
  }

  copyOfComputer: any = {
    label: 'SHOP.COPY_OF_COMPUTER_CARD_OR_TRADING_LICENSE',
    accept: ['pdf', 'word', 'jpg', 'png'],
    isRequired: true,
    file: null,
    url: ""
  }

  bankAccounntDetails: any = {
    label: 'SHOP.BANK_ACCOUNT_DETAILS_IN_THE_COMPANY_LETTERHEAD',
    accept: ['pdf', 'word', 'jpg', 'png'],
    isRequired: true,
    file: null,
    url: ""
  }

  letterFromBank: any = {
    label: 'SHOP.LETTER_FROM_BANK_CONFIRMING_THE_ACCOUNT',
    accept: ['pdf', 'word', 'jpg', 'png'],
    isRequired: true,
    file: null,
    url: ""
  }

  copyOfOwnersID: any = {
    label: 'SHOP.COPY_OF_OWNERS_ID',
    accept: ['pdf', 'word', 'jpg', 'png'],
    isRequired: true,
    file: null,
    url: ""
  }

  companyProfile: any = {
    label: 'SHOP.COMPANY_PROFILE',
    accept: ['pdf', 'word', 'jpg', 'png'],
    isRequired: true,
    file: null,
    url: ""
  }

  brandingProfile: any = {
    label: 'SHOP.BRANDING_PROFILE',
    accept: ['pdf', 'word', 'jpg', 'png'],
    isRequired: true,
    file: null,
    url: ""
  }

  submit() {
    this.isSubmitted = true;
    if (
      (this.commercialRegisteration.file && this.copyOfComputer.file && this.bankAccounntDetails.file && this.letterFromBank.file && this.copyOfOwnersID.file && this.companyProfile.file && this.brandingProfile.file) &&
      (this.checkBox1.value && this.checkBox2.value && this.checkBox3.value) && this.isVerified
    ) {
      const data = {
        commercialRegisteration: this.commercialRegisteration.file,
        copyOfComputer: this.copyOfComputer.file,
        bankAccounntDetails: this.bankAccounntDetails.file,
        letterFromBank: this.letterFromBank.file,
        copyOfOwnersID: this.copyOfOwnersID.file,
        companyProfile: this.companyProfile.file,
        brandingProfile: this.brandingProfile.file,
        franchiseCompany: this.franchiseCompany
      };
      this.nextStep.emit(data);
    }
  }

  back() {
    this.prevStep.emit();
  }

}
