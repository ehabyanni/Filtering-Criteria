import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Filter } from 'src/app/_models/Classes/Filter';
import { GetEmployeesService } from 'src/app/_services/get-employees.service';

@Component({
  selector: 'app-filter-controls',
  templateUrl: './filter-controls.component.html',
  styleUrls: ['./filter-controls.component.scss']
})
export class FilterControlsComponent implements OnInit {

  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private empService: GetEmployeesService
  ) { }

  @Output() newChildFilter = new EventEmitter();

  filterForm = this.formbuilder.group({
    name: ['', [Validators.minLength(4)]],
    joinDate: [''],
    department: [''],
    salary: [''],
    experience: ['']
  });

  //name property
  get NAME() {
    return this.filterForm.get('name');
  }
  //joinDate property
  get JoinDATE() {
    return this.filterForm.get('joinDate');
  }
  //department property
  get DEPARTMENT() {
    return this.filterForm.get('department');
  }
  //salary property
  get SALARY() {
    return this.filterForm.get('salary');
  }
  //experience property
  get EXPERIENCE() {
    return this.filterForm.get('experience');
  }


  //map on json File "HTML inputs"
  HTMLinputs: any;

  ngOnInit(): void {
    this.empService.getHTMLinputs().subscribe(
      data => {
        this.HTMLinputs = data;
        //console.log(this.HTMLinputs);
      }
    )
  }

  //array of experiences
  EmpExperiences: string[] = [];

  addExperience(event: any) {
    let exp = event.target.value;
    this.EmpExperiences.push(exp);
    //console.log(this.EmpExperiences);
  }

  //submit the filters
  onSubmit() {
    //console.log(this.EmpExperiences);
    let newFilterData = new Filter();
    newFilterData.name = this.NAME?.value;
    newFilterData.joinDate = this.JoinDATE?.value;
    newFilterData.department = this.DEPARTMENT?.value;
    newFilterData.salary = this.SALARY?.value;
    newFilterData.experience = this.EmpExperiences;

    console.log(newFilterData);

    //send data to parent component
    this.newChildFilter.emit(newFilterData);

  }

  emplist: any;

  //reset the filters
  clearFilters() {
    this.filterForm.reset();
    this.empService.getEmpolyeesList().subscribe(
      data => {
        this.emplist = data.employees;
        this.newChildFilter.emit(this.emplist);
      }
    )
    //clear arrays
    this.EmpExperiences = [];
  }

}
