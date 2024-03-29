import { Component ,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit{
  order:Order= new Order();
  checkoutForm!:FormGroup;
  constructor( cartService:CartService,
    private formBuilder: FormBuilder,
    private userService:UserService,
    private toastrService:ToastrService){
      const cart= cartService.getCart();
      this.order.items = cart.item;
      this.order.totalPrice= cart.totalPrice;
  }

  ngOnInit(): void {
      let {name , adress} = this.userService.currentUser;
      this.checkoutForm = this.formBuilder.group({
        name: [name, Validators.required],
        adress:[adress, Validators.required]
      });
  }

  get fc(){
    return this.checkoutForm.controls;
  }

  createOrder(){
    if(this.checkoutForm.invalid){
      this.toastrService.warning('Please fill the inputs', 'Invalid Inputs');
      return;
    }

    this.order.name = this.fc.name.value;
    this.order.adress = this.fc.adress.value;

    console.log(this.order);
  }

}
