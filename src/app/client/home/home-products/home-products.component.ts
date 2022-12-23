import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Produit } from '../../../shared/models/produit';

@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.css']
})
export class HomeProductsComponent implements OnInit {

  constructor(private produitService : ProductService) { }
  
  ngOnInit(): void {
  this.getProducts();
  }
  title = "PRODUITS" ;
produits : Produit[] = [];
Selectprod: Produit;

onDetail(desc: string):void{
alert('taille L');
}
onSelect(prod: Produit):void{
  this.Selectprod=prod;
}
getProducts(): void {
  
   this.produits = this.produitService.getProducts();}
}
