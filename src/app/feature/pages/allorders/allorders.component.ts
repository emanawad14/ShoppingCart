import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { OrdersService } from '../../services/orders/orders.service';
import { Subscription } from 'rxjs';
import { Modal } from 'flowbite';
import { IOrsrs } from '../../interfaces/orders/iorsrs';

@Component({
  selector: 'app-allorders',
  imports: [],
  templateUrl: './allorders.component.html',
  styleUrl: './allorders.component.scss'

})
export class AllordersComponent {


   @ViewChild('items') items:ElementRef =new ElementRef('')
  
   options :any = {
    placement: 'bottom-right',
    backdrop: 'dynamic',
    backdropClasses:
        'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
    closable: true,
    onHide: () => {
        console.log('modal is hidden');
    },
    onShow: () => {
        console.log('modal is shown');
    },
    onToggle: () => {
        console.log('modal has been toggled');
    },
};
instanceOptions = {
  id: 'static-modal',
  override: true
};

  cartsId:string='';
  id:string=''
  private readonly orderServices=inject(OrdersService);
  private readonly CartService=inject(CartService);



  GetProductDestory:Subscription=new Subscription

  ngOnDestroy(): void {
      this.GetProductDestory
  }
  
  OrdersCart:IOrsrs[] =[];
  
  


  ngOnInit(): void {
   this.cartsId=this.orderServices.getId()
      this.GetProductOrder();
  }

  GetProductOrder():void
  {
    this.orderServices.getUserOrders(this.cartsId).subscribe({
      next:(res)=>
      {
        console.log(res);
        this.OrdersCart=res
      
      },
      error:(err)=>
      {
        console.log(err);
        
      }

    })
  }

  ngAfterViewInit(): void {
   console.log(this.items);
     
  }
  openModel(index:number)
  {
    let ele= this.items.nativeElement as HTMLElement
    const modal = new Modal(ele, this.options,this.instanceOptions);
    modal.show()
  }


}
