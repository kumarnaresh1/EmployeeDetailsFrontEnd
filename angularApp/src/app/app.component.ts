import { Component } from '@angular/core';
import { Employees } from './models/Employees.model';
import { EmployeeService } from './service/employee.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularApp';
  employees:any;
hourlycount:number=0;
salariedcount:number=0;
managercount:number=0;
constructor(private empService:EmployeeService,employees:Employees){

}
 onhourlyClick(){
  this.salariedcount=0;
  this.hourlycount=0;
  this.managercount=0;
    this.empService.getHourlyEmpData().subscribe((data)=>{
console.log(data);
this.employees=data;
    });
    this.hourlycount=1;
  }

  onSalariedClick(){
    this.salariedcount=0;
    this.hourlycount=0;
    this.managercount=0;
    this.empService.getSalariedEmpData().subscribe((data)=>{
console.log(data);
this.employees=data;
    });
    this.salariedcount=1;
  }

  onManager(){
    this.salariedcount=0;
    this.hourlycount=0;
    this.managercount=0;
    this.empService.getManagersData().subscribe((data)=>{
console.log(data);
this.employees=data;
    });
    this.managercount=1;

  }


}
