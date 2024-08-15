import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  public routeList?: string[] = ['top-stories','most-popular','books'];
  constructor(private router: Router){}

  public navigateTo(route: string): void{
    this.router.navigate([route]);
  }
}
