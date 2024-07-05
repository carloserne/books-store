import { Component } from '@angular/core';
import { ProductsService } from '../../products.service';
import { ILibro } from '../../interfaces/Libro'
import { Observable } from 'rxjs';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})


export class ListComponent {
  listaLibros: ILibro[] = []
  isResultLoaded = false;
  filteredLibros: ILibro[] = [];
  searchTerm: string = '';

  categories: {[key: string]: boolean} = {
    Ficción: false,
    Ciencia: false,
    Historia: false
  };

  constructor(private _librosService: ProductsService){
    this.obtenerLibros()

  }

  obtenerLibros(){
    this._librosService.getLibros().subscribe({
      next: (data) => {
        this.listaLibros = data;
        this.filteredLibros = data;
        this.isResultLoaded = true;
      }, error: (e) => {
        console.log(e); 
      }
    })
  }

  filterBooks() {
    let filtered = this.listaLibros;

    if (this.searchTerm) {
      filtered = filtered.filter(libro =>
        libro.nombre.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    
    const selectedCategories: string[] = [];
    for (const category in this.categories) {
      if (this.categories[category]) {
        selectedCategories.push(category);
      }
    }

    console.log(selectedCategories)
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(libro => selectedCategories.includes(libro.categoria));
    }

    this.filteredLibros = filtered;
  }

}
