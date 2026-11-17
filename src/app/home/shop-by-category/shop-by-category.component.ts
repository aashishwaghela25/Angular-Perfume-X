import { Component } from '@angular/core';

@Component({
  selector: 'app-shop-by-category',
  templateUrl: './shop-by-category.component.html',
  styleUrls: ['./shop-by-category.component.css'],
})
export class ShopByCategoryComponent {
  categories = [
    { name: 'Men', image: 'assets/luxuryPerfumes/men.jpg', link: '/men' },
    { name: 'Women', image: 'assets/luxuryPerfumes/women.jpg', link: '/women' },
    { name: 'Unisex', image: 'assets/luxuryPerfumes/unisex.jpg', link: '/unisex' },
    { name: 'Attar', image: 'assets/luxuryPerfumes/attar.webp', link: '/attar'},
  ];
}
