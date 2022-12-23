import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  productAddForm : FormGroup ;
  ajout(): void {
    alert(JSON.stringify(this.productAddForm.value))
  }
ngOnInit(): void {
this. productAddForm = this.fb.group ({ 
nameControl: [''],
prixControl: [''], 
descriptionControl: [''],
categControl: [''],
imageControl: [''],
}); 
}

  constructor(private fb: FormBuilder) { }

  

}
