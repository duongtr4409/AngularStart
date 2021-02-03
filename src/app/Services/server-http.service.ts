import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';


@Injectable({
  providedIn: 'root'
})
export class ServerHttpService {

  private REST_API_SERVER = 'http://localhost:3000';

  private httpOptions = {
    'Content-Type' : 'application/json'
    //'Authorization': 'my-auth-token'
  }; 

  public getProfile(): Observable<any>{
    const url = `${this.REST_API_SERVER}/profile`;
    return this.httpClient.get<any>(url);
  }

  public getPosts(): Observable<any>{
    const url = `${this.REST_API_SERVER}/posts`;
    return this.httpClient.get(url).pipe();
  }

  public addPosts(data: any): Observable<any>{
    const url = `${this.REST_API_SERVER}/posts`;
    return this.httpClient.post<any>(url, data).pipe();
  }

  constructor(private httpClient: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

}
