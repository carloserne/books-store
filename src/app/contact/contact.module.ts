import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { InfoComponent } from './info/info.component';
import { MainPageContactoComponent } from './main-page-contacto/main-page-contacto.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormComponent,
    InfoComponent,
    MainPageContactoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    FormComponent,
    InfoComponent,
    MainPageContactoComponent
  ]
})
export class ContactModule { }
