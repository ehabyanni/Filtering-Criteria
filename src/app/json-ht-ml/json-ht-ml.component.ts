import { Component, OnInit } from '@angular/core';
import { GetEmployeesService } from '../_services/get-employees.service';

@Component({
  selector: 'app-json-ht-ml',
  templateUrl: './json-ht-ml.component.html',
  styleUrls: ['./json-ht-ml.component.scss']
})
export class JsonHtMLComponent implements OnInit {

  constructor(private empService:GetEmployeesService) { }

  HTMLinputs:any;

  ngOnInit(): void {
    this.empService.getHTMLinputs().subscribe(
      data => {
        this.HTMLinputs = data;
        console.log(this.HTMLinputs);
      }
    )
  }

}
