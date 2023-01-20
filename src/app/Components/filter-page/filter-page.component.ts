import { Component, OnInit, ViewChild } from '@angular/core';
import { FilterControlsComponent } from 'src/app/miniComponents/filter-controls/filter-controls.component';
import { GetEmployeesService } from 'src/app/_services/get-employees.service';

@Component({
  selector: 'app-filter-page',
  templateUrl: './filter-page.component.html',
  styleUrls: ['./filter-page.component.scss']
})
export class FilterPageComponent implements OnInit {

  constructor(private empService: GetEmployeesService) { }

  @ViewChild(FilterControlsComponent) getFilterData !: FilterControlsComponent;

  childDataFilter: any;
  filterEmployees: any;

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.getFilterData.newChildFilter.subscribe(
      data => {
        this.childDataFilter = data;
        console.log(this.childDataFilter);
        if (this.childDataFilter != null && this.childDataFilter != undefined) {
          this.empService.getEmpolyeesList().subscribe(
            data => {
              this.filterEmployees = data.employees.filter((e: any) => e.salary >= this.childDataFilter.salary);
              console.log(this.filterEmployees);
            }
          )
        }
        else {
          this.empService.getEmpolyeesList().subscribe(
            data => {
              this.filterEmployees = data.employees;
              console.log(this.filterEmployees);
            }
          )
        }
      }
    );
  }
}
