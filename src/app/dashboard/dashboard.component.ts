import { Component, OnInit } from '@angular/core';
import{ NgForm} from "@angular/forms";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  customservice1(CustomService: NgForm){
    //JSON.stringify(loginForm);
    console.log(CustomService.value)
  }
  periodicservice1(PeriodicService: NgForm){
    //JSON.stringify(loginForm);
    console.log(PeriodicService.value)
  }
  painting_and_washing(PaintingAndWashing: NgForm){
    //JSON.stringify(loginForm);
    console.log(PaintingAndWashing.value)
  }

  clickMe() {
    window.alert("Please Login if not to continue with the services.")
  }
}