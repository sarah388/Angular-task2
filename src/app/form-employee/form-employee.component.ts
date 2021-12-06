import { Component, OnInit} from '@angular/core';
import { CityServiceService } from '../Services/city-service.service';
import { SearchService } from '../Services/search.service';
import { ICity } from '../ViewModels/icity';
import { IDepartment } from '../ViewModels/idepartment';

@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.css']
})
export class FormEmployeeComponent implements OnInit {

  sendid:number=0;
  //citid:number=0;

   //////////

  select=0;
  //cit=0;
  DepartmentList:IDepartment[]=[];
  CityList:ICity[]=[];
  constructor(private searchService:SearchService ,private cityService:CityServiceService) {
     }

  ngOnInit(): void {
    this.searchService.getAllDepartment().subscribe(
      (response)=>{
        console.log(response);
        this.DepartmentList=response;
      },
      //function in error
      (err)=>{console.log(err)}
    );
    ////////////////////////////////////////
    // this.cityService.getAllCity().subscribe(
    //   (response)=>{
    //     console.log(response);
    //     this.CityList=response;
    //   },
    // );

}
view(){
 this.sendid=this.select
 //this.citid=this.cit
 console.log("id"+this.sendid)
 console.log("selec"+this.select)
 //console.log("cit"+this.cit)

}

}