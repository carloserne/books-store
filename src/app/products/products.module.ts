import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { MainPageProductsComponent } from './main-page-products/main-page-products.component';
import { ProductsService } from '../products.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListComponent,
    MainPageProductsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],exports:[
    MainPageProductsComponent,
    ListComponent
  ],
  providers:[
    ProductsService
  ]

})
export class ProductsModule { }
