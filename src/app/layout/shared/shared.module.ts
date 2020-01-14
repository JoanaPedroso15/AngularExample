import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product/product.service';
import { DataService } from './services/data/data.service';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    ProductService,
    DataService
  ]
})
export class SharedModule { }
