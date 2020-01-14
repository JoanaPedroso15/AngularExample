import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsComponent } from 'src/app/layout/products/products.component';
import { Product } from 'src/app/core/models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'http://localhost:8080/stockMySQL/products'; //colocar http:// porque estamos a trabalhar com protocolo http
  constructor(
    private http: HttpClient
  ) { }

  public getAll () {
    return this.http.get(this.url);
  }

  public getById ( id : number) {
    return this.http.get(this.url + "/" + id);
  }

   public createProduct (product : Product) {
   return this.http.post(this.url, product, { Headers, responseType: 'text'} );
   }

  public deleteProduct (id : number) {
    return this.http.delete(this.url + "/" + id);
  }

  public updateProduct ( id: number, product : Product) {
    return this.http.put(this.url + "/" + id, product);
  }
}
