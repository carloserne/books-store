import { Routes } from '@angular/router';
import { ProductsComponent } from './main-page/products/products.component';
import { ContactModule } from './contact/contact.module';
import { MainPageContactoComponent } from './contact/main-page-contacto/main-page-contacto.component';
import { MainPageInicioComponent } from './main-page/main-page-inicio/main-page-inicio.component';
import { MainPageProductsComponent } from './products/main-page-products/main-page-products.component';

export const routes: Routes = [
    { path: 'Inicio', component: MainPageInicioComponent },
    { path: 'Productos', component: MainPageProductsComponent },
    { path: 'Contacto', component: MainPageContactoComponent },
    {path: "", redirectTo: '/Inicio', pathMatch: 'full'}
];
