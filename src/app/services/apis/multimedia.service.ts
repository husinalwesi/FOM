import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CMS_END_POINTS } from 'src/app/const/api';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getMultimediaLanding(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_MULTIMEDIA_LANDING, {
      params: body
    });
  }


  getFahesMultimediaLanding(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_FAHES_MULTIMEDIA_LANDING, {
      params: body
    });
  }

  getNewsLanding(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_NEWS_LANDING, {
      params: body
    });
  }

  getFahesNewsLanding(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_FAHES_NEWS_LANDING, {
      params: body
    });
  }

  getNewsBanner(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_NEWS_BANNER, {
      params: body
    });
  }
  getEventsBanner(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_EVENTS_BANNER, {
      params: body
    });
  }

  getNewsListing(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_NEWS_LISTING, {
      params: body
    });
  }

  getNewsDetail(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_NEWS_DETAIL, {
      params: body
    });
  }

  getFahesNewsDetails(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_FAHES_NEWS_DETAILS, {
      params: body
    });
  }

  getFahesEventDetails(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_FAHES_EVENT_DETAILS, {
      params: body
    });
  }
  getCheckPaid(body: any = {}): Observable<any> {
    return this.httpClient.post<any>(CMS_END_POINTS.GET_CHECK_PAID, {
      params: body
    });
  }

  getEventDetail(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_EVENT_DETAIL, {
      params: body
    });
  }
  GetLubricantsDetailsByLubricantCategoryID(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GetLubricantsDetailsByLubricantCategoryID, {
      params: body
    });
  }

  GetLubricantCategoryByURL(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GetLubricantCategoryByURL, {
      params: body
    });
  }

  GetLubricantsDetailsImagesByLubricantsDetailsId(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GetLubricantsDetailsImagesByLubricantsDetailsId, {
      params: body
    });
  }

  getAutoCareSubService(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_AUTO_CARE_SUB_SERVICE, {
      params: body
    });
  }

  getPromotionDetail(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_PROMOTION_DETAIL, {
      params: body
    });
  }

  getTransactionByID(body: any = {}, isFahesPage: boolean = false): Observable<any> {
    return this.httpClient.get<any>(isFahesPage ? CMS_END_POINTS.getTransactionByID_FAHES : CMS_END_POINTS.getTransactionByID, {
      params: body
    });
  }

  getCodeOfEthics(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_CODE_OF_ETHICS, {
      params: body
    });
  }
  getMediaCenterNews(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_MEDIA_CENTER_NEWS, {
      params: body
    });
  }
  getFahesAboutUs(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_FAHES_ABOUT_US, {
      params: body
    });
  }
  getFahesAboutUsBullets(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_FAHES_ABOUT_US_BULLETS, {
      params: body
    });
  }
  getFahesContactUsBullets(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_FAHES_CONTACT_US_BULLETS, {
      params: body
    });
  }
  getFahesContactUs(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_FAHES_CONTACT_US, {
      params: body
    });
  }

  getFahesHomePageMeta(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_FAHES_HOME, {
      params: body
    });
  }

  getFahesHomePageNews(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_FAHES_NEWS_HOME, {
      params: body
    });
  }

  getFahesHomePageContent(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_FAHES_HOME_CONTENT_PAGES, {
      params: body
    });
  }

  getFahesContactUsDetails(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_FAHES_CONTACT_US_OFFICE, {
      params: body
    });
  }
  getContactUs(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_CONTACT_US, {
      params: body
    });
  }
  getContactUsBullets(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_CONTACT_US_BULLETS, {
      params: body
    });
  }
  getContactUsDetails(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_CONTACT_US_OFFICE, {
      params: body
    });
  }
  getFahesWhatWeDo(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_FAHES_WHAT_WE_DO, {
      params: body
    });
  }
  getFahesWhoWeAre(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_FAHES_WHO_WE_ARE, {
      params: body
    });
  }
  getSystemsAndRegulations(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_SYSTEMS_AND_REGULATIONS, {
      params: body
    });
  }
  getSystemsAndRegulationsDetails(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_SYSTEMS_AND_REGULATIONS_DETAILS, {
      params: body
    });
  }
  getWoqodeInfo(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_WOQODE_INFO, {
      params: body
    });
  }
  getWoqodeTopup(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_WOQODE_TOPUP, {
      params: body
    });
  }
  getWoqodeBullets(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_WOQODE_BULLETS, {
      params: body
    });
  }
  getWoqodepriceI(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_WOQODE_PRICE, {
      params: body
    });
  }
  getWoqodepriceC(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_WOQODE_CORPORATE_PRICE, {
      params: body
    });
  }
  getFahesFaq(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_FAHES_FAQS, {
      params: body
    });
  }
  getFahesTrafficService(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_FAHES_TRAFFIC_SERVICE, {
      params: body
    });
  }
  getSustainabillityLanding(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_SUSTAINABILITY_LANDING, {
      params: body
    });
  }
  getSustainabillityBullets(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_SUSTAINABILITY_BULLETS, {
      params: body
    });
  }
  // getCareerFaqsHomePage(body: any = {}): Observable<any> {
  //   return this.httpClient.get<any>(CMS_END_POINTS.GET_CAREER_FAQ_HOMEPAGE, {
  //     params: body
  //   });
  // }
  getFahesSustainabilty(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_FAHES_SUSTAINABLITY, {
      params: body
    });
  }
  getCSRData(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_CSR_DATA, {
      params: body
    });
  }
  getFahesSustainabiltyAreaTwo(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_FAHES_SUSTAINABLITY_AREA_TWO, {
      params: body
    });
  }
  getFahesSustainabillityBullets(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_FAHES_SUSTAINABLITY_BULLETS, {
      params: body
    });
  }
  getFahesSustainabillityFour(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_FAHES_SUSTAINABLITY_AREA_FOUR, {
      params: body
    });
  }
  getCareerDetail(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_CAREER_DETAIL, {
      params: body
    });
  }
  getTenderDetail(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_TENDER_DETAIL, {
      params: body
    });
  }
  getProductDetail(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_PRODUCT_DETAIL, {
      params: body
    });
  }
  getProductBulletsDetail(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_PRODUCT_BULLETS_DETAIL, {
      params: body
    });
  }
  getServices(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_SERVICES, {
      params: body
    });
  }
  getServicesData(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_SERVICES_DATA, {
      params: body
    });
  }
  getCareerHome(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_CAREER_HOMEPAGE, {
      params: body
    });
  }
  getCareerTitle(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_CAREER_LANDING_CONTENT_BOX, {
      params: body
    });
  }
  getCareerLandingAreaOne(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_CAREER_LANDING_AREA_ONE, {
      params: body
    });
  }
  getCareerLandingAreaTwo(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_CAREER_LANDING_AREA_TWO, {
      params: body
    });
  }
  getCareerLandingAreaThree(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_CAREER_LANDING_AREA_THREE, {
      params: body
    });
  }
  getCareerFaqs(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_CAREER_FAQS, {
      params: body
    });
  }
  getCareerContentBox(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_CAREER_LANDING_CONTENT_BOX, {
      params: body
    });
  }
  getBulletsCodeOf(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_BULLETS_CODE_OF_ETHIC, {
      params: body
    });
  }
  getCareerJobs(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_CAREER_JOBS, {
      params: body
    });
  }
  getShafaf(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_SHAFAF_META, {
      params: body
    });
  }
  getFeaturedShafaf(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_SHAFAF_FEATURED, {
      params: body
    });
  }
  getFeaturedRates(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_SHAFAF_RATES, {
      params: body
    });
  }
  getFeaturedAccessories(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_SHAFAF_ACCESSORIES, {
      params: body
    });
  }
  getSuperMarketMeta(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_SUPER_MARKET_DATA, {
      params: body
    });
  }
  getSuperMarketReatilMeta(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_SUPER_MARKET_RETAILERS_DATA, {
      params: body
    });
  }
  getFeedbackCategoryFahes(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_FEEDBACK_FAHES_CATEGORY, {
      params: body
    });
  }

  getCareersFieldOfStudy(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_CAREERS_FIELS_OF_STUDY, {
      params: body
    });
  }

  getYearsofExperience(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_YEARS_OF_EXPERIANCE, {
      params: body
    });
  }

  getCurrentEmploymentStatus(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_CURRENT_EMPLOYMENT_STATUS, {
      params: body
    });
  }

  getEducationalDegree(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_EDUCATIONAL_DEGREE, {
      params: body
    });
  }

  getNationality(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_NATIONALITY, {
      params: body
    });
  }

  getPreviousEmp(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_PREVIOUS_EMP, {
      params: body
    });
  }

  getFeedbackSectorsFahes(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_FEEDBACK_FAHES_SECTORS, {
      params: body
    });
  }
  getFeedbackType(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_FEEDBACK_TYPE, {
      params: body
    });
  }
  getFeedbackDepartment(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_FEEDBACK_DEPARTMENT, {
      params: body
    });
  }

  getContentPageByURL(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_CONTENT_BY_URL, {
      params: body
    });
  }

  getContentPageByURLCSR(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_CONTENT_BY_URL_CSR, {
      params: body
    });
  }

  getServiceDetail(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_SERVICES_DETAIL_PAGE, {
      params: body
    });
  }
  getTenderBecomeASupplier(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_TENDER_SUPPLIER, {
      params: body
    });
  }
  getAutoCareSupplier(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_AUTO_CARE_SUPPLIER, {
      params: body
    });
  }

  getbwwoqoodSupplier(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_WITH_WOQOOD_SUPPLIER, {
      params: body
    });
  }


  getPaymentData(body: any = {}, site = '', isPToken = false): Observable<any> {
    // isPToken
    const withoutPtoken = site === 'woqod' ? CMS_END_POINTS.GET_PAYMENT_DATA : CMS_END_POINTS.GET_PAYMENT_DATA_FAHES;
    const withPtoken = site === 'woqod' ? CMS_END_POINTS.GET_PAYMENT_DATA_PTOKEN : CMS_END_POINTS.GET_PAYMENT_DATA_FAHES_PTOKEN;
    return this.httpClient.get<any>(isPToken ? withPtoken : withoutPtoken, {
      params: body
    });
  }

  getPaymentDataSaveCard(body: any = {}, site = ''): Observable<any> {
    return this.httpClient.get<any>(site === 'woqod' ? CMS_END_POINTS.GET_PAYMENT_DATA_SAVE_CARD : CMS_END_POINTS.GET_PAYMENT_DATA_FAHES_SAVE_CARD, {
      params: body
    });
  }

  getPaymentDataQP(body: any = {}, site = ''): Observable<any> {
    return this.httpClient.get<any>(site === 'woqod' ? CMS_END_POINTS.GET_PAYMENT_DATA_QP : CMS_END_POINTS.GET_PAYMENT_DATA_QP_FAHES, {
      params: body
    });
  }

  getContentPageByIDetaData(pageID: string): Observable<any> {
    const endpointMapping: { [key: string]: string } = {
      'environmental-management': CMS_END_POINTS.GET_ENVIRONMENTAL_MANAGMENT,
      'petrol-stations-safety-instructions': CMS_END_POINTS.GET_PETROL_STATION_SAFETY_INSTRUCTIONS,
      'integrated-management-system': CMS_END_POINTS.GET_INTEGRATED_MANAGMENT_SYSTEM,
      'awareness-campaign': CMS_END_POINTS.GET_AWARENESS_CAMPAIGN,
      'brand-guidelines': CMS_END_POINTS.GET_BRAND_GUIDELINES,
      'company-profile': CMS_END_POINTS.GET_COMPANY_PROFILE,
      'health-and-safety': CMS_END_POINTS.GET_HEALTH_AND_SAFETY,
      'promotions': CMS_END_POINTS.GET_PROMOTIONS_META,
      'why-woqod': CMS_END_POINTS.GET_WHY_WOQOD,
      'careers': CMS_END_POINTS.GET_CAREERS,
      'what-we-do': CMS_END_POINTS.GET_WHAT_WE_DO,
      'equality-diversity-inclusion': CMS_END_POINTS.GET_EQUALITY_DIVERSITY_INCLUSION,
      'what-we-look-for': CMS_END_POINTS.GET_WHAT_WE_LOOK_FOR,
      'interview-tips': CMS_END_POINTS.GET_INTERVIEW_TIPS,
      'get-noticed': CMS_END_POINTS.GET_NOTICED,
      'talent-development-strategy': CMS_END_POINTS.GET_TALENT_DEVELOPMENT_STRATEGY,
      'qatarization': CMS_END_POINTS.GET_QATARRAIZATION,
      'life-at-woqod': CMS_END_POINTS.GET_LIFE_AT_WOQOD,
      'woqod-culture': CMS_END_POINTS.GET_WOQOD_CULTURE,
      'benefits': CMS_END_POINTS.GET_BENIFITS,
      'top-ten-reason-to-choose-woqod': CMS_END_POINTS.GET_TOP_TEN_REASON_TO_CHOOSE_WOQOD,
      'meet-our-team': CMS_END_POINTS.GET_MEET_OUR_TEAM,
      'five-ways-to-help-you-find-the-right-career-path': CMS_END_POINTS.GET_FIVE_WAY_TO_HELP_YOU_FIND_THE_RIGHT_CAREER_PATH,
      'woqode-tag': CMS_END_POINTS.GET_WOQODE_TAG,
      'retail': CMS_END_POINTS.GET_RETAIL,
      'auto-care-service': CMS_END_POINTS.GET_AUTO_CARE_SERVICE,
      'business-with-woqod': CMS_END_POINTS.GET_BUSINESS_WITH_WOQOD,
      'sustainability': CMS_END_POINTS.GET_SUSTAINABILITY,
      'our-story': CMS_END_POINTS.GET_OUR_STORY,
      'student-opportunties': CMS_END_POINTS.GET_STUDENT_OPPORTUNITIES,
      'vision-mission-values': CMS_END_POINTS.GET_VISION_MISSION_VALUES,
      'kenar-landing': CMS_END_POINTS.GET_KENAR_LANDING,
      'sidra': CMS_END_POINTS.GET_SIDRA,
      'tender-landing': CMS_END_POINTS.GET_TINDER_LANDING,
      'fahes-faq': CMS_END_POINTS.GET_FAHES_FAQ_LANDING,
      'faq': CMS_END_POINTS.GET_FAQ_LANDING,
    };
    const API_PATH = endpointMapping[pageID];
    return this.httpClient.get<any>(API_PATH);
  }

  getEventsListing(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_EVENTS_LISTING, {
      params: body
    });
  }

  getCareersCarouselData(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_CAREERS_CAROUSEL_DATA, {
      params: body
    });
  }

  getWoqodeTagCarouselData(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_WOQODE_TAG_CAROUSEL_DATA, {
      params: body
    });
  }
  getWoqodePricesCorporate(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_WOQODE_PRICES_DATA, {
      params: body
    });
  }
  getWoqodePricesIndividual(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_WOQODE_PRICES_INDIVIDUAL_DATA, {
      params: body
    });
  }

  getSocialLinks(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_SOCIAL_LINKS, {
      params: body
    });
  }

  getBusinessWithWoqodImages(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_BUSINESS_WITH_WOQOD_IMAGES, {
      params: body
    });
  }

  getFahesFAQCategories(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_FAHES_FAQ_CATEGORIES, {
      params: body
    });
  }

  getFAQCategories(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_FAQ_CATEGORIES_FILTER, {
      params: body
    });
  }
  getFAQListCategories(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_FAQ_CATEGORIES_FILTER_LIST, {
      params: body
    });
  }

  getSustainabilityEvents(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_SUSTAINABILITY_EVENTS, {
      params: body
    });
  }
  getSustainabilityNews(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_SUSTAINABILITY_NEWS, {
      params: body
    });
  }

  getRetailCarouselData(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_RETAIL_CAROUSEL_DATA, {
      params: body
    });
  }

  getPromotionCategories(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_PROMOTION_CATEGORIES, {
      params: body
    });
  }

  getEventCategories(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_EVENT_CATEGORIES, {
      params: body
    });
  }

  getTeamMembers(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_TEAM_MEMBERS, {
      params: body
    });
  }
  getTeamMembersErm(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_TEAM_MEMBERS_ERM, {
      params: body
    });
  }

  getAutoCarePromotions(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_AUTOCARE_PROMOTIONS, {
      params: body
    });
  }

  getAboutus(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_ABOUTUS, {
      params: body
    });
  }

  getOurLeaderShip(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.getOurLeaderShip, {
      params: body
    });
  }

  getPromotionLocations(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_PROMOTION_LOCATIONS, {
      params: body
    });
  }

  GetKenarPropertiesImages(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GetKenarPropertiesImages, {
      params: body
    });
  }

  getStations(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_STATIONS, {
      params: body
    });
  }

  getPromotionStatuses(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_PROMOTION_STATUSES, {
      params: body
    });
  }

  getPromotionFeaturedItems(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_PROMOTIONS_FEATURED_ITEMS, {
      params: body
    });
  }

  getPromotionsList(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_PROMOTIONS_LIST, {
      params: body
    });
  }

  getRelatedPromotionsList(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_RELATED_PROMOTIONS_LIST, {
      params: body
    });
  }

  getRelatedNews(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_RELATED_NEWS, {
      params: body
    });
  }
  getRelatedNewsFahes(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_RELATED_NEWS_FAHES, {
      params: body
    });
  }

  getEventsLanding(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_EVENTS_LANDING, {
      params: body
    });
  }


  getMultimediaImages(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_MULTIMEDIA_IMAGES, {
      params: body
    });
  }

  getMultimediaVideos(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_MULTIMEDIA_VIDEOS, {
      params: body
    });
  }

  getFahesMultimediaByType(body: any = {}, pageType: string): Observable<any> {
    return this.httpClient.get<any>(pageType === 'video' ? CMS_END_POINTS.GET_FAHES_MULTIMEDIA_VIDEOS : pageType === 'photo' ? CMS_END_POINTS.GET_FAHES_MULTIMEDIA_IMAGES : CMS_END_POINTS.GET_FAHES_MULTIMEDIA_GALLERIES, {
      params: body
    });
  }

  getGalleriesListing(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_MULTIMEDIA_GALLERIES, {
      params: body
    });
  }

  getWoqodeTimeline(body: any = {}, tabKey: string): Observable<any> {
    const apiURL = tabKey === "corporate" ? CMS_END_POINTS.GET_WOQODE_INDIVIDUAL_COORPORATE_TIMELINE : CMS_END_POINTS.GET_WOQODE_TIMELINE;
    return this.httpClient.get<any>(apiURL, {
      params: body
    });
  }

  getBusinessWithWoqodProducts(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_BUSINESS_WITH_WOQOD_PRODUCTS, {
      params: body
    });
  }

  getTopUpSteps(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_TOP_UP_STEPS, {
      params: body
    });
  }

  getBecomeASupplierMeta(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.getBecomeASupplierMeta, {
      params: body
    });
  }

  getRetailPrices(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_RETAIL_PRICES, {
      params: body
    });
  }
  getErmBullets(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_BULLETS_ERM, {
      params: body
    });
  }
  getErmContent(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_CONTENT_PAGE_ERM, {
      params: body
    });
  }
  getFuelPrices(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.FUEL_PRICE_YEAR, {
      params: body
    });
  }
  getErmData(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_DATA_ERM, {
      params: body
    });
  }

  getJobs(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_JOBS, {
      params: body
    });
  }
  getSearchItem(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_SEARCH_ITEM, {
      params: body
    });
  }
  getLubricants(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_LUBRICANT_LANDING, {
      params: body
    });
  }
  getLubricantsCarsoul(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_LUBRICANT_CARSOUL_LANDING, {
      params: body
    });
  }
  getLubricantsMeta(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_LUBRICANT_LANDING_META, {
      params: body
    });
  }

  getSiteUserDeactivateReasons(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.getSiteUserDeactivateReasons, {
      params: body
    });
  }

  getAutoCareSubServicesPricingCategory(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.getAutoCareSubServicesPricingCategory, {
      params: body
    });
  }

  getTags(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_JOB_STAGS, {
      params: body
    });
  }

  getJobsCodes(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_JOBS_CODES, {
      params: body
    });
  }

  getCareerLocations(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_CAREER_LOCATIONS, {
      params: body
    });
  }

  getCareerDepartments(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_CAREER_DEPARTMENTS, {
      params: body
    });
  }

  getPromotionsRetail(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_RETAIL_PROMOTIONS, {
      params: body
    });
  }

  getAutoCareSubServices(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_AUTO_CARE_SUB_SERVICES, {
      params: body
    });
  }

  getMapData(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.getMapData, {
      params: body
    });
  }

  getMapDataNew(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.getMapDataNew, {
      params: body
    });
  }

  getStationTypes(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.getStationTypes, {
      params: body
    });
  }

  GetAllWorkingHoursTypes(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GetAllWorkingHoursTypes, {
      params: body
    });
  }

  getListCategorySupplier(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_LIST_CATEGORY_SUPPLIER, {
      params: body
    });
  }

  GetSupplierRequestProductCategory(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GetSupplierRequestProductCategory, {
      params: body
    });
  }

  getDashboardAppointmentHistory(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_DASHBOARD_APPOINTMENT_HISTORY, {
      params: body
    });
  }
  getDashboardWalletHistory(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_DASHBOARD_WALLET_HISTORY, {
      params: body
    });
  }
  getDashboardWalletTopupHistory(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_DASHBOARD_WALLET_TOPUP_HISTORY, {
      params: body
    });
  }

  getWoqodHelpAreas(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GetWoqodHelpAreas, {
      params: body
    });
  }

  getDashboardAppointmentHistoryByID(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.getDashboardAppointmentHistoryByID, {
      params: body
    });
  }



  getMyVehicle(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.getMyVehicle, {
      params: body
    });
  }

  GetSiteUserVehiclesPlateTypes(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GetSiteUserVehiclesPlateTypes, {
      params: body
    });
  }

  getSiteUserWalletAmmount(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.getSiteUserWalletAmmount, {
      params: body
    });
  }

  getFahesNews(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_FAHES_NEWS_MEDIA_CENTER, {
      params: body
    });
  }
  getAmountOfWallet(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_AMOUNT_OF_WALLET, {
      params: body
    });
  }

  getFahesEvents(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_FAHES_EVENTS, {
      params: body
    });
  }

  getMilestones(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_FAHES_MILESTONES, {
      params: body
    });
  }

  getKenarProperties(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_KENAR_PROPERTIES, {
      params: body
    });
  }

  getKenarHeroSlider(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_KENAR_SLIDER, {
      params: body
    });
  }

  deleteAccount(body: any = {}): Observable<any> {
    return this.httpClient.post<any>(CMS_END_POINTS.deleteAccount, body);
  }

  requestAutoCareSupplier(body: any = {}): Observable<any> {
    return this.httpClient.post<any>(CMS_END_POINTS.REQUEST_AUTO_CARE_AUPPLIER, body);
    // {
    //   "autoCareSupplierRequestID": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    //   "qid": 0,
    //   "email": "string",
    //   "supplierName": "string",
    //   "contactPerson": "string",
    //   "autoCareService": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    //   "productDescription": "string",
    //   "crNumber": "string",
    //   "crStartDate": "2023-08-25T10:39:17.704Z",
    //   "crEndDate": "2023-08-25T10:39:17.704Z",
    //   "companyProfile": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    //   "cr": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    //   "tradeLincense": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    //   "taxCard": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    //   "declaration": "string",
    //   "loackedOn": "2023-08-25T10:39:17.704Z",
    //   "createdBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    //   "createdByName": "string",
    //   "modifiedByName": "string",
    //   "lockedByName": "string"
    // }
  }
  requestEtagGenralInformation(body: any = {}): Observable<any> {
    return this.httpClient.post<any>(CMS_END_POINTS.GET_E_TAG_GENRAL_INFORMATION, body);
    // {
    //   "autoCareSupplierRequestID": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    //   "qid": 0,
    //   "email": "string",
    //   "supplierName": "string",
    //   "contactPerson": "string",
    //   "autoCareService": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    //   "productDescription": "string",
    //   "crNumber": "string",
    //   "crStartDate": "2023-08-25T10:39:17.704Z",
    //   "crEndDate": "2023-08-25T10:39:17.704Z",
    //   "companyProfile": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    //   "cr": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    //   "tradeLincense": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    //   "taxCard": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    //   "declaration": "string",
    //   "loackedOn": "2023-08-25T10:39:17.704Z",
    //   "createdBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    //   "createdByName": "string",
    //   "modifiedByName": "string",
    //   "lockedByName": "string"
    // }
  }

  subscripeToTenderAlerts(body: any = {}): Observable<any> {
    return this.httpClient.post<any>(CMS_END_POINTS.SUBSCRIPE_TO_TENDER_ALERTS, body);
    // {
    //   "tendersAlertEmailID": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    //   "entityId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    //   "titleAR": "string",
    //   "titleEN": "string",
    //   "subjectAR": "string",
    //   "subjectEN": "string",
    //   "fromEmail": "string",
    //   "emailBodyAR": "string",
    //   "emailBodyEN": "string",
    //   "createdOn": "2023-08-25T10:41:42.041Z",
    //   "modifiedOn": "2023-08-25T10:41:42.041Z",
    //   "loackedOn": "2023-08-25T10:41:42.041Z",
    //   "createdBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    //   "modifiedBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    //   "lockedBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    // }
  }
  fahesFeedback(body: any = {}): Observable<any> {
    return this.httpClient.post<any>(CMS_END_POINTS.GET_FAHES_FEEDBACK, body);
    //   curl -X 'POST' \
    // 'http://20.173.96.73:8080/InsertFeedback' \
    // -H 'accept: text/plain' \
    // -H 'Content-Type: multipart/form-data' \
    // -F 'TitleEN=xcvxcvcxvcxv' \
    // -F 'SectorID=xxcvxcvxcxv' \
    // -F 'TitleAR=xcvxcvxcxcv' \
    // -F 'MobileNumber=xcvcxvcvxcxv' \
    // -F 'EmailAddress=xcvxcvxcv' \
    // -F 'CategoryID=xcvcvxxxvc' \
    // -F 'FullName=xvcxvvxcvxc' \
    // -F 'Company=xcvxcvxvc' \
    // -F 'Comment=xcvcxvcvxcxv'

  }
  tenderDocument(body: any = {}): Observable<any> {
    return this.httpClient.post<any>(CMS_END_POINTS.GET_TENDER_DOCUMENT, body);
    //   curl -X 'POST' \
    // 'http://20.173.96.73:8080/InsertFeedback' \
    // -H 'accept: text/plain' \
    // -H 'Content-Type: multipart/form-data' \
    // -F 'TitleEN=xcvxcvcxvcxv' \
    // -F 'SectorID=xxcvxcvxcxv' \
    // -F 'TitleAR=xcvxcvxcxcv' \
    // -F 'MobileNumber=xcvcxvcvxcxv' \
    // -F 'EmailAddress=xcvxcvxcv' \
    // -F 'CategoryID=xcvcvxxxvc' \
    // -F 'FullName=xvcxvvxcvxc' \
    // -F 'Company=xcvxcvxvc' \
    // -F 'Comment=xcvcxvcvxcxv'

  }
  careerJob(body: any = {}): Observable<any> {
    return this.httpClient.post<any>(CMS_END_POINTS.GET_CAREER_JOB, body);
    //   curl -X 'POST' \
    // 'http://20.173.96.73:8080/InsertFeedback' \
    // -H 'accept: text/plain' \
    // -H 'Content-Type: multipart/form-data' \
    // -F 'TitleEN=xcvxcvcxvcxv' \
    // -F 'SectorID=xxcvxcvxcxv' \
    // -F 'TitleAR=xcvxcvxcxcv' \
    // -F 'MobileNumber=xcvcxvcvxcxv' \
    // -F 'EmailAddress=xcvxcvxcv' \
    // -F 'CategoryID=xcvcvxxxvc' \
    // -F 'FullName=xvcxvvxcvxc' \
    // -F 'Company=xcvxcvxvc' \
    // -F 'Comment=xcvcxvcvxcxv'

  }

  becomeARetailSupplier(body: any = {}): Observable<any> {
    return this.httpClient.post<any>(CMS_END_POINTS.SUBMIT_BECOME_RETAIL_SUPPLIER, body);
  }

  submitInterestInLeasingProperty(body: any = {}): Observable<any> {
    return this.httpClient.post<any>(CMS_END_POINTS.SUBMIT_INTEREST_INLEASING_PROPERTY, body);
  }


  subscribeToTenderAlerts(body: any = {}): Observable<any> {
    return this.httpClient.post<any>(CMS_END_POINTS.SUBSCRIPE_TENDER_ALERTS, body);
  }

  // 

  getHomepage(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_HOMEPAGE, {
      params: body
    });
  }

  getHomePageSlider(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_HOMEPAGE_SLIDER, {
      params: body
    });
  }

  getHomePageNews(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_HOMEPAGE_NEWS, {
      params: body
    });
  }

  getHomePagePromotions(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_HOMEPAGE_PROMOTIONS, {
      params: body
    });
  }

  getHomePageTenders(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_HOMEPAGE_TENDERS, {
      params: body
    });
  }
  getTendersTable(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_TENDERS_TABLE, {
      params: body
    });
  }

  getHomePageSocialmedia(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_HOMEPAGE_SOCIALMEDIA, {
      params: body
    });
  }
  getHomePageWoqodApp(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_HOMEPAGE_WOQOD_APP, {
      params: body
    });
  }

  getHomePageProductsAndServices(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_HOMEPAGE_PRODUCTS_SERVICES, {
      params: body
    });
  }

  getFaqWoqode(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_WOQODE_FAQ, {
      params: body
    });
  }

  getSidraPromotios(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_SIDRA_PROMOTIONS, {
      params: body
    });
  }

  getSidraOrders(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_SIDRA_ORDERS, {
      params: body
    });
  }
  getFAQ(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_FAQ_CATEGORIES, {
      params: body
    });
  }
  getDataBCM(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_DATA_BCM, {
      params: body
    });
  }
  getContentPageBCM(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_DATA_ARRE_TWO, {
      params: body
    });
  }
  getContentPageCSR(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_CONTENT_CSR, {
      params: body
    });
  }
  getBulletsBCM(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_BULLETS_BCM, {
      params: body
    });
  }
  getEventsBCM(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_EVENTS_BCM, {
      params: body
    });
  }
  getEventsCSR(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_EVENTS_CSR, {
      params: body
    });
  }
  getStickyIcons(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_STICKY_ICONS, {
      params: body
    });
  }
  getStaticMessage(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_STATIC_MESSAGE_PAYMENT_SUCCESS, {
      params: body
    });
  }
  getRentShopValidate(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_RENT_SHOP_VALIDATE, {
      params: body
    });
  }
  getCategoryListRentShop(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_RENT_SHOP_BUSINESS_CATEGOTY, {
      params: body
    });
  }
  getRentShopCategoryList(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_BUSINESS_CATEGORY, {
      params: body
    });
  }
  getNumberOfShopRList(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_SHOPS_CATEGORY, {
      params: body
    });
  }
  getStationList(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_STATION_CATEGORY, {
      params: body
    });
  }
  getSubSitesList(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_SUBSITE_LIST, {
      params: body
    });
  }

  getPropertyId(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_PROPERTY_ID, {
      params: body
    });
  }

  getKenarPropertyByID(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_KENAR_PROPERTY_ID, {
      params: body
    });
  }

  getTenderStatus(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_STATUS_TENDERS, {
      params: body
    });
  }
  getSuperMarketTable(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_SUPER_MARKET_TABLE, {
      params: body
    });
  }
  getTrafficeServiceTable(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_TRAFFICE_SERVICE_TABLE, {
      params: body
    });
  }
  getSuperMarketRetailersTable(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_SUPER_MARKET_RETAILERS_TABLE, {
      params: body
    });
  }
  getSliderProductandService(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_SLIDER_PRODUCT_AND_SERVICE, {
      params: body
    });
  }
  getPromotionsProductandSerive(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_PROMOTIONS_PRODUCT_AND_SERVICE, {
      params: body
    });
  }
  getFahesHomePageSerive(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_FAHES_HOMEPAGE_SERVICE, {
      params: body
    });
  }
  getDataProductandSerive(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_DATA_PRODUCT_AND_SERVICE, {
      params: body
    });
  }
  getProductListProductandSerive(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_PRODUCT_LIST_PRODUCT_AND_SERVICE, {
      params: body
    });
  }
  getYears(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_YEARS, {
      params: body
    });
  }

  updateUserProfile(body: any = {}): Observable<any> {
    return this.httpClient.post<any>(CMS_END_POINTS.updateUserProfile, body);
    // {
    //   "autoCareSupplierRequestID": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    //   "qid": 0,
    //   "email": "string",
    //   "supplierName": "string",
    //   "contactPerson": "string",
    //   "autoCareService": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    //   "productDescription": "string",
    //   "crNumber": "string",
    //   "crStartDate": "2023-08-25T10:39:17.704Z",
    //   "crEndDate": "2023-08-25T10:39:17.704Z",
    //   "companyProfile": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    //   "cr": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    //   "tradeLincense": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    //   "taxCard": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    //   "declaration": "string",
    //   "loackedOn": "2023-08-25T10:39:17.704Z",
    //   "createdBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    //   "createdByName": "string",
    //   "modifiedByName": "string",
    //   "lockedByName": "string"
    // }
  }

  getUserFlags(body: any = {}, flagName: string): Observable<any> {

    // 
    // 
    let params = `?SiteUsersID=${body.SiteUsersID}&Status=${body.Status}`;

    let END_POINT = '';
    if (flagName === 'sendBookingConfirmationNotification') END_POINT = CMS_END_POINTS.sendBookingConfirmationNotification;
    else if (flagName === 'sendBookingChangedNotification') END_POINT = CMS_END_POINTS.sendBookingChangedNotification;
    else if (flagName === 'sendOrderDeliveredNotification') END_POINT = CMS_END_POINTS.sendOrderDeliveredNotification;
    else if (flagName === 'sendEmailNotification') END_POINT = CMS_END_POINTS.sendEmailNotification;
    else if (flagName === 'sendSMS') END_POINT = CMS_END_POINTS.sendSMS;
    // 
    END_POINT += params;
    // 
    return this.httpClient.post<any>(END_POINT, {});
    // return this.httpClient.post<any>(END_POINT, {
    //   params: body
    // });
  }

  getUserByToken(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_USER_DETAILS_BY_TOKEN, {
      params: body
    });
  }

  fakeAPI(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.FAKE_API, {
      params: body
    });
  }

  getHeader(body: any = {}, lang: string = ''): Observable<any> {
    return this.httpClient.get<any>(lang === 'en' ? CMS_END_POINTS.GET_HEADER : CMS_END_POINTS.GET_HEADER_AR, {
      params: body
    });
  }

  getHeaderHelper(body: any = {}): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.getHeaderHelper, {
      params: body
    });
  }

  getFooter(body: any = {}, lang: string = ''): Observable<any> {
    return this.httpClient.get<any>(lang === 'en' ? CMS_END_POINTS.GET_FOOTER : CMS_END_POINTS.GET_FOOTER_AR, {
      params: body
    });
  }

  getFooterBottom(body: any = {}, lang: string = ''): Observable<any> {
    return this.httpClient.get<any>(lang === 'en' ? CMS_END_POINTS.getFooterBottom : CMS_END_POINTS.GET_FOOTER_AR, {
      params: body
    });
  }

  getInvestorRelationsMeta(body: any = {},): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_INVESTOR_RELATIONS_DATA, {
      params: body
    });
  }

  getInvestorRelationsDetailsMeta(body: any = {},): Observable<any> {
    return this.httpClient.get<any>(CMS_END_POINTS.GET_INVESTOR_RELATIONS_DETAILS, {
      params: body
    });
  }

  // getLubricants(body: any = {}): Observable<any> {
  //   return this.httpClient.get<any>(CMS_END_POINTS.GET_LUBRICANTS_LANDING, {
  //     params: body
  //   });
  // }

  // getFeaturedLubricants(body: any = {}): Observable<any> {
  //   return this.httpClient.get<any>(CMS_END_POINTS.GET_LUBRICANTS_FEATURED, {
  //     params: body
  //   });
  // }

  // getFeaturedProducts(body: any = {}): Observable<any> {
  //   return this.httpClient.get<any>(CMS_END_POINTS.GET_LUBRICANTS_FEATURED_PRODUCTS, {
  //     params: body
  //   });
  // }

}
