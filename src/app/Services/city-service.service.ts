import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICity } from '../ViewModels/icity';


@Injectable({
  providedIn: 'root'
})
export class CityServiceService {

  constructor(private http : HttpClient) { }
  getAllCity() :Observable <ICity []>{
    return this.http.get<ICity[]>(`${environment.API_URL}/BirthCity`);
  }

  

}
