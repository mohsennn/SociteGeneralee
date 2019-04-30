import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

  import { HttpClientModule } from '@angular/common/http';
import { CompteComponent } from './compte.component';


@NgModule({
  declarations: [
    CompteComponent
   ],
  imports: [
   BrowserModule,
     HttpClientModule
  ],
  providers: [],
  bootstrap: [CompteComponent]
})
export class CompteModule { }
