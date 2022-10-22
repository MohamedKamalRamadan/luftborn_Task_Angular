import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpPaths } from '../enums/httpPaths.enum';
import { Observable } from 'rxjs';
import { ICustomer } from '../models/customer/ICustomer.interface';

@Injectable({
  providedIn: 'root'
})
export class CustService {

  constructor(private http: HttpClient) { }

  GetAllCustomers(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(`${environment.apiUrl}${HttpPaths.API_GET_ALL_CUSTOMERS}`);
  }

}
