import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { LuxuryPerfumesComponent } from './luxury-perfumes/luxury-perfumes.component';
import { ProductsModule } from '../products/products.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    SliderComponent,
    LuxuryPerfumesComponent,
  ],
  imports: [CommonModule, ProductsModule, RouterModule],
  exports: [HomeComponent],
})
export class HomieModule {}
