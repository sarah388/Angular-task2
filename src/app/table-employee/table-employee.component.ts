import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CityServiceService } from '../Services/city-service.service';
import { EmployeesService } from '../Services/employees.service';
import { ICity } from '../ViewModels/icity';
import { IEmployee } from '../ViewModels/iemployee';

@Component({
  selector: 'app-table-employee',
  templateUrl: './table-employee.component.html',
  styleUrls: ['./table-employee.component.css']
})
export class TableEmployeeComponent implements OnInit ,OnChanges {

  @Input() inputDepartmentID:number=0;
  //@Input() inputCityID:number=0;


  /**/
  EmployeeList:IEmployee[]=[];

  constructor(
    /**e3mly enject l service  in constructor (emp mn no3 EmplyeeServes)*/
    private empService:EmployeesService,

    ) { }
  
    //haqra el data f ng. onit
  /*a subscribe 3la observable awel ma el component byfta7 */
  ngOnInit(): void {
    //getAllEmployees btrg3ly 7aga mn no3 observable aqdr a3ml 3aleha subscribe
    this.empService.getAllEmployees().subscribe(
      //function in success
      //btrg3ly array of employee
      (response)=>{
        console.log("table resposne",response);
        this.EmployeeList=response;
      },
      //function in error
      (err)=>{console.log(err)}
    );

  }
  /////////////////////////////////////////////////
  ngOnChanges(changes: SimpleChanges): void {
    this.empService.getDepartmentID(this.inputDepartmentID).subscribe(
           (res) => {
             console.log(res);
             this.EmployeeList = res;
           }
           , (err) => { console.log(err) }
           );
           console.log(this.inputDepartmentID);
    ////////////////////////////////////////////////////////
  //   this.empService.getCityByID(this.inputCityID).subscribe(
  //     (res) => {
  //       console.log(res);
  //       this.EmployeeList = res;
  //     }
  //     , (err) => { console.log(err) }
  //     );
  //     console.log(this.inputCityID);

  }
  


}
