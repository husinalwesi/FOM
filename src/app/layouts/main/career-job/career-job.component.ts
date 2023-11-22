import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { MultimediaService } from "src/app/services/apis/multimedia.service";
import { MetaTagsService } from "src/app/services/meta-tags.service";
import { RouteLocalizationPipe } from 'src/app/pipes/route-localization.pipe';
import { GUID } from "src/app/const/guid";
import { Subscription } from 'rxjs';
import { TranslationService } from "src/app/i18n/translation.service";

@Component({
  selector: 'app-career-job',
  templateUrl: './career-job.component.html',
  styleUrls: ['./career-job.component.scss']
})
export class CareerJobComponent {
  private routerEventsSubscription: Subscription;
  id: string | null = "";
  lang: string = 'en';
  data: any = null;
  isSubmitted: any = {
    gender: false,
    firstname: false,
    secondname: false,
    lastname: false,
    qid: false,
    email: false,
    cv: false,
    phone: false,
    eduDeg: false,
    fieldStudy: false,
    currentEmp: false,
    yearsExperince: false,
    workIndustry: false,
    previousEmployer: false,
    previouswork: false,
    universityDegree: false,
    nationality: false
  }
  isModalEnabled: boolean = false
  modalMessage: any = {
    title: {
      en: '',
      ar: ''
    },
    description: {
      en: '',
      ar: ''
    }
  }
  nationaltyDDL: any = {
    selected: null,
    placeholder: 'PLACEHOLDER.FIELD',
    list: []
  };

  genderDDL: any = {
    selected: null,
    placeholder: 'PLACEHOLDER.GENDER',
    list: [
      {
        key: 1,
        title: {
          en: 'Mr',
          ar: 'السيد'
        }
      },
      {
        key: 2,
        title: {
          en: 'Ms',
          ar: 'السيدة'
        }
      }
    ]
  };

  educationalDegreeDDL: any = {
    selected: null,
    placeholder: 'PLACEHOLDER.EDUCATION',
    list: []
  }

  currentEmploymentStatusDDL: any = {
    selected: null,
    placeholder: 'PLACEHOLDER.CURRENT',
    list: []
  };

  yearsOfExpDDL: any = {
    selected: null,
    placeholder: 'PLACEHOLDER.YEARS',
    list: []
  }

  previousEmpDDL: any = {
    selected: null,
    placeholder: 'PLACEHOLDER.INDUSTRY',
    list: [
    ]
  };

  fieldOfStudyDDL: any = {
    selected: null,
    placeholder: 'PLACEHOLDER.FIELD',
    list: [
    ]
  };

  sectorDDL: any = {
    selected: null,
    placeholder: "FEEDBACK.SELECT_SECTOR",
    list: []
  };

  breadCrumb: any = [
    {
      title: 'BREADCRUMB.CAREERS',
      path: '/careers'
    },
    {
      title: 'BREADCRUMB.CAREER_JOBS',
      path: '/'
    },
  ];

  formData: any = {
    jobTitle: "",
    firstname: "",
    secondname: "",
    lastname: "",
    // nationality: "",
    qid: "",
    email: "",
    phone: "",
    // educationalDegree: "",
    // fieldofStudy: "",
    // current: "",
    yearsExperince: "",
    // workIndustry: "",
    previousEmployer: "",
  };

  cv: any = {
    label: "",
    file: null,
    url: "",
    accept: ["pdf", "word"],
    isRequired: true,
  };

  universityDegree: any = {
    label: "",
    file: null,
    url: "",
    accept: ["pdf", "word", "jpg", "png"],
    isRequired: true,
  };

