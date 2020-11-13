import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProductsService } from './../../services/products.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  productForm: FormGroup;
  products: any[] = [];

  constructor(
    private formBuilder: FormBuilder, 
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      nome: [''],
      descricao: [''],
      preco: [''],
      codigo: ['']
    });
    this.buscar();
  }
  
  salvar(){ 
    this.productsService.save(this.productForm.value).subscribe(
      res => this.products.push(res)
    );
    this.productForm.reset(); 
  }

  buscar(){
    this.productsService.get().subscribe(
      res => this.products = res
    )
  }

}
