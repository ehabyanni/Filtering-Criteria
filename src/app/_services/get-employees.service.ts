import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetEmployeesService {


  constructor(private http: HttpClient) {}

  public jsonInputs = "assets/data/filterData.json"
  public empData = "assets/data/employees.json";

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

}
