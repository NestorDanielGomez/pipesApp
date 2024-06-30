import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  public name: string = 'Nestor';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeCLient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  //plural
  public clientsMap = {
    '=0': 'No hay mas clientes.',
    '=1': 'Tenemos un cliente esperando.',
    '=2': 'Tenemos 2 clientes esperando.',
    other: 'tenemos # clientes esperando.',
  };
  public clients: string[] = [
    'nestor',
    'daniel',
    'gomez',
    'bautista',
    'nicolas',
    'gomez',
    'zanel',
    'leticia',
    'ines',
    'Zanel',
  ];

  deleteCLient(): void {
    this.clients.shift();
  }

  public person = {
    name: 'nestor',
    age: 42,
    country: 'argentina',
  };

  public myObservableTimer = interval(2000).pipe(
    tap((value) => console.log('tap:', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('tenemos data en la promesa');
    }, 4000);
  });
}
