import { Component, OnInit } from '@angular/core';
import { OrderDetialsService } from 'src/app/services/order-detials.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private services: OrderDetialsService) { }
  foodData: any;

  ngOnInit(): void {
    this.foodData = this.services.foodDetails;
  }

}
