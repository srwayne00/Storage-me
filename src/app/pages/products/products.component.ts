import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProductsService } from './../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productForm: FormGroup;
  products: any[] = [];

  constructor(
     private formBuilder: FormBuilder, 
     private productsService: ProductsService,
     private router: Router
  ) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      nome: [''],
      descricao: [''],
      preco: [''],
      codigo: ['']
    });
  }

  salvar(){ 
    this.productsService.save(this.productForm.value).subscribe(
      res => {
        this.productForm.reset(); 
        this.router.navigate(['home']);
      }
    );
  }
}
