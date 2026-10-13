import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from 'src/app/services/product.service';

@Component({
  selector: 'app-luxury-perfumes',
  templateUrl: './luxury-perfumes.component.html',
  styleUrls: ['./luxury-perfumes.component.css'],
})
export class LuxuryPerfumesComponent implements OnInit {
  products: Product[] = [];
  loading = true;
  error = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe({
      next: (data) => {
        this.products = data;
        this.loading = false;
      },
      error: (err) => {
        console.log('API Error', err);
        this.error = true;
        this.loading = false;
      },
    });
  }
}
