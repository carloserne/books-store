import { Component } from '@angular/core';
import { ProductsService } from '../../products.service';
import { ILibro } from '../../interfaces/Libro'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  listaLibros: ILibro[] = []
  isResultLoaded = false;


  constructor(private _librosService: ProductsService){
    this.obtenerLibros()

  }

  obtenerLibros(){
    this._librosService.getLibros().subscribe({
      next: (data) => {
        this.listaLibros = data;
        this.isResultLoaded = true;
      }, error: (e) => {
        console.log(e); 
      }
    })
  }
}
