import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourComponent } from './four/four.component';
import { BalajiComponent } from './balaji/balaji.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourComponent,
    BalajiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
