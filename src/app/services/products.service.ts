import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly server = 'http://localhost:3000/products';

  constructor(
    private httpClient: HttpClient
  ) { }

  save(product: any) {
    return this.httpClient.post(this.server, product).pipe();
  }

  get(): any {
    return this.httpClient.get(this.server).pipe();
  }
}
