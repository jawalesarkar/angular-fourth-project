import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourComponent } from './four/four.component';
import { BalajiComponent } from './balaji/balaji.component';

const routes: Routes = [
  {
    path:"first",
    component:FirstComponent,
      children:[
        {
          path:"balaji",
          component:BalajiComponent,
          children:[
            {
              path:"second",
              component:SecondComponent,
            }
          ]
        }
      ]
  },
  {
    path:"second",
    component:SecondComponent,
  },
  {
    path:"third",
    component:ThirdComponent,
  },
  {
    path:"four",
    component:FourComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
