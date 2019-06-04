import {Component, HostListener, Input, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {environment} from '../../environments/environment';


declare var StripeCheckout: any;

@Component({
  selector: 'app-stripe-checkout',
  templateUrl: './stripe-checkout.component.html',
  styleUrls: ['./stripe-checkout.component.scss']
})
export class StripeCheckoutComponent implements OnInit {

  @Input() amount;
  @Input() description;

  handler: any;
  confirmation: any;
  loading = false;

  constructor( private auth: AuthService) { }

  ngOnInit() {
    this.handler = StripeCheckout.configure( {

      key: environment.stripeKey,
      locale: 'auto',

      source: async( source ) => {
        this.loading = true;
        const user = await this.auth.getUser('', '');
        // save data on server;
        // service.saveData({user: user.uid, amount: this.amount});
        // set loading flag
        this.loading = false;
      }

    });
  }

  // open the checkout handler
  async checkout(e) {
    const user = await this.auth.getUser('', '');
    this.handler.open(
      {
        name: 'BBJ Shop',
        description: this.description,
        amount: this.amount,
        email: user.uid
      }
    );
    e.preventDefault();
  }


  // close on navigate
  @HostListener('window:popstate')
  onPopState() {
    this.handler.close();
  }

}
