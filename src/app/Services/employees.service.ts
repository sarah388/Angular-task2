import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import{HttpClient} from '@angular/common/http';
import { IEmployee } from '../ViewModels/iemployee';
import { ICity } from '../ViewModels/icity';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  ////
  EmployeeList:IEmployee[]=[];

//3lshan at3aml m3 el api m7tag asta5dm module el HttpClient 
  constructor(private http : HttpClient) { }
   //a3ml function btgbly el data mn el http
  getAllEmployees() :Observable <IEmployee []>{
    return this.http.get<IEmployee[]>(`${environment.API_URL}/Employees`);
  }

  
 getDepartmentID(dID: number): Observable <IEmployee []>
 {
   return this.http.get<IEmployee []>(`${environment.API_URL}/Employees?DepartmentId=${dID}`);
 }
 /////////////////////////////////
 
//  getCityByID(cID: number): Observable <IEmployee []>
//  {
//    return this.http.get<IEmployee []>(`${environment.API_URL}/Employees?CityId=${cID}`);
//  }
 

  
}
