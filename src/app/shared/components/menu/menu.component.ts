import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';

@Component({
  selector: 'shared-menu',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  public menuItems: MenuItem[] = [];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.menuItems = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: '/',
          },
          { label: 'Numeros', icon: 'pi pi-dollar', routerLink: 'numbers' },
          { label: 'No comunes', icon: 'pi pi-globe', routerLink: 'uncommon' },
        ],
      },
      {
        label: 'Pipes Personalizados',
        icon: 'pi pi-cog',
        items: [
          { label: 'Custom Pipes', icon: 'pi pi-cog', routerLink: 'custom' },
        ],
      },
    ];
  }
}
