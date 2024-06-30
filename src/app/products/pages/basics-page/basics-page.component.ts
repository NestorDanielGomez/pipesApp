import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css',
})
export class BasicsPageComponent {
  public nameLower: string = 'nestor';
  public nameUpper: string = 'NESTOR';
  public fullname: string = 'nEsToR gOmEz';
  public customDate: Date = new Date();
}
