import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  myobj = {name:'', type:'', watered:false}

  constructor(
    private http:HttpService,
    private router:Router,
    private route:ActivatedRoute,
  ) { }
  ngOnInit() {
  }

  submitForm(){
    let observable = this.http.create(this.myobj);
    observable.subscribe(data=> {
      console.log(data);
      this.router.navigate(['/'])
    })
  }
}
