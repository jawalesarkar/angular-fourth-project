import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {
  constructor(
    public router:Router,

  ){}
  ngOnInit():void{
     
  }
  fun(){
    this.router.navigate(['first/balaji'])
  }
}
