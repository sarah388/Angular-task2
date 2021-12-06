import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IDepartment } from '../ViewModels/idepartment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http : HttpClient) { }
  //a3ml function btgbly el data mn el http
  getAllDepartment() :Observable <IDepartment []>{
   return this.http.get<IDepartment[]>(`${environment.API_URL}/Department`);
 }
 

}
