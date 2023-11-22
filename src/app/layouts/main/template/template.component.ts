import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})

export class TemplateComponent implements OnInit {
  isModalEnabled1: boolean = false;
  isModalEnabled2: boolean = false;
  isModalEnabled3: boolean = false;
  exampleText: string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";
  fonts: any = [
    "font-Futura-Bk-BT-Medium",
    "font-Futura-Bk-BT-Heavy",
    "font-Poppins-Light",
    "font-Poppins-Medium",
    "font-Poppins-Bold",
    "font-Cairo-Regular",
    "font-Cairo-Semi-Bold",
    "font-Cairo-Bold",
    "font-Noto-Sans-Medium",
    "font-Noto-Sans-Regular",
    "font-Roboto-Regular",
  ];
  pages: any = [
    { title: "fahes", url: "/fahes" },
    { title: "kenar-shop", url: "/kenar-shop" },
    { title: "traffic-service", url: "/fahes/traffic-service" },
    { title: "media-center", url: "/media-center" },
    { title: "events", url: "/media-center/events" },
    { title: "events-details", url: "/media-center/events/events-details" },
    { title: "news-details", url: "/media-center/news-details" },
    { title: "multimedia", url: "/media-center/multimedia" },
    { title: "brand-guidelines", url: "/brand-guidelines" },
    { title: "company-profile", url: "/company-profile" },
    { title: "contact-us", url: "/contact-us" },
    { title: "student-opportunties", url: "/student-opportunties" },
    { title: "auto-care-service", url: "/auto-care-service" },
    { title: "careers", url: "/careers" },
    { title: "retail", url: "/retail" },
    { title: "our-story", url: "/our-story" },
    { title: "business-with-woqod", url: "/business-with-woqod" },
    { title: "kenar-map", url: "/kenar-map" },
    { title: "sustainability", url: "/sustainability" },
    { title: "environmental-management", url: "/environmental-management" },
    { title: "integrated-management-system", url: "/integrated-management-system" },
    { title: "awareness-campaign", url: "/awareness-campaign" },
    { title: "health-and-safety", url: "/health-and-safety" },
    { title: "epass-link", url: "/epass-link" },
    { title: "petrol-stations-safety-instructions", url: "/petrol-stations-safety-instructions" },
    { title: "vision-mission-values", url: "/vision-mission-values" },
    { title: "systems-and-regulations", url: "/systems-and-regulations" },
    { title: "about-us", url: "/about-us" },
    { title: "promotions", url: "/promotions" },
    { title: "promotion", url: "/promotions/promotion" },
    { title: "maintenance-service", url: "/maintenance-service" },
    { title: "lube-change", url: "/lube-change" },
    { title: "sidra", url: "/sidra" },
    { title: "tyre-change-service", url: "/tyre-change-service" },
    { title: "car-wash-service", url: "/car-wash-service" },
    { title: "meet-our-team", url: "/meet-our-team" },
    { title: "why-woqod", url: "/why-woqod" },
    { title: "what-we-do", url: "/what-we-do" },
    { title: "equality-diversity-inclusion", url: "/equality-diversity-inclusion" },
    { title: "what-we-look-for", url: "/what-we-look-for" },
    { title: "interview-tips", url: "/interview-tips" },
    { title: "get-noticed", url: "/get-noticed" },
    { title: "talent-development-strategy", url: "/talent-development-strategy" },
    { title: "qatarization", url: "/qatarization" },
    { title: "life-at-woqod", url: "/life-at-woqod" },
    { title: "woqod-culture", url: "/woqod-culture" },
    { title: "benefits", url: "/benefits" },
    { title: "top-ten-reason-to-choose-woqod", url: "/top-ten-reason-to-choose-woqod" },
    { title: "five-ways-to-help-you-find-the-right-career-path", url: "/five-ways-to-help-you-find-the-right-career-path" },
    { title: "page-not-found", url: "/page-not-found" }
  ];
  icons: any = [
    {
      path: 'footer-logo',
      fill: '',
      stroke: '',
      class: ''
    },
    {
      path: 'arrow',
      fill: '',
      stroke: '#ffffff',
      class: 'rotate-90'
    },
    {
      path: 'arrow',
      fill: '',
      stroke: '#ffffff',
      class: ''
    },
    {
      path: 'arrow',
      fill: '',
      stroke: '#ffffff',
      class: 'rotate-[270deg]'
    },
    {
      path: 'arrow',
      fill: '',
      stroke: '#ffffff',
      class: 'rotate-180'
    },
    {
      path: 'long-arrow',
      fill: '',
      stroke: '#ffffff',
      class: 'rotate-90'
    },
    {
      path: 'long-arrow',
      fill: '',
      stroke: '#ffffff',
      class: ''
    },
    {
      path: 'long-arrow',
      fill: '',
      stroke: '#ffffff',
      class: 'rotate-[270deg]'
    },
    {
      path: 'long-arrow',
      fill: '',
      stroke: '#ffffff',
      class: 'rotate-180'
    },
    {
      path: 'long-arrow',
      fill: '#ffffff',
      stroke: '',
      class: 'rotate-90'
    },
    {
      path: 'long-arrow',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'long-arrow',
      fill: '#ffffff',
      stroke: '',
      class: 'rotate-[270deg]'
    },
    {
      path: 'long-arrow',
      fill: '#ffffff',
      stroke: '',
      class: 'rotate-180'
    },
    {
      path: 'search',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'search-short',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'chat',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'headset',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'notification',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'phone',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'play-circle',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'polygon',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'star',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'user',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'world',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'facebook',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'instagram',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'twitter',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'gmail',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'gmail-2',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'linkedin',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'auto-wash',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'circle-close',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'lube-bay',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'manual-wash',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'marine-station',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'mobile-station',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'petrol-station',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'vacuum-bay',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'home',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'customer-service',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'report',
      fill: '',
      stroke: '#ffffff',
      class: ''
    },
    {
      path: 'whistle-blowing',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'facebook-2',
      fill: '',
      stroke: '',
      class: ''
    },
    {
      path: 'instagram-2',
      fill: '',
      stroke: '',
      class: ''
    },
    {
      path: 'twitter-2',
      fill: '',
      stroke: '',
      class: ''
    },
    {
      path: 'linkedin-2',
      fill: '',
      stroke: '',
      class: ''
    },

    {
      path: 'gps',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'filter',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'close',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },


    {
      path: 'chart',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'pen',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'rocket',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'petrol-machine',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'customers',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'vehicles-served',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'map-marker',
      fill: '',
      stroke: '#ffffff',
      class: ''
    },

    {
      path: 'correct',
      fill: '#000000',
      stroke: '',
      class: ''
    },

    {
      path: 'camera',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },

    {
      path: 'circle-close-filled',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },

    {
      path: 'setting',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },

    {
      path: 'tag',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'logo-dashboard',
      fill: '',
      stroke: '',
      class: ''
    },

    {
      path: 'dots',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'apple-wallet',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'arrow-curve',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'arrow-down',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'attach',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'bank-credit',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'banking',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'car',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },

    {
      path: 'checklist',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },

    {
      path: 'correct-circle',
      fill: '',
      stroke: '',
      class: ''
    },

    {
      path: 'credit',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'customer-service',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'dateinput',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'direction',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'Ellipse',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'empty-circle',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'e-wallet',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'fahes-footer-logo',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'info',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'info',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'minus',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'minus-alt',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'phone-ring',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'pinterest',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'plus',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'plus-alt',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'twitter-x-logo',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'plus-thin',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'rabber',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'time',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'timer',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'Union',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'uploadfile',
      fill: '',
      stroke: '',
      class: ''
    },



    {
      path: 'loader',
      fill: '#ffffff',
      stroke: '',
      class: ''
    },
    {
      path: 'x',
      fill: '#000',
      stroke: '',
      class: ''
    },

  ];

  constructor() { }

  ngOnInit() {
  }

}