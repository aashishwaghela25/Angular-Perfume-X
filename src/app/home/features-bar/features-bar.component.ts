import { Component } from '@angular/core';

@Component({
  selector: 'app-features-bar',
  templateUrl: './features-bar.component.html',
  styleUrls: ['./features-bar.component.css'],
})
export class FeaturesBarComponent {
  features = [
    {
      icon: 'fa-solid fa-truck-fast',
      title: 'Free Shipping',
      text: 'On all orders over ₹2,999',
    },
    {
      icon: 'fa-shield-halved',
      title: 'Genuine Products',
      text: '100% authentic, always',
    },
    { icon: 'fa-star', title: '4.8★ Rated', text: 'on Google & Website' },
  ];
}
