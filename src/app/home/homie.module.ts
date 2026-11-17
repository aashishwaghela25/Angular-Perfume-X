import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { LuxuryPerfumesComponent } from './luxury-perfumes/luxury-perfumes.component';
import { ProductsModule } from '../products/products.module';
import { RouterModule } from '@angular/router';
import { FeaturesBarComponent } from './features-bar/features-bar.component';
import { ShopByCategoryComponent } from './shop-by-category/shop-by-category.component';
import { AdvCandlesComponent } from './adv-candles/adv-candles.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    SliderComponent,
    LuxuryPerfumesComponent,
    FeaturesBarComponent,
    ShopByCategoryComponent,
    AdvCandlesComponent,
    FooterComponent,
  ],
  imports: [CommonModule, ProductsModule, RouterModule],
  exports: [HomeComponent],
})
export class HomieModule {}
