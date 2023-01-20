import { Component, Input, OnInit } from '@angular/core';
import { GetEmployeesService } from 'src/app/_services/get-employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  @Input() parentFilterData: any;


  empList: any;
  displayEmpList:any;

  constructor(private empService: GetEmployeesService) { }



  ngOnInit(): void {
    this.empService.getEmpolyeesList().subscribe(
      data => {
        this.empList = data.employees;
        this.displayEmpList = this.empList;
      }
    )
  }

}
