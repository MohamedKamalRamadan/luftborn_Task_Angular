import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpPaths } from '../enums/httpPaths.enum';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class InvService {

  constructor(private http: HttpClient) { }

  GetAllInvoice() {

    return this.http.get(`${environment.apiUrl}${HttpPaths.API_GET_ALL_INVOICE}`);
  }

  GetInvoiceById(invoiceId: number) {

    return this.http.get(`${environment.apiUrl}${HttpPaths.API_GET_INVOIEC_BY_ID}${invoiceId}`);
  }

  GetInvoiceMaxCode() {
    return this.http.get(`${environment.apiUrl}${HttpPaths.API_GET_MAX_INVOICE_CODE}`);
  }

  GetInvoicebyCode(invoiceCode:number) {
    return this.http.get(`${environment.apiUrl}${HttpPaths.API_GET_INVOIEC_BY_CODE}${invoiceCode}`);
  }

  CreateInvoice(Invoice:any): Observable<any>  {

    return this.http.post<any>(`${environment.apiUrl}${HttpPaths.API_CREATE_INVOICE}`,Invoice);
  }

  DeleteInvoice(Id:any)  {

    return this.http.delete(`${environment.apiUrl}${HttpPaths.API_DELETE_INVOICE}${Id}`)
  }

  UpdateInvoice(Invoice:any) : Observable<any> {

    return this.http.put<any>(`${environment.apiUrl}${HttpPaths.API_UPDATE_INVOICE}`,Invoice)
  }

}
