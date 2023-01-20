import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class GetEmployeesService {

  endPoint: string = "";

  constructor(private http: HttpClient) {
    this.endPoint = environment.url;
  }

  public jsonInputs = "assets/data/filterData.json"

  public empData = "assets/data/employees.json";
  public deptData = "assets/data/departments.json";
  public expData = "assets/data/experiences.json";

  public getHTMLinputs(): Observable<any> {
    return this.http.get<any>(this.jsonInputs).pipe(catchError(
      (err) => {
        return throwError(() => "Internal Server Error");
      }
    )
    );
  }

  public getEmpolyeesList(): Observable<any> {
    return this.http.get<any>(this.empData).pipe(catchError(
      (err) => {
        return throwError(() => "Internal Server Error");
      }
    )
    );
  }

  public getDepartmentsList(): Observable<any> {
    return this.http.get<any>(this.deptData).pipe(catchError(
      (err) => {
        return throwError(() => "Internal Server Error");
      }
    )
    );
  }

  public getExperiencesList(): Observable<any> {
    return this.http.get<any>(this.expData).pipe(catchError(
      (err) => {
        return throwError(() => "Internal Server Error");
      }
    )
    );
  }

  // public getEmpolyeesList(): Observable<any> {
  //   return this.http.get<any>(this.endPoint).pipe(catchError(
  //     (err) => {
  //       return throwError(() => "Internal Server Error");
  //     }
  //   )
  //   );
  // }
  
  // public getDepartmentsList(): Observable<any> {
  //   return this.http.get<any>(`${this.endPoint}/departments`).pipe(catchError(
  //     (err) => {
  //       return throwError(() => "Internal Server Error");
  //     }
  //   )
  //   );
  // }

  // public getExperiencesList(): Observable<any> {
  //   return this.http.get<any>(`${this.endPoint}/experiences`).pipe(catchError(
  //     (err) => {
  //       return throwError(() => "Internal Server Error");
  //     }
  //   )
  //   );
  // }
}
