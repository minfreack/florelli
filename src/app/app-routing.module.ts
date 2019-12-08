import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ServiceCComponent } from './service-c/service-c.component';
import { ContentComponent } from './content/content.component';
import { ProductsComponent } from './products/products.component';
import { ContactusCComponent } from './contactus-c/contactus-c.component';
import { FormComponent } from './form/form.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: ContentComponent
  },
  {
    path: 'admin',
    component: ProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
