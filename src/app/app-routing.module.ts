import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { AuthGuard } from './utils/auth-login.guard';

const routes: Routes = [
  {
    path: ':lang',
    children: [
      // Fahes
      { path: 'fahes', pathMatch: 'full', loadChildren: () => import('./layouts/main/fahes-home/fahes-home.module').then((m) => m.FahesHomeModule) },
      { path: 'fahes/contact-us/feedback', loadChildren: () => import('./layouts/main/feedback/feedback.module').then((m) => m.FeedbackModule) },
      { path: 'fahes/media-center', loadChildren: () => import('./layouts/main/fahes-media-center-wrapper/fahes-media-center-wrapper.module').then((m) => m.FahesMediaCenterWrapperModule) },
      { path: 'fahes/media-center/news/:ID', loadChildren: () => import('./layouts/main/fahes-news-detailed/fahes-news-detailed.module').then((m) => m.FahesNewsDetailedModule) },
      { path: 'fahes/media-center/event/:ID', loadChildren: () => import('./layouts/main/detailes-page/detailes-page.module').then((m) => m.DetailesPageModule) },
      { path: 'fahes/sustainablity', loadChildren: () => import('./layouts/main/fahes-sustainablity/fahes-sustainablity.module').then((m) => m.FahesSustainablityModule) },
      { path: 'fahes/services', pathMatch: 'full', loadChildren: () => import('./layouts/main/fahes-services/fahes-services.module').then((m) => m.FahesServicesModule) },
      { path: 'fahes/service-inspection', pathMatch: 'full', loadChildren: () => import('./layouts/main/fahes-service-inspection/fahes-service-inspection.module').then((m) => m.FahesServiceInspectionModule) },
      { path: 'fahes/traffic-service', pathMatch: 'full', loadChildren: () => import('./layouts/main/fahes-traffic-service/fahes-traffic-service.module').then((m) => m.FahesTrafficServiceModule) },
      { path: 'fahes/faqs', pathMatch: 'full', loadChildren: () => import('./layouts/main/fahes-faqs/fahes-faqs.module').then((m) => m.FahesFaqsModule) },
      { path: 'fahes/contact-us', pathMatch: 'full', loadChildren: () => import('./layouts/main/fahes-contact-us/fahes-contact-us.module').then((m) => m.FahesContactUsModule) },
      { path: 'fahes/code-of-ethics-and-conducts', pathMatch: 'full', loadChildren: () => import('./layouts/main/code-of-ethics-and-conducts/code-of-ethics-and-conducts.module').then((m) => m.CodeOfEthicsAndConductsModule) },
      { path: 'fahes/about-us', pathMatch: 'full', loadChildren: () => import('./layouts/main/fahes-about-us/fahes-about-us.module').then((m) => m.FahesAboutUsModule) },
      { path: 'fahes/what-we-do', pathMatch: 'full', loadChildren: () => import('./layouts/main/fahes-what-we-do/fahes-what-we-do.module').then((m) => m.FahesWhatWeDoModule) },
      { path: 'fahes/who-we-are', pathMatch: 'full', loadChildren: () => import('./layouts/main/fahes-who-we-are/fahes-who-we-are.module').then((m) => m.FahesWhoWeAreModule) },
      { path: 'fahes/service-details/:pageURL', pathMatch: 'full', loadChildren: () => import('./layouts/main/services-details/services-details.module').then((m) => m.ServicesDetailsModule) },


      { path: 'contact-us/feedback', pathMatch: 'full', loadChildren: () => import('./layouts/main/woqod-feedback/woqod-feedback.module').then((m) => m.WoqodFeedbackModule) },




      // services
      { path: 'woqode-tag', pathMatch: 'full', loadChildren: () => import('./layouts/main/woqode-tag/woqode-tag.module').then((m) => m.WoqodeTagModule) },
      { path: 'retail', pathMatch: 'full', loadChildren: () => import('./layouts/main/retail/retail.module').then((m) => m.RetailModule) },
      // 
      { path: 'auto-care-service', pathMatch: 'full', loadChildren: () => import('./layouts/main/auto-care-service/auto-care-service.module').then((m) => m.AutoCareServiceModule) },
      { path: 'auto-care-service/detailed/:ID', pathMatch: 'full', loadChildren: () => import('./layouts/main/auto-care-sub-service/auto-care-sub-service.module').then((m) => m.AutoCareSubServiceModule) },
      // 
      { path: 'kenar-shop', pathMatch: 'full', loadChildren: () => import('./layouts/main/kenar-shops/kenar-shops.module').then((m) => m.KenarShopsModule) },
      { path: 'sidra', pathMatch: 'full', loadChildren: () => import('./layouts/main/sidra/sidra.module').then((m) => m.SidraModule) },
      // 
      { path: 'shafaf', pathMatch: 'full', loadChildren: () => import('./layouts/main/shafaf/shafaf.module').then((m) => m.ShafafModule) },
      { path: 'shafaf/super-markets', pathMatch: 'full', loadChildren: () => import('./layouts/main/supper-market-list/supper-market-and-retail-listing.module').then((m) => m.SupperMarketAndRetailListingModule) },
      { path: 'shafaf/gas-retailers', pathMatch: 'full', loadChildren: () => import('./layouts/main/gas-retailers/gas-retailers.module').then((m) => m.GasRetailersModule) },
      // 
      // end services

      { path: 'faqs', pathMatch: 'full', loadChildren: () => import('./layouts/main/faqs/faqs.module').then((m) => m.FaqsModule) },

      { path: 'business-with-woqod', pathMatch: 'full', loadChildren: () => import('./layouts/main/business-with-woqod/business-with-woqod.module').then((m) => m.BusinessWithWoqodModule) },

      { path: 'product-and-service', pathMatch: 'full', loadChildren: () => import('./layouts/main/product-and-service/product-and-service.module').then((m) => m.ProductAndServiceModule) },
      { path: 'product-and-service/product/:ID', pathMatch: 'full', loadChildren: () => import('./layouts/main/product-detail/product-detail.module').then((m) => m.ProductDetailModule) },

      { path: 'corporate-social-responsibility', pathMatch: 'full', loadChildren: () => import('./layouts/main/corporate-social-responsibility/corporate-social-responsibility.module').then((m) => m.CorporateSocialResponsibilityModule) },
      { path: 'enterprise-risk-management', pathMatch: 'full', loadChildren: () => import('./layouts/main/erm/erm.module').then((m) => m.ErmModule) },
      { path: 'business-continuity-management', pathMatch: 'full', loadChildren: () => import('./layouts/main/buisness-continuity-mangment/buisness-continuity-mangment.module').then((m) => m.BuisnessContinuityMangmentModule) },

      { path: '', loadChildren: () => import('./layouts/main/home-page/home-page.module').then((m) => m.HomePageModule) },

      { path: 'about-us', loadChildren: () => import('./layouts/main/about-us/about-us.module').then((m) => m.AboutUsModule) },
      { path: 'about-us/leadership/detailed/:ID', pathMatch: 'full', loadChildren: () => import('./layouts/main/our-leadership/our-leadership.module').then((m) => m.OurLeadershipModule) },

      { path: 'search-results', pathMatch: 'full', loadChildren: () => import('./layouts/main/search-results/search-results.module').then((m) => m.SearchResultsModule) },


      { path: 'tenders-and-supplier', pathMatch: 'full', loadChildren: () => import('./layouts/main/tenders-and-supplier/tenders-and-supplier.module').then((m) => m.TendersAndSupplierModule) },
      { path: 'tenders-and-supplier/detailed/:ID', pathMatch: 'full', loadChildren: () => import('./layouts/main/tender-details/tender-details.module').then((m) => m.TenderDetailsModule) },


      { path: 'careers', pathMatch: 'full', loadChildren: () => import('./layouts/main/careers-homepage/careers-homepage.module').then((m) => m.CareersHomepageModule) },






      { path: 'map', pathMatch: 'full', loadChildren: () => import('./layouts/main/kenar-map/kenar-map.module').then((m) => m.KenarMapModule) },


      { path: 'request-e-tag', pathMatch: 'full', loadChildren: () => import('./layouts/main/request-e-tag/request-e-tag.module').then((m) => m.RequestETagModule) },

      { path: 'sustainability', pathMatch: 'full', loadChildren: () => import('./layouts/main/sustainability/sustainability.module').then((m) => m.SustainabilityModule) },
      { path: 'contact-us', pathMatch: 'full', loadChildren: () => import('./layouts/main/contact-us/contact-us.module').then((m) => m.ContactUsModule) },


      { path: 'checkout', pathMatch: 'full', loadChildren: () => import('./layouts/main/payment-of-wallet/payment-of-wallet.module').then((m) => m.PaymentOfWalletModule) },

      { path: 'webview/checkout', pathMatch: 'full', loadChildren: () => import('./layouts/main/mobile-payment-request/mobile-payment-request.module').then((m) => m.MobilePaymentRequestModule) },
      { path: 'webview/checkout/qpay', pathMatch: 'full', loadChildren: () => import('./layouts/main/checkout-qpay/checkout-qpay.module').then((m) => m.CheckoutQpayModule) },

      { path: 'fahes/webview/checkout', pathMatch: 'full', loadChildren: () => import('./layouts/main/mobile-payment-request/mobile-payment-request.module').then((m) => m.MobilePaymentRequestModule) },
      { path: 'fahes/webview/checkout/qpay', pathMatch: 'full', loadChildren: () => import('./layouts/main/checkout-qpay/checkout-qpay.module').then((m) => m.CheckoutQpayModule) },

      { path: 'webview/save-card', pathMatch: 'full', loadChildren: () => import('./layouts/main/save-card/save-card.module').then((m) => m.SaveCardModule) },
      { path: 'fahes/webview/save-card', pathMatch: 'full', loadChildren: () => import('./layouts/main/save-card/save-card.module').then((m) => m.SaveCardModule) },

      { path: 'fahes/payment-confirm', pathMatch: 'full', loadChildren: () => import('./layouts/main/payment-confirm/payment-confirm.module').then((m) => m.PaymentConfirmModule) },
      { path: 'fahes/qpayment-confirm', pathMatch: 'full', loadChildren: () => import('./layouts/main/qpayment-confirm/qpayment-confirm.module').then((m) => m.QpaymentConfirmModule) },

      { path: 'payment-confirm', pathMatch: 'full', loadChildren: () => import('./layouts/main/payment-confirm/payment-confirm.module').then((m) => m.PaymentConfirmModule) },
      { path: 'qpayment-confirm', pathMatch: 'full', loadChildren: () => import('./layouts/main/qpayment-confirm/qpayment-confirm.module').then((m) => m.QpaymentConfirmModule) },


      { path: 'promotions', pathMatch: 'full', loadChildren: () => import('./layouts/main/promotions/promotions.module').then((m) => m.PromotionsModule) },
      { path: 'promotions/detailed/:ID', pathMatch: 'full', loadChildren: () => import('./layouts/main/promotion/promotion.module').then((m) => m.PromotionModule) },

      { path: 'media-center', loadChildren: () => import('./layouts/main/media-center-wrapper/media-center-wrapper.module').then((m) => m.MediaCenterWrapperModule) },
      { path: 'media-center/news-and-announcements/detailed/:ID', pathMatch: 'full', loadChildren: () => import('./layouts/main/news-details/news-details.module').then((m) => m.NewsDetailsModule) },
      { path: 'media-center/events/detailed/:ID', pathMatch: 'full', loadChildren: () => import('./layouts/main/events-detail/events-detail.module').then((m) => m.EventsDetailModule) },


      { path: 'careers/view-all-jobs', pathMatch: 'full', loadChildren: () => import('./layouts/main/careers/careers.module').then((m) => m.CareersModule) },

      // { path: 'careers/meet-our-team', pathMatch: 'full', loadChildren: () => import('./layouts/main/meet-our-team/meet-our-team.module').then((m) => m.MeetOurTeamModule) },

      { path: 'careers/career/:ID', pathMatch: 'full', loadChildren: () => import('./layouts/main/career-listing/career-listing.module').then((m) => m.CareerListingModule) },//career detailed

      // { path: 'template', pathMatch: 'full', loadChildren: () => import('./layouts/main/template/template.module').then((m) => m.TemplateModule) },

      { path: 'lubricants', pathMatch: 'full', loadChildren: () => import('./layouts/main/lubricants/lubricants.module').then((m) => m.LubricantsModule) },
      { path: 'lubricants/product/:ID', pathMatch: 'full', loadChildren: () => import('./layouts/main/lubricants-product-details/lubricants-product-details.module').then((m) => m.LubricantsProductDetailsModule) },

      // { path: 'about-us/systems-and-regulations', pathMatch: 'full', loadChildren: () => import('./layouts/main/systems-and-regulations/systems-and-regulations.module').then((m) => m.SystemsAndRegulationsModule) },
      { path: 'investor-relations', pathMatch: 'full', loadChildren: () => import('./layouts/main/investor-relations/investor-relations.module').then((m) => m.InvestorRelationsModule) },


      // start success pages
      { path: 'fahes/contact-us/feedback/success', pathMatch: 'full', loadChildren: () => import('./layouts/main/success-page/success-page.module').then((m) => m.SuccessPageModule) },
      { path: 'request-e-tag/success', pathMatch: 'full', loadChildren: () => import('./layouts/main/success-page/success-page.module').then((m) => m.SuccessPageModule) },
      { path: 'kenar-shop/rent-shop/success', pathMatch: 'full', loadChildren: () => import('./layouts/main/success-page/success-page.module').then((m) => m.SuccessPageModule) },
      { path: 'become-a-supplier/success', pathMatch: 'full', loadChildren: () => import('./layouts/main/success-page/success-page.module').then((m) => m.SuccessPageModule) },
      { path: 'contact-us/feedback/success', pathMatch: 'full', loadChildren: () => import('./layouts/main/success-page/success-page.module').then((m) => m.SuccessPageModule) },
      { path: 'careers/career-job/success', pathMatch: 'full', loadChildren: () => import('./layouts/main/success-page/success-page.module').then((m) => m.SuccessPageModule) },
      { path: 'tenders-and-supplier/tender-request/success', pathMatch: 'full', loadChildren: () => import('./layouts/main/success-page/success-page.module').then((m) => m.SuccessPageModule) },
      { path: 'tenders-and-supplier/tender-alert/success', pathMatch: 'full', loadChildren: () => import('./layouts/main/success-page/success-page.module').then((m) => m.SuccessPageModule) },
      { path: 'company-information/success', pathMatch: 'full', loadChildren: () => import('./layouts/main/success-page/success-page.module').then((m) => m.SuccessPageModule) },
      // end success pages

      // it shoule be after the success page in routing file
      { path: 'kenar-shop/rent-shop/:ID', pathMatch: 'full', loadChildren: () => import('./layouts/main/rent-shop-pop-up/rent-shop-pop-up.module').then((m) => m.RentShopPopUpModule) },
      { path: 'careers/career-job/:ID', pathMatch: 'full', loadChildren: () => import('./layouts/main/career-job/career-job.module').then((m) => m.CareerJobModule) },
      { path: 'investor-relations/:url', pathMatch: 'full', loadChildren: () => import('./layouts/main/investor-relations-details/investor-relations-details.module').then((m) => m.InvestorRelationsDetailsModule) },

      { path: 'become-a-supplier', pathMatch: 'full', loadChildren: () => import('./layouts/main/become-a-retail-supplier/become-a-retail-supplier.module').then((m) => m.BecomeARetailSupplierModule) },
      { path: 'become-a-supplier/:ID', pathMatch: 'full', loadChildren: () => import('./layouts/main/become-a-retail-supplier/become-a-retail-supplier.module').then((m) => m.BecomeARetailSupplierModule) },
      // 

      { path: 'login', pathMatch: 'full', loadChildren: () => import('./layouts/main/login/login.module').then((m) => m.LoginModule) },
      { path: 'logout', pathMatch: 'full', loadChildren: () => import('./layouts/main/logout/logout.module').then((m) => m.LogoutModule) },

      {
        path: 'dashboard', component: DashboardComponent,
        canActivate: [AuthGuard],
        children: [
          { path: '', redirectTo: 'home', pathMatch: 'full' },
          { path: 'profile', loadChildren: () => import('./layouts/dashboard/profile/profile.module').then((m) => m.ProfileModule) },
          { path: 'wallet', loadChildren: () => import('./layouts/dashboard/profile/profile.module').then((m) => m.ProfileModule) },
        ],
      },

      {
        path: 'error',
        loadChildren: () => import('./layouts/error/error.module').then((m) => m.ErrorModule)
      },


      { path: '**', pathMatch: 'full', loadChildren: () => import('./layouts/main/content-page/content-page.module').then((m) => m.ContentPageModule) },
      // { path: ':LEVEL1/:LEVEL2', pathMatch: 'full', loadChildren: () => import('./layouts/main/content-page/content-page.module').then((m) => m.ContentPageModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
