import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: 'cart', loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule) },
{ path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
{ path: '', redirectTo:'home', pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
