import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class  DataService {
  constructor(
    private http: HttpClient,
    ) {}
  /**
   * Get Drivers Data.
   */
  getBlogs(data): Observable<any> {
    console.log('lllllllllllllll');
    return this.http.post(`${environment.base_url}employees`, data);
  }
  // getBlogsById(id): Observable<any> {
  //   return this.http.get(`${environment.base_url}getblogsbyid/${id}`);
  // }
  // getLatestBlogs(): Observable<any> {
  //   return this.http.get(`${environment.base_url}latestblogs`);
  // }
}
