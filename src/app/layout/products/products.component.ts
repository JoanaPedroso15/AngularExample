import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../shared/services/data/data.service';
import { ReplaySubject, Subscription } from 'rxjs';
import { ProductService } from '../shared/services/product/product.service';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  public product : Product = new Product ();
  public products$  : ReplaySubject<any[]>;
  public product$  : ReplaySubject<any[]>;
  private subProducts : Subscription;


  constructor(
    private data : DataService,
  ) {
    this.products$ = this.data.products$; 
    this.subProducts = this.data.products$.subscribe ((products) => console.log (products)); //para visualizar os observaveis caso precise
  }

  ngOnInit() {
  }

  ngOnDestroy () { //o OnDestroy vai fazer que com que saio ele faca unsubscribe
    this.subProducts.unsubscribe();
  }

  

  public create () {
    let product : Product = new Product ();
    product.iva = 13;
    product.discount = 10;
    product.pvp = 10;
   this.data.createProduct(product);
    
  }

  public delete () {
    this.data.delete (this.product.id);
  }
}
