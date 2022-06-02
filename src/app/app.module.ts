import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SwiperModule } from 'swiper/angular';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CartComponent } from './pages/cart/cart.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FavouriteComponent } from './pages/favourite/favourite.component';
import { OurteamComponent } from './pages/ourteam/ourteam.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { TestimonailsComponent } from './pages/testimonails/testimonails.component';
import { OurteamSectionComponent } from './comp/ourteam-section/ourteam-section.component';
import { TestimonailsSectionComponent } from './comp/testimonails-section/testimonails-section.component';
import { ShippingComponent } from './pages/shipping/shipping.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { DoneComponent } from './pages/done/done.component';
import { CategoriesSectionComponent } from './comp/categories-section/categories-section.component';
import { BestplacesSectionComponent } from './comp/bestplaces-section/bestplaces-section.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent, AboutUsComponent, CartComponent, CategoriesComponent, ContactUsComponent, FavouriteComponent, OurteamComponent, PrivacyComponent, ProductDetailsComponent, ProfileComponent, TermsConditionsComponent, TestimonailsComponent, OurteamSectionComponent, TestimonailsSectionComponent, ShippingComponent, PaymentComponent, DoneComponent, CategoriesSectionComponent, BestplacesSectionComponent],
  imports: [BrowserModule, AppRoutingModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
