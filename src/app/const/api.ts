export const CMS_END_POINTS = {
  GET_CONTENT_BY_URL: '/api/ContentPages/GetByPageURL',
  GET_CONTENT_BY_URL_CSR: '/api/SocialResponsibilityDetails/GetByPageURL',

  GET_MULTIMEDIA_LANDING: '/api/Multimedia/MultimediaLanding',
  GET_FAHES_MULTIMEDIA_LANDING: '/api/FahesMediaCenterLandingPage/GetFahesMediaCenterLandingPageById',
  GET_NEWS_LANDING: '/api/News/NewsLanding',
  GET_FAHES_NEWS_LANDING: '/api/Fahes/GetFahesNewsLanding',
  GET_NEWS_BANNER: '/api/News/LandingFeaturedItems',
  GET_EVENTS_BANNER: '/api/Events/GetFeaturedEvents',
  GET_NEWS_LISTING: '/api/News/Paginate',
  GET_NEWS_DETAIL: '/api/News/getNewsByPageURL',
  GET_FAHES_NEWS_DETAILS: '/api/FahesMediaCenterLandingPage/GetFahesNewsDetailsByID',
  GET_FAHES_EVENT_DETAILS: '/api/FahesMediaCenterLandingPage/GetEventDetailByID',
  GET_EVENT_DETAIL: '/api/Events/EventDetailsByPageURL',
  GetLubricantsDetailsByLubricantCategoryID: '/api/LubricantsDetails/GetLubricantsDetailsByLubricantCategoryID',
  GetLubricantCategoryByURL: '/api/LubricantsDetails/GetLubricantCategoryByURL',

  GetLubricantsDetailsImagesByLubricantsDetailsId: '/api/LubricantsDetails/GetLubricantsDetailsImagesByLubricantsDetailsId',

  GET_CHECK_PAID: '/api/Tenders/MarkTenderDocumentRequestPaid',

  GET_AUTO_CARE_SUB_SERVICE: '/api/AutoCare/GetAutoCareSubServiceByURL',

  getTransactionByID: '/without_api_word/InquireTransactionStatus',
  getTransactionByID_FAHES: '/api/CyberSourcePayment/InquireFahesTransactionStatus',
  GET_PROMOTION_DETAIL: '/api/Promotions/PromotionByPageURL',
  GET_EVENTS_LANDING: '/api/Events/EventsLanding',
  GET_EVENTS_LISTING: '/api/Events/GetEventDetailsPagination',

  GET_CAREERS_CAROUSEL_DATA: '/api/Careers/CareersLandingImages',
  GET_WOQODE_TAG_CAROUSEL_DATA: '/api/WoqodePage/WoqodePageSliderImages',
  GET_SOCIAL_LINKS: '/api/HomePage/GetHomePageSocialMedia',
  // GET_SOCIAL_LINKS: '/api/ContactUs/SocialMedia',
  GET_WOQODE_PRICES_DATA: '/api/WoqodePage/GetWoqodCorporatePricing',
  GET_WOQODE_PRICES_INDIVIDUAL_DATA: '/api/WoqodePage/GetWoqodIndividualPricing',

  GET_SUSTAINABILITY_EVENTS: '/api/SustainabilityLanding/SustainabilityEvents',
  GET_SUSTAINABILITY_NEWS: '/api/SustainabilityLanding/SustainabilityLandingContentPagesAreaTwo',

  GET_RETAIL_CAROUSEL_DATA: '/api/RetailPage/RetailImages',

  GET_PROMOTION_CATEGORIES: '/api/Promotions/CategoriesList',
  GET_EVENT_CATEGORIES: '/api/Events/GetEventCategories',

  GET_TEAM_MEMBERS: '/api/Careers/CareersContentPagesTeamMembers',
  GET_TEAM_MEMBERS_ERM: '/api/ERMLandingPage/ERMLandingPageERMTeamMembers',

  GET_AUTOCARE_PROMOTIONS: '/api/AutoCare/AutoCareLandingPromotions',
  GET_ABOUTUS: '/api/AboutUs/WoqodAboutUs',
  getOurLeaderShip: '/api/AboutUs/GetLeadershipByURL',

  GET_LIST_CATEGORY_SUPPLIER: '/api/LookUps/GetRequestTypeID',
  GetSupplierRequestProductCategory: '/api/RetailerSuppilerRequest/GetSupplierRequestProductCategory',

  GET_PROMOTION_LOCATIONS: '/api/LookUps/Cities',
  GetKenarPropertiesImages: '/api/Kenar/GetKenarPropertiesImages',
  GET_STATIONS: '/api/LookUps/GetByMainId',
  GET_PROMOTION_STATUSES: '/api/Promotions/GetPromotionsStatuses',

  GET_IMAGE_BY_FILE: '/api/Images/ImageFile',
  GET_FILE: '/api/Images/ImageFile',
  GET_PDF: '/api/Images/PdfFile',
  GET_VIDEO_BY_FILE: '/api/Videos/GetVideosById',
  GET_MULTIMEDIA_IMAGES: '/api/Multimedia/ListAllImagesPagination',
  GET_MULTIMEDIA_VIDEOS: '/api/Multimedia/ListAllVideosPagination',
  GET_MULTIMEDIA_GALLERIES: '/api/Multimedia/ListAllGalleriesPagination',


  GET_FAHES_MULTIMEDIA_IMAGES: '/api/FahesMediaCenterLandingPage/ListAllFahesImagesPagination',
  GET_FAHES_MULTIMEDIA_VIDEOS: '/api/FahesMediaCenterLandingPage/ListAllFahesVideosPagination',
  GET_FAHES_MULTIMEDIA_GALLERIES: '/api/FahesMediaCenterLandingPage/ListAllFahesGalleriesPagination',

  GET_TOP_UP_STEPS: '/api/WoqodePage/getTopUpStepsByWoqodePageId',
  getBecomeASupplierMeta: '/api/ContentPages/GetBecomeASupplierForSidraFormLanding',
  GET_RETAIL_PRICES: '/api/RetailPage/GetFuelPrices',
  GET_JOBS: '/api/CareersJobs/GetAllCareersJobsDetails',
  GET_SEARCH_ITEM: '/api/HomePage/GetSearchResult',
  GET_LUBRICANT_LANDING: '/api/LubricantLanding/GetLubricantLandingImagesByLubricantLandingId',
  GET_LUBRICANT_LANDING_META: '/api/LubricantLanding/GetLubricantLandingById',
  GET_LUBRICANT_CARSOUL_LANDING: '/api/LubricantLanding/GetLubricantCategory',
  getSiteUserDeactivateReasons: '/api/Account/GetSiteUserDeactivateReasons',
  getAutoCareSubServicesPricingCategory: '/api/AutoCare/GetAutoCareSubServicesPricingCategory',
  GET_JOB_STAGS: '/api/CareersJobs/GetCareersJobsDetailsTags',
  GET_JOBS_CODES: '/api/CareersJobs/GetCareersJobsDetailsTypes',
  GET_CAREER_LOCATIONS: '/api/CareersJobs/GetCareerJobsDetailsLocations',
  GET_CAREER_DEPARTMENTS: '/api/CareersJobs/GetCareerJobsDetailsDepartments',

  FUEL_PRICE_YEAR: '/api/RetailPage/GetFuelPricesByYear',


  //ERM
  GET_BULLETS_ERM: '/api/ERMLandingPage/ERMLandingPageBullets',
  GET_DATA_ERM: '/api/AboutUs/ERMLanding',
  GET_CONTENT_PAGE_ERM: '/api/ERMLandingPage/ERMLandingPageERMContentPages',





  //BCM
  GET_DATA_BCM: '/api/ERMBCMLanding/GetBCMLandingById',
  // GET_DATA_ARRE_TWO: '/api/ERMBCMLanding/ERMBCMLandingContentPagesAreaTwo',
  GET_DATA_ARRE_TWO: '/api/ERMBCMLanding/BCMLandingBCMContnetPages',
  GET_BULLETS_BCM: '/api/ERMBCMLanding/ERMBCMLandingBullets',
  GET_EVENTS_BCM: '/api/ERMBCMLanding/ERMBCMLandingEventDetails',





  //CSR
  GET_DATA_CSR: '/api/SocialResponsibilityLanding/GetSocialResponsibilityLanding',
  GET_CONTENT_CSR: '/api/SocialResponsibilityLanding/GetSocialResponsibilityLandingDetails',
  GET_EVENTS_CSR: '/api/SocialResponsibilityLanding/GetSocialResponsibilityLandingEvents',




  //Shafaf
  GET_SHAFAF_META: '/api/Shafaf/Landing',
  GET_SHAFAF_FEATURED: '/api/Shafaf/LandingFeaturedItems',
  GET_SHAFAF_RATES: '/api/Shafaf/Rates?pageNumber=1&pageSize=3',
  GET_SHAFAF_ACCESSORIES: '/api/Shafaf/Accessories?pageNumber=1&pageSize=3',

  GET_SUPER_MARKET_DATA: '/api/Shafaf/SuperMarketsLandingPage',
  GET_SUPER_MARKET_RETAILERS_DATA: '/api/Shafaf/RetailersLandingPage',


  GET_RETAIL_PROMOTIONS: '/api/RetailPage/GetRetailOffersAndPromotions',
  GET_AUTO_CARE_SUB_SERVICES: '/api/AutoCare/AllAutoCareSubServices',
  getMapData: '/api/Fahes/GetFahesStations',
  getMapDataNew: '/api/Stations/GetStationsByLocationTypeId',
  getStationTypes: '/api/Stations/GetAllPublishedStationsTypes',
  GetAllWorkingHoursTypes: '/api/Stations/GetAllWorkingHoursTypes',
  GET_DASHBOARD_APPOINTMENT_HISTORY: '/api/Account/DashboardAppointmentHistory',
  getDashboardAppointmentHistoryByID: '/api/Account/GetUserAppointmentHistoryByID',
  getMyVehicle: '/api/SiteUsers/GetSiteUserVehiclesByUserID',
  GetSiteUserVehiclesPlateTypes: '/api/Account/GetSiteUserVehiclesPlateTypes',
  getSiteUserWalletAmmount: '/api/Account/GetSiteUserWalletAmmount',
  GET_AMOUNT_OF_WALLET: '/api/Wallet/InstantsList',
  GET_DASHBOARD_WALLET_HISTORY: '/api/Account/GetSiteUserWalletHistory',
  GET_DASHBOARD_WALLET_TOPUP_HISTORY: '/api/Account/GetSiteUserWalletTopupHistory',
  GetWoqodHelpAreas: '/api/AboutUs/GetWoqodHelpAreas',

  GET_FAHES_NEWS_MEDIA_CENTER: '/api/FahesMediaCenterLandingPage/GetFahesMediaCenterNews',
  GET_FAHES_EVENTS: '/api/FahesMediaCenterLandingPage/GetFahesMediaCenterEvents',
  GET_FAHES_MILESTONES: '/api/FahesMediaCenterLandingPage/GetFahesMediaCenterMilestone',
  GET_HOMEPAGE: '/api/HomePage/GetHomePage',
  GET_HOMEPAGE_SLIDER: '/api/HomePage/GetHomePageBannerSlider',
  GET_HOMEPAGE_NEWS: '/api/HomePage/GetHomePageNews',
  GET_HOMEPAGE_PROMOTIONS: '/api/HomePage/GetHomepagePromotions',
  GET_HOMEPAGE_TENDERS: '/api/HomePage/GetHomePageTenders',
  GET_STATUS_TENDERS: '/api/Tenders/getAllTenderDetails',
  GET_SUPER_MARKET_TABLE: '/api/Shafaf/SuperMarkets',
  GET_TRAFFICE_SERVICE_TABLE: '/api/Fahes/GetFahesInsuranceVendors',
  GET_SUPER_MARKET_RETAILERS_TABLE: '/api/Shafaf/Retailers',
  GET_HOMEPAGE_SOCIALMEDIA: '/api/HomePage/GetHomePageSocialMedia',
  GET_HOMEPAGE_PRODUCTS_SERVICES: '/api/HomePage/GetHomePageProductandServices',
  GET_WOQODE_FAQ: '/api/WoqodePage/FAQs',
  GET_FAHES_HOMEPAGE_SERVICE: '/api/Fahes/GetFahesHomeServices',
  GET_HOMEPAGE_WOQOD_APP: '/api/MobileStoresSection/GetMobileStoresSection',

  GET_USER_DETAILS_BY_TOKEN: '/api/Account/ProfileByToken',

  FAKE_API: '/api/fake-api',

  GET_HEADER: '/api/MainMenu/WebsiteMenu',
  GET_HEADER_AR: '/api/MainMenu/ArabicMenu',
  getHeaderHelper: '/api/AboutUs/GetWoqodHelpAreas',
  GET_FOOTER: '/api/Footer/GetJsonTreeByFooterId?id=006c9585-443f-4763-a8c2-bae50bd3c783',
  GET_FOOTER_AR: '/api/Footer/GetArabicFooter',
  getFooterBottom: '/api/Footer/GetMainFooter?id=006c9585-443f-4763-a8c2-bae50bd3c783',

  GET_SLIDER_PRODUCT_AND_SERVICE: '/api/OurProductsAndServices/GetSliderItems',
  GET_PRODUCT_LIST_PRODUCT_AND_SERVICE: '/api/OurProductsAndServices/GetFeaturedProducts',
  GET_PROMOTIONS_PRODUCT_AND_SERVICE: '/api/OurProductsAndServices/GetFeaturedPromotions',
  GET_DATA_PRODUCT_AND_SERVICE: '/api/OurProductsAndServices/GetOurProductsAndServicesPage',
  GET_PRODUCT_DETAIL: '/api/WoqodProduct/GetByPageURL',
  GET_PRODUCT_BULLETS_DETAIL: '/api/WoqodProduct/GetWoqodProductsBullets',
  GET_SERVICES: '/api/FahesServicesLanding/GetFahesServices',
  GET_SERVICES_DATA: '/api/FahesServicesLanding/GetFahesServicesLanding',

  GET_YEARS: '/api/FuelPrices/GetFuelPricesHistoryYears',
  GET_SIDRA_PROMOTIONS: '/api/Sidra/GetSidraPromotions',
  GET_SIDRA_ORDERS: '/api/Sidra/SidraPageOrders',

  GET_KENAR_PROPERTIES: '/api/Kenar/ListAllKenarPropertiesPagination',
  GET_KENAR_SLIDER: '/api/Kenar/KenarPageImages',
  GET_RENT_SHOP_BUSINESS_CATEGOTY: '/api/Kenar/GetBusinesssCategories',
  GET_RENT_SHOP_VALIDATE: '/api/Kenar/ValidateCRNumber',
  GET_BUSINESS_CATEGORY: '/api/Kenar/GetBusinesssCategories',
  GET_SHOPS_CATEGORY: '/api/Kenar/KenarNoOfShops',
  GET_STATION_CATEGORY: '/api/Kenar/GetPetrolStationListFromLookMainId',

  REQUEST_AUTO_CARE_AUPPLIER: '/api/AutoCare/AutoCareSupplierRequest',
  updateUserProfile: '/api/Account/UpdateProfile',
  deleteAccount: '/api/Account/DeleteAccount',
  SUBSCRIPE_TO_TENDER_ALERTS: '/api/TendersAlerts/subscribeToTenders',
  GET_WOQODE_INFO: '/api/WoqodePage/WoqodePageInfo',
  GET_WOQODE_TOPUP: '/api/WoqodePage/TopUpSteps',
  GET_WOQODE_BULLETS: '/api/WoqodePage/Bullets',
  GET_WOQODE_PRICE: '/api/WoqodePage/GetWoqodIndividualPricingModel',
  GET_WOQODE_CORPORATE_PRICE: '/api/WoqodePage/GetWoqodCorporatePricingModel',
  GET_WOQODE_TIMELINE: '/api/WoqodePage/IndividualSteps ',
  GET_WOQODE_INDIVIDUAL_COORPORATE_TIMELINE: '/api/WoqodePage/CorporateSteps',

  GET_PROMOTIONS_META: '/api/Promotions/promotionsLanding',
  GET_PROMOTIONS_FEATURED_ITEMS: '/api/Promotions/promotionsLandingFeaturedItems',
  GET_PROMOTIONS_LIST: '/api/Promotions/Pagenate',
  GET_RELATED_PROMOTIONS_LIST: '/api/Promotions/GetRelatedPromotionsByPromotionID',
  GET_RELATED_NEWS: '/api/News/GetRelatedNewsDetailsByNewsDetailsId',
  GET_RELATED_NEWS_FAHES: '/api/FahesMediaCenterLandingPage/GetFahesRelatedNewsDetails',
  GET_MEDIA_CENTER_NEWS: '/api/FahesMediaCenterLandingPage/GetFahesMediaCenterLandingPageById',

  GET_BUSINESS_WITH_WOQOD_PRODUCTS: '/api/BusinessWithWoqod/GetBusinessWithWoqodProducts',

  GET_FEEDBACK_FAHES_CATEGORY: '/api/Feedback/GetFeedbackCategories',
  GET_CAREERS_FIELS_OF_STUDY: '/api/CareersJobs/GetCareersFieldOfStudy',
  GET_YEARS_OF_EXPERIANCE: '/api/CareersJobs/GetYearsofExperience',
  GET_CURRENT_EMPLOYMENT_STATUS: '/api/CareersJobs/GetCurrentEmploymentStatus',
  GET_EDUCATIONAL_DEGREE: '/api/CareersJobs/GetEducationalDegree',
  GET_NATIONALITY: '/api/CareersJobs/GetNationality',
  GET_PREVIOUS_EMP: '/api/CareersJobs/GetPreviousWorkIndustry',
  GET_FEEDBACK_FAHES_SECTORS: '/api/Feedback/GetFeedbackSectors',
  GET_FEEDBACK_TYPE: '/api/Feedback/GetFeedbackTypes',
  GET_FEEDBACK_DEPARTMENT: '/api/Feedback/GetFeedbackDepartments',

  GET_SERVICES_DETAIL_PAGE: '/api/FahesServicesDetail/GetByPageURL',
  GET_TENDER_SUPPLIER: '/api/Tenders/LandingPage',
  GET_AUTO_CARE_SUPPLIER: '/api/AutoCare/AllAutoCareLanding',
  GET_WITH_WOQOOD_SUPPLIER: '/api/BusinessWithWoqod/BusinessWithWoqod',

  GET_PAYMENT_DATA: '/api/Account/CSGetData',
  GET_PAYMENT_DATA_PTOKEN: '/api/account/CSGetDataForSavedCard',
  GET_PAYMENT_DATA_QP: '/api/Account/QPGetData',

  GET_PAYMENT_DATA_SAVE_CARD: '/api/account/SaveCardGetData',
  GET_PAYMENT_DATA_FAHES_SAVE_CARD: '/api/fahesaccount/SaveCardGetData',

  GET_PAYMENT_DATA_FAHES: '/api/FahesAccount/CSGetData',
  GET_PAYMENT_DATA_FAHES_PTOKEN: '/api/fahesaccount/CSGetDataForSavedCard',
  GET_PAYMENT_DATA_QP_FAHES: '/api/FahesAccount/QPGetData',

  GET_CAREER_HOMEPAGE: '/api/Careers/CareersLandingImages',
  GET_CAREER_LANDING_AREA_ONE: '/api/Careers/CareersLandingAreaOneRelatedArticles',
  GET_CAREER_LANDING_AREA_TWO: '/api/Careers/CareersLandingAreaTwoRelatedArticles',
  GET_CAREER_LANDING_AREA_THREE: '/api/Careers/CareersLandingAreaThreeRelatedArticles',
  GET_CAREER_LANDING_CONTENT_BOX: '/api/Careers/Landing',
  GET_CAREER_FAQS: '/api/Careers/CareerFAQs',
  GET_CAREER_DETAIL: '/api/CareersJobs/GetCareersJobsDetailsByID',
  GET_CAREER_JOBS: '/api/CareersJobs/GetAllCareersJobsDetails?PageIndex=1&PageSize=2',


  GET_STICKY_ICONS: '/api/StickyIcons/StickyIcons',
  GET_STATIC_MESSAGE_PAYMENT_SUCCESS: '/api/StaticMessages/GetByID',
  GET_SUBSITE_LIST: '/api/StickyIcons/SubsitesList',


  GET_E_TAG_GENRAL_INFORMATION: '/api/ETagRequests/SubmitETagRequest',

  // Content Pages
  GET_ENVIRONMENTAL_MANAGMENT: '/api/ContentPages/EnvironmentalManagement',
  GET_PETROL_STATION_SAFETY_INSTRUCTIONS: '/api/ContentPages/PetrolStationsSafetyInstructions',
  GET_INTEGRATED_MANAGMENT_SYSTEM: '/api/ContentPages/IntegratedManagementSystem',
  GET_AWARENESS_CAMPAIGN: '/api/ContentPages/AwarenessCampaign',
  GET_BRAND_GUIDELINES: '/api/ContentPages/BrandGuidelines',
  GET_COMPANY_PROFILE: '/api/ContentPages/CompanyProfile',
  GET_HEALTH_AND_SAFETY: '/api/ContentPages/HealthAndSafety',
  GET_WHY_WOQOD: '/api/Careers/WhyWoqod',
  GET_CAREERS: '/api/Careers/Landing',
  GET_WHAT_WE_DO: '/api/Careers/WhatWeDo',
  GET_EQUALITY_DIVERSITY_INCLUSION: '/api/Careers/Equality',
  GET_WHAT_WE_LOOK_FOR: '/api/Careers/WhatWeLookFor',
  GET_INTERVIEW_TIPS: '/api/Careers/InterviewTips',
  GET_NOTICED: '/api/Careers/Noticed',
  GET_TALENT_DEVELOPMENT_STRATEGY: '/api/Careers/TalentDevelopmentStrartegy',
  GET_QATARRAIZATION: '/api/Careers/Qatarrization',
  GET_LIFE_AT_WOQOD: '/api/Careers/LifeAtWoqod',
  GET_WOQOD_CULTURE: '/api/Careers/WoqodCulture',
  GET_BENIFITS: '/api/Careers/Benifits',
  GET_TOP_TEN_REASON_TO_CHOOSE_WOQOD: '/api/Careers/Top10ReasonsToChooseWoqod',
  GET_MEET_OUR_TEAM: '/api/Careers/MeetOurTeam',
  GET_FIVE_WAY_TO_HELP_YOU_FIND_THE_RIGHT_CAREER_PATH: '/api/Careers/FiveWaysToImproveCareerPath',
  GET_WOQODE_TAG: '/api/WoqodePage/getWoqodePageInfoById',
  GET_RETAIL: '/api/RetailPage/RetailPage',
  GET_AUTO_CARE_SERVICE: '/api/AutoCare/AllAutoCareLanding',
  GET_BUSINESS_WITH_WOQOD: '/api/BusinessWithWoqod/BusinessWithWoqod',
  GET_SUSTAINABILITY_LANDING: '/api/SustainabilityLanding/SustainabilityLanding',
  GET_SUSTAINABILITY_BULLETS: '/api/SustainabilityLanding/GetSustainabilityLandingBullets',
  GET_SUSTAINABILITY: '/api/ContentPages/Sustainability',
  GET_OUR_STORY: '/api/ContentPages/OurStory',
  GET_STUDENT_OPPORTUNITIES: '/api/Careers/CareersStudentOpportunities',
  GET_VISION_MISSION_VALUES: '/api/ContentPages/OurVision',
  GET_KENAR_LANDING: '/api/Kenar/KenarLanding',
  GET_SIDRA: '/api/Sidra/SidraPage',
  GET_TINDER_LANDING: '/api/Tenders/LandingPage',
  GET_FAHES_FAQ_LANDING: '/api/Fahes/GetFahesFAQLandingPage',
  GET_FAQ_LANDING: '/api/FAQ/GetFAQLandingPage',
  GET_BULLETS_CODE_OF_ETHIC: '/api/FahesContentPages/GetCodeOfEthicsAndConductsBullets',

  GET_BUSINESS_WITH_WOQOD_IMAGES: '/api/BusinessWithWoqod/GetBusinessWithWoqodImages',
  GET_FAHES_FAQ_CATEGORIES: '/api/Fahes/GetFahesFAQCategoryList',
  GET_FAQ_CATEGORIES_FILTER: '/api/FAQ/GetFAQCategory',
  GET_FAQ_CATEGORIES_FILTER_LIST: '/api/HomePage/GetSearchCategories',
  GET_FAQ_CATEGORIES: '/api/FAQ/GetFAQsPagination',

  GET_CODE_OF_ETHICS: '/api/FahesContentPages/CodeOfEthicsAndConducts',
  GET_FAHES_ABOUT_US: '/api/Fahes/GetFahesAboutUs',
  GET_FAHES_ABOUT_US_BULLETS: '/api/Fahes/GetFahesAboutUsBullets',
  GET_FAHES_WHAT_WE_DO: '/api/FahesContentPages/WhatWeDo',
  GET_FAHES_WHO_WE_ARE: '/api/FahesContentPages/WhoWeAre',
  GET_FAHES_CONTACT_US: '/api/Fahes/GetFahesContactUs',
  GET_FAHES_HOME: '/api/Fahes/getFahesHomePageById',
  GET_FAHES_NEWS_HOME: '/api/Fahes/GetFahesHomeNewsDetails',
  GET_FAHES_HOME_CONTENT_PAGES: '/api/Fahes/GetFahesHomeContentPages',

  GET_FAHES_CONTACT_US_OFFICE: '/api/Fahes/GetFahesOffice',
  GET_FAHES_CONTACT_US_BULLETS: '/api/Fahes/GetFahesContactUsBullets',
  GET_SYSTEMS_AND_REGULATIONS: '/api/Regulations/RegulationSummary',
  GET_SYSTEMS_AND_REGULATIONS_DETAILS: '/api/Regulations/GetRegulationDetails',
  GET_CONTACT_US: '/api/ContactUs/Landing',
  GET_CONTACT_US_BULLETS: '/api/ContactUs/Bullets',
  GET_CONTACT_US_OFFICE: '/api/ContactUs/Offices',
  GET_FAHES_FAQS: '/api/Fahes/GetFahesFAQs',
  GET_FAHES_TRAFFIC_SERVICE: '/api/Fahes/GetFahesTrafficServices',
  GET_FAHES_FEEDBACK: '/api/Feedback/InsertFeedback',
  GET_TENDER_DOCUMENT: '/api/Tenders/SubmitTenderDocumentRequest',
  GET_CAREER_JOB: '/api/CareersJobs/ApplyForJob',
  SUBMIT_BECOME_RETAIL_SUPPLIER: '/api/RetailerSuppilerRequest/PostRetailerSupplierRequest',
  SUBMIT_INTEREST_INLEASING_PROPERTY: '/api/Kenar/SubmitInterestInLeasingProperty',
  GET_PROPERTY_ID: '/api/Kenar/KenarPropertyTermsAndConditions',
  GET_KENAR_PROPERTY_ID: '/api/Kenar/GetKenarPropertyByID',
  SUBSCRIPE_TENDER_ALERTS: '/api/TendersAlerts/subscribeToTenders',
  GET_TENDER_DETAIL: '/api/Tenders/GetTenderDetailsByURL',
  GET_TENDERS_TABLE: '/api/Tenders/getLatestTenderDetails',
  GET_FAHES_SUSTAINABLITY: '/api/FahesSustainability/GetFahesSustainabilityById',
  GET_FAHES_SUSTAINABLITY_AREA_TWO: '/api/FahesSustainability/FahesSustainabilityContentPagesAreaTwo',
  GET_FAHES_SUSTAINABLITY_BULLETS: '/api/FahesSustainability/FahesSustainabilityContentPagesAreaThree',
  GET_FAHES_SUSTAINABLITY_AREA_FOUR: '/api/FahesSustainability/GetFahesSustainabilityEvents',
  GET_CSR_DATA: '/api/SocialResponsibilityLanding/GetSocialResponsibilityLanding',
  GET_INVESTOR_RELATIONS_DATA: '/api/InvestorRelations/GetInvestorRelationsLandingPage',
  GET_INVESTOR_RELATIONS_DETAILS: '/api/InvestorRelations/GetInvestorRelationsContentPagesByURL',

  sendBookingConfirmationNotification: '/api/SiteUsers/SetSendBookingConfirmationNotification',
  sendBookingChangedNotification: '/api/SiteUsers/SetSendBookingChangedNotification',
  sendOrderDeliveredNotification: '/api/SiteUsers/SetSendOrderDeliveredNotification',
  sendEmailNotification: '/api/SiteUsers/SetSendEmailNotification',
  sendSMS: '/api/SiteUsers/SetSendSMSNotification',
};