import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILibro } from './interfaces/Libro'; // Asegúrate de tener un modelo Libro definido



@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _apiUrl = 'https://localhost:7104/api/Libros/listaLibros';
  constructor(private http: HttpClient) { }

  // Método para obtener todos los libros
  getLibros(): Observable<ILibro[]> {
    return this.http.get<ILibro[]>(this._apiUrl);
  }
  // Método para obtener libros por categoría
  getLibrosPorCategoria(categoria: string): Observable<ILibro[]> {
    const url = `${this._apiUrl}/${categoria}`;
    return this.http.get<ILibro[]>(url);
  }
}
