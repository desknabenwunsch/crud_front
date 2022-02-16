import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriverApiService {

  readonly driversAPIUrl = "https://localhost:7202/api";

  constructor(private http:HttpClient) { }


  // drivers 
  getDriversList():Observable<any[]> {
    return this.http.get<any>(this.driversAPIUrl + '/drivers');
  }

  addDriver(data:any) {
    return this.http.post(this.driversAPIUrl + '/drivers', data);
  }

  updateDriver(id:number|string, data:any) {
    return this.http.put(this.driversAPIUrl + `/drivers/${id}`, data);
  }

  deleteDriver(id:number|string) {
    return this.http.delete(this.driversAPIUrl + `/drivers/${id}`);
  }

  // categories

  getCategoriesList():Observable<any[]> {
    return this.http.get<any>(this.driversAPIUrl + '/categories');
  }

  addCategory(data:any) {
    return this.http.post(this.driversAPIUrl + '/categories', data);
  }

  updateCategory(id:number|string, data:any) {
    return this.http.put(this.driversAPIUrl + `/categories/${id}`, data);
  }

  deleteCategory(id:number|string) {
    return this.http.delete(this.driversAPIUrl + `/categories/${id}`);
  }
}
