import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public orderBy?: keyof Hero | undefined | '' = ""
  public heroes: Hero[] = [
    {
      name: 'superman',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'batman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'flash',
      canFly: false,
      color: Color.red,
    },
  ];

  toogleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }
  changeOrder(value: keyof Hero) {
    this.orderBy = value
  }
}
