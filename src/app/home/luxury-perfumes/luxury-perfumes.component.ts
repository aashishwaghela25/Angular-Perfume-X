import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from 'src/app/services/product.service';

@Component({
  selector: 'app-luxury-perfumes',
  templateUrl: './luxury-perfumes.component.html',
  styleUrls: ['./luxury-perfumes.component.css'],
})
export class LuxuryPerfumesComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (data) => (this.products = data),
      error: (err) => console.error('API error:', err),
    });
  }
}
