import { Component, OnInit } from '@angular/core';
import { OrderDetialsService } from 'src/app/services/order-detials.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private services : OrderDetialsService) { }
  foodData: any;

  ngOnInit(): void {
    this.foodData = this.services.foodDetails;
  }

}