  constructor(
    private multimediaService: MultimediaService,
    private translate: TranslateService,
    private router: Router,
    private metaTagsService: MetaTagsService,
    private route: ActivatedRoute,
    private routeLocalizationPipe: RouteLocalizationPipe,
    private TranslationService: TranslationService,
  ) {
    // this.id = this.route.snapshot.paramMap.get('ID');
    this.lang = this.TranslationService.getSelectedLanguage();
    this.routerEventsSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // this.id = this.route.snapshot.paramMap.get('ID');
        this.getData();
      }
    });
  }

  ngOnInit(): void {
    this.getCareersFieldOfStudy();
    this.getYearsofExperienceDDL();
    this.getCurrentEmploymentStatusDDL();
    this.getEducationalDegreeDDL();
    this.getNationalityDDL()
    this.getPreviousEmpDDL();
    // this.getSector();
    this.getStaticMessage()
    this.getData();
  }

  getData() {
    this.id = this.route.snapshot.paramMap.get('ID');
    this.multimediaService.getCareerDetail({ id: this.id }).subscribe((response) => {
      this.data = {
        title: {
          en: response?.titleEN,
          ar: response?.titleAR
        },
        description: {
          en: response?.descriptionEN,
          ar: response?.descriptionAR
        },
        jobCode: {
          en: response?.jobCodeEN,
          ar: response?.jobCodeAR,
        }
      }
      this.formData.jobTitle = this.lang ? response?.titleEN : response?.titleAR;
      this.updateBreadCrumb();
      this.updateMetaData();
    },
      (error) => {
        this.router.navigate([this.routeLocalizationPipe.transform('/error/404')], { replaceUrl: true })
      }
    );
  }

  getCareersFieldOfStudy() {
    this.multimediaService.getCareersFieldOfStudy().subscribe((response) => {
      this.fieldOfStudyDDL.list = (response || []).map((item: any) => {
        return {
          key: item.detailesId,
          title: {
            en: item.nameEn,
            ar: item.nameAr
          }
        }
      });
    });
  }

  getYearsofExperienceDDL() {
    this.multimediaService.getYearsofExperience().subscribe((response) => {
      this.yearsOfExpDDL.list = (response || []).map((item: any) => {
        return {
          key: item.detailesId,
          title: {
            en: item.nameEn,
            ar: item.nameAr
          }
        }
      });
    });
  }

  getCurrentEmploymentStatusDDL() {
    this.multimediaService.getCurrentEmploymentStatus().subscribe((response) => {
      this.currentEmploymentStatusDDL.list = (response || []).map((item: any) => {
        return {
          key: item.detailesId,
          title: {
            en: item.nameEn,
            ar: item.nameAr
          }
        }
      });
    });
  }

  getEducationalDegreeDDL() {
    this.multimediaService.getEducationalDegree().subscribe((response) => {
      this.educationalDegreeDDL.list = (response || []).map((item: any) => {
        return {
          key: item.detailesId,
          title: {
            en: item.nameEn,
            ar: item.nameAr
          }
        }
      });
    });
  }

  getNationalityDDL() {
    this.multimediaService.getNationality().subscribe((response) => {
      this.nationaltyDDL.list = (response || []).map((item: any) => {
        return {
          key: item.detailesId,
          title: {
            en: item.nameEn,
            ar: item.nameAr
          }
        }
      });
    });
  }

  getPreviousEmpDDL() {
    this.multimediaService.getPreviousEmp().subscribe((response) => {
      this.previousEmpDDL.list = (response || []).map((item: any) => {
        return {
          key: item.detailesId,
          title: {
            en: item.nameEn,
            ar: item.nameAr
          }
        }
      });
    });
  }

  updateBreadCrumb() {
    this.breadCrumb[1].title = this.data.title[this.lang];
  }

  updateMetaData() {
    this.metaTagsService.updateMetaTags({
      title: this.data.title[this.lang] || "Career Job | Woqod",
      description: this.data.description[this.lang] || "Career Job | Woqod",
      keywords: this.data.keywords || ["Woqod", "Career Job"],
      img: '', // Meta Image By Ammar
    });
  }

  onSubmit(form: any) {
    this.isSubmitted = {
      gender: true,
      firstname: true,
      secondname: true,
      lastname: true,
      qid: true,
      email: true,
      cv: true,
      phone: true,
      eduDeg: true,
      fieldStudy: true,
      currentEmp: true,
      yearsExperince: true,
      workIndustry: true,
      previousEmployer: true,
      previouswork: true,
      universityDegree: true,
      nationality: true
    }
    if (
      form.valid &&
      this.cv.file &&
      this.universityDegree.file
    ) {
      console.log('success', form.value);
      this.submitFeedback();
    }
    console.log('ss', form.valid);
  }

  submitFeedback() {
    const formData = new FormData();
    // formData.append("JobID", uuidv4());
    formData.append("JobID", (this.id || '').toString());
    // formData.append("gender", this.genderDDL.selected.key)
    formData.append("JobTitle", this.formData.jobTitle);
    formData.append("FirstName", this.genderDDL.selected.title[this.lang] + ' ' + this.formData.firstname);
    formData.append("MiddleName", this.formData.secondname);
    formData.append("LastName", this.formData.lastname);
    formData.append("Nationality", this.nationaltyDDL.selected.key);
    formData.append("QID_Passport_Number", this.formData.qid);
    formData.append("Email", this.formData.email);
    formData.append("MobileNumber", this.formData.phone);
    formData.append("EducationalDegree", this.educationalDegreeDDL.selected.key);
    formData.append("FieldOfStudyID", this.fieldOfStudyDDL.selected.key);
    // formData.append("FieldOfStudyText", this.formData.fieldofStudy);
    formData.append("CurrentEmploymentStatus", this.currentEmploymentStatusDDL.selected.key);
    formData.append("YearsofExperience", this.yearsOfExpDDL.selected.key);
    formData.append("PreviousWorkIndustry", this.formData.workIndustry);
    formData.append("PreviousEmployer", this.previousEmpDDL?.selected?.key);

    formData.append("CV", this.cv.file);
    formData.append("UniversityDegrees", this.universityDegree.file);
    console.log(formData);
    this.multimediaService.careerJob(formData).subscribe(
      (response) => {
        this.isModalEnabled = true;
        // this.router.navigateByUrl(this.routeLocalizationPipe.transform('/careers/career-job/success'));
      },
      (error) => {
        alert('an error occurred: ' + error.statusText);
      }
    );
  }

  ngOnDestroy() {
    // Unsubscribe from router events to prevent memory leaks
    this.routerEventsSubscription.unsubscribe();
  }
  getStaticMessage() {
    this.multimediaService.getStaticMessage({ ID: GUID.woqod.success.jobApply }).subscribe((response) => {
      this.modalMessage = {
        title: {
          en: response.titleEN,
          ar: response.titleAR
        },
        desc: {
          en: response.descriptionEN,
          ar: response.descriptionAR
        },
      };
    });
  }

}
