import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, mergeMap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Store } from '@ngrx/store';
import { storeToken } from 'src/app/store/user/user.action';

@Injectable() export class HttpConfigInterceptor implements HttpInterceptor {

  constructor(
    private store: Store
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // let path = request.url;
    // let url = path.indexOf("api/") !== -1 ? (environment.baseURL + path) : path;

    let path = request.url;
    let isWithoutAPI_WORD = path.indexOf("without_api_word/") !== -1;
    let url = path.indexOf("api/") !== -1 || isWithoutAPI_WORD ? isWithoutAPI_WORD ? (environment.baseURL + path.replace("/without_api_word", "")) : (environment.baseURL + path) : path;


    let modifiedRequest = request.clone({
      url: url,
    });

    // if (request.url.indexOf('InsertFeedback') !== -1) modifiedRequest = modifiedRequest.clone({
    //   responseType: 'text',
    // });

    let token = typeof window !== 'undefined' ? localStorage.getItem('token') : '';

    if (
      path.indexOf("api/FahesAccount/CSGetData") !== -1 ||
      path.indexOf("api/FahesAccount/QPGetData") !== -1 ||
      path.indexOf("api/Account/CSGetData") !== -1 ||
      path.indexOf("api/Account/QPGetData") !== -1 ||
      path.indexOf("InquireTransactionStatus") !== -1 ||
      path.indexOf("GetSiteUserWalletAmmount") !== -1 ||
      path.indexOf("InquireFahesTransactionStatus") !== -1 ||

      path.indexOf("api/account/SaveCardGetData") !== -1 ||
      path.indexOf("api/fahesaccount/SaveCardGetData") !== -1 ||


      path.indexOf("account/CSGetDataForSavedCard") !== -1 ||
      path.indexOf("fahesaccount/CSGetDataForSavedCard") !== -1



    ) {
      const mobileTempToken = typeof window !== 'undefined' ? localStorage.getItem('mobileToken') : '';
      if (mobileTempToken) {
        token = mobileTempToken;
      }
    }

    if (token) {
      modifiedRequest = modifiedRequest.clone({
        headers: modifiedRequest.headers.set('BearerToken', token),
      });
    }


    return next.handle(modifiedRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // Handle token refresh here
          return throwError(error);
          // return this.refreshTokenAndRetry(modifiedRequest, next);
        } else {
          // TODO :: 404 ..
          return throwError(error);
        }
      })
    );




    // return next.handle(modifiedRequest);

    // return next.handle(modifiedRequest).pipe(
    //   catchError((error: HttpErrorResponse) => {
    //     const isStaticFile = error.url?.indexOf('00000000-0000-0000-0000-000000000000') !== -1;
    //     if (!isStaticFile) {
    //       const selectedLang = this.translationService.getSelectedLanguage();
    //       const status = error.status;


    //       if (status === 500) this.router.navigateByUrl(`/${selectedLang}/error/500`);
    //       else if (status === 404) this.router.navigateByUrl(`/${selectedLang}/error/404`);
    //       else if (status === 503) this.router.navigateByUrl(`/${selectedLang}/error/503`);
    //       // let errorMsg = '';
    //       // if (error.error instanceof ErrorEvent) {
    //       // console.log('This is client side error');
    //       // errorMsg = `Error: ${error.error.message}`;
    //     }
    //     return throwError(error);
    //   })
    // )
    //  else {
    //   // console.log('This is server side error');
    //   // errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
    // }
    // console.log(errorMsg);
    // return throwError(error);
    // })

    // return next.handle(request).pipe(
    //   map((event: HttpEvent<any>) => {
    //     if (event instanceof HttpResponse) {
    //       // 
    //     }
    //     return event;
    //   })
    // );
  }


}