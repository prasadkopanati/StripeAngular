import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StripeCheckoutComponent} from './stripe-checkout/stripe-checkout.component';

const routes: Routes = [
  { path: 'checkout', component: StripeCheckoutComponent},
  { path: '', component: StripeCheckoutComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
