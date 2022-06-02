import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CartComponent } from './pages/cart/cart.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { DoneComponent } from './pages/done/done.component';
import { FavouriteComponent } from './pages/favourite/favourite.component';
import { HomeComponent } from './pages/home/home.component';
import { OurteamComponent } from './pages/ourteam/ourteam.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ShippingComponent } from './pages/shipping/shipping.component';
import { TestimonailsComponent } from './pages/testimonails/testimonails.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'categories',
    component: CategoriesComponent,
  },
  {
    path: 'product-details',
    component: ProductDetailsComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: 'ourteam',
    component: OurteamComponent,
  },
  {
    path: 'testimonails',
    component: TestimonailsComponent,
  },
  {
    path: 'favourite',
    component: FavouriteComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'shipping',
    component: ShippingComponent,
  },
  {
    path: 'payment',
    component: PaymentComponent,
  },
  {
    path: 'done',
    component: DoneComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
