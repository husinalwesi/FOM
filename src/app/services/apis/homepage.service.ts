import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { CMS_END_POINTS } from 'src/app/const/api';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  constructor(
    private httpClient: HttpClient
  ) { }

  // write interfaces
  // write const - enums..
  signIn(body: any): Observable<any> {
    return this.httpClient.post<any>(CMS_END_POINTS.GET_HOMEPAGE_DATA, body);
  }

  // this.http.get('/endpoint').subscribe((response) => {
  //   console.log(response);
  // });



  // geAllStudentListWithMultipleAgephase(body): Observable<any> {
  //   return this.httpClient.get<any>(`${this.getBaseURL()}/api/users/all`, {
  //     params: body
  //   });
  // }

  // deleteComment(body): Observable<any> {
  //   return this.httpClient.delete<any>(`${this.getBaseURL()}/api/delete-own-comment/${body.id}`, body);
  // }

  // updateComment(body, id): Observable<any> {
  //   return this.httpClient.patch<any>(`${this.getBaseURL()}/comment/${id}?_format=json`, body);
  // }

  // getPermissionSlipByID(id): Observable<any> {
  //   return this.httpClient.get<any>(`${this.getBaseURL()}/api/permission_slip/${id}`, {});
  // }

}
