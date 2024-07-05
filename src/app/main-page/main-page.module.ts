import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { ProductsComponent } from './products/products.component';
import { MainPageInicioComponent } from './main-page-inicio/main-page-inicio.component';
import { ProductsService } from '../products.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    BannerComponent,
    ProductsComponent,
    MainPageInicioComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    MainPageInicioComponent,
    ProductsComponent,
    BannerComponent
  ],
  providers:[
    ProductsService
  ]
})
export class MainPageModule { }
