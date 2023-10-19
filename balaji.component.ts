import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-balaji',
  templateUrl: './balaji.component.html',
  styleUrls: ['./balaji.component.scss']
})
export class BalajiComponent{
  constructor(
    public router:Router,
  ){}
  ngOnInig():void{

  }
  fun2(){
    this.router.navigate(['/first/balaji/second'])
  }
}
