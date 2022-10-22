import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpPaths } from '../enums/httpPaths.enum';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http:HttpClient) { }

  GetAllItem()
  {
    return this.http.get(`${environment.apiUrl}${HttpPaths.API_GET_ALL_ITEMS}`);
  }
}
