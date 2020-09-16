import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { PersonalComponent } from './personal/personal.component';
import { WhishlistComponent } from './whishlist/whishlist.component';
import { HistoryComponent } from './history/history.component';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { NavbarPipe } from './navbar/navbar.pipe';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NavbarComponent,
    PersonalComponent,
    WhishlistComponent,
    HistoryComponent,
    CartComponent,
    DetailsComponent,
    ProductsComponent,
    NavbarPipe,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,

    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: ProductsComponent },
      { path: 'details', component: DetailsComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'whishlist', component: WhishlistComponent },
      { path: 'personal', component: PersonalComponent },
      { path: 'history', component: HistoryComponent },
      { path: 'cart', component: CartComponent },
      { path: 'search', component: SearchComponent },
      { path: 'products/:id/:name', component: DetailsComponent },
      { path: '**', component: ProductsComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
