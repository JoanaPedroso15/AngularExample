import { Injectable } from '@angular/core';
import { ProductService } from '../product/product.service';
import { ReplaySubject } from 'rxjs';
import { Product} from 'src/app/core/models/product';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public product : Product;
  public products : any []; 
  public products$ : ReplaySubject <any[]> = new ReplaySubject (1);
  public product$  : ReplaySubject<any[]>= new ReplaySubject (1);
  constructor(
    private productApi : ProductService
  ) { this.getProducts ()};

  public getProducts () {
    this.productApi.getAll().subscribe( //retorna um pedido http. para subscrever o observable, ponho subscribe a frente
    (res: any) => {
      this.products = res;
      this.products$.next(res);
    }
    );
  }

  public createProduct (product : Product) {
    this.productApi.createProduct(product).subscribe(
      (result : any) => {
        this.product = result;
        this.product$.next(result);
      }
    );
  }

  public update () {
    this.productApi.updateProduct(this.product.id, this.product).subscribe(
      () => {
        let msg = "Product Updated";
      }
    );
  }

  public delete (id : number) {
    this.productApi.deleteProduct(id).subscribe(
      (test: string) => {
        let msg = "Product Deleted";
      }
    )
  }
}
