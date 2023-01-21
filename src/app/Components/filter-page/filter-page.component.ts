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
  filteredData: any;

  allData: any;

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.getFilterData.newChildFilter.subscribe(
      data => {
        //filter object 
        this.childDataFilter = data;

        if (this.childDataFilter != null && this.childDataFilter != undefined) {
          this.empService.getEmpolyeesList().subscribe(
            data => {
              this.allData = data.employees;
              this.filteredData = data.employees;
              for (let key in this.childDataFilter) {
                if (key) {
                  this.filteredData = this.filteredData.filter((el: any): any => {
                    if (el[`${key}`] && this.childDataFilter[`${key}`]) {
                      if (Array.isArray(this.childDataFilter[`${key}`]) && this.childDataFilter[`${key}`].length > 0) {
                        console.log(Array.isArray(this.childDataFilter[`${key}`]));
                        return this.childDataFilter[`${key}`].includes(el[`${key}`]);
                      } else {
                        return String(el[`${key}`]).includes(this.childDataFilter[`${key}`])
                      }
                    } else {
                      return this.allData
                    }
                  })
                }
              }
              console.log(this.filteredData)
              this.filterEmployees = this.filteredData;
            }
          )
        }
      }
    );
  }
}


