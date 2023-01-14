import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"product",component:ProductComponent},
  {path:"product/:id",component:ProductdetailsComponent},
  {path:"addproduct",component:AddproductComponent},
  {path:"updateproduct/:id",component:UpdateproductComponent},
  {path:"deleteproduct/:id",component:DeleteproductComponent},
  {path:"auth/login",component:LoginComponent},
  {path:"auth/register",component:RegisterComponent},
  {path:"auth/reset-password",component:ResetPasswordComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
