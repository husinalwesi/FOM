import { ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { DateTimeAdapter, PickerMode } from '@danielmoncada/angular-datetime-picker';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from 'src/app/i18n/translation.service';
import { ScrollStrategy, ScrollStrategyOptions } from "@angular/cdk/overlay";
import { ResizeService } from 'src/app/services/resize.service';
import { LoadAssetsService } from 'src/app/load-assets.service';

@Component({
  selector: 'app-date-picker-fifth-style',
  templateUrl: './date-picker-fifth-style.component.html',
  styleUrls: ['./date-picker-fifth-style.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DatePickerFifthStyleComponent {
  lang: string = 'en';
  @Output() dateChange: EventEmitter<Date> = new EventEmitter();
  @Input() data: any;
  @Input() min: any;
  @Input() max: any;
  @Input() isErrorEnabled: boolean = false;
  pickerMode: PickerMode = "popup"; //dialog //popup
  scrollStrategy: ScrollStrategy;
  @Input() isFormEnabled: boolean = false;
  constructor(
    dateTimeAdapter: DateTimeAdapter<any>,
    translationService: TranslationService,
    translate: TranslateService,
    private readonly sso: ScrollStrategyOptions,
    private resizeService: ResizeService,
    private cdk: ChangeDetectorRef,
    private loadAssetsService: LoadAssetsService
  ) {
    this.lang = translationService.getSelectedLanguage();
    this.loadAssetsService.loadCss('assets/css/picker.min.css', 'date-picker-default');
    this.scrollStrategy = this.sso.reposition();

    dateTimeAdapter.setLocale(translationService.getSelectedLanguage());
    translate.onLangChange.subscribe(data => {
      this.lang = data.lang;
      dateTimeAdapter.setLocale(data.lang);
    });
  }

  ngAfterViewInit(): void {
    this.updatePickerMode();
    this.resizeService.screenWidthChange$.subscribe(data => this.updatePickerMode());
  }

  updatePickerMode() {
    this.pickerMode = this.resizeService.isMobile() ? "dialog" : "popup";
    this.cdk.detectChanges();
  }

  onChange(date: Date) {
    this.dateChange.emit(date);
  }

  afterPickerOpen(event: any) {
    this.handleArabicButtons();
  }

  handleArabicButtons() {
    if (typeof window !== "undefined") {
      const buttonsContainer: any = document.querySelector(".owl-dt-container-buttons");
      if (this.lang === 'ar') {
        const buttons = document.querySelectorAll(".owl-dt-container-buttons > button");

        if (buttons?.[0]) buttons[0].innerHTML = 'إلغاء';
        if (buttons?.[1]) buttons[1].innerHTML = 'تطبيق';
        // 1 cancel
        // 2 set
      }
      if (buttonsContainer) buttonsContainer.style.opacity = 1;
    }

  }

}
