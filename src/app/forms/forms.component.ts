import {Router, ActivatedRoute} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import{ NgForm} from "@angular/forms";
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  //public pageData;

  constructor(router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    //this.pageData = <any>this.route.snapshot.data;
    //console.log(this.pageData.title)
  }
  loginUser(signupform: NgForm){
    console.log(signupform.value)
  } 
  login(loginForm: NgForm){
    //JSON.stringify(loginForm);
    console.log(loginForm)
  }
}
