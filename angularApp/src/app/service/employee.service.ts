import { Injectable } from "@angular/core";
import {HttpClient,HttpParams} from '@angular/common/http';

@Injectable()
export class EmployeeService{
constructor(private http:HttpClient){

}
getHourlyEmpData(){
    return this.http.get("http://localhost:8080/hourlyempdetails");
}
getSalariedEmpData(){
    return this.http.get("http://localhost:8080/salariedempdetails");
}
getManagersData(){
    return this.http.get("http://localhost:8080/managersdetails");
}
}