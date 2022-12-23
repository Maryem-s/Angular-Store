import { Injectable } from '@angular/core';
import { CATALOGUE } from '../shared/mock-data/Catalogue-produits';
import { Produit } from '../shared/models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getProducts(): Produit[] {
    return CATALOGUE;
    }
}
