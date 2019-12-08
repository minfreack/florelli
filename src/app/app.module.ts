import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { ServiceCComponent } from './service-c/service-c.component';
import { ContactusCComponent } from './contactus-c/contactus-c.component';
import { ProductsCComponent } from './products-c/products-c.component';
import { FooterCComponent } from './footer-c/footer-c.component';
import { ProductsComponent } from './products/products.component';
import { ContentComponent } from './content/content.component';
import { FormComponent } from './form/form.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { AngularFireModule } from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {NgxPaginationModule} from 'ngx-pagination';
var firebaseConfig = {
  apiKey: "AIzaSyCmsoVQWD9cIRuft_H_wyaXTgZtQbVwC8M",
  authDomain: "florelli.firebaseapp.com",
  databaseURL: "https://florelli.firebaseio.com",
  projectId: "florelli",
  storageBucket: "florelli.appspot.com",
  messagingSenderId: "468490099691",
  appId: "1:468490099691:web:af9387fe331796e6d317ae"
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    ServiceCComponent,
    ContactusCComponent,
    ProductsCComponent,
    FooterCComponent,
    ProductsComponent,
    ContentComponent,
    FormComponent,
    CatalogoComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
