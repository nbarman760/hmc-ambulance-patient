import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Emergency Book',
      url: '/emergency-book',
      icon: 'contact'
    },
   /* {
      title: 'Book Now',
      url: '/items',
      icon: 'list'
    },
    {
      title: 'Orders',
      url: '/booking-list',
      icon: 'list'
    },*/
    {
      title: 'Profile',
      url: '/user-details',
      icon: 'contact'
    },
    {
      title: 'Logout',
      url: '/login',
      icon: 'exit'
    }
  ];
  public menuname: string = "Menu";

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private router: Router
  ) {
    if (localStorage.getItem('userLogged') !== undefined){
      if (localStorage.getItem('userLogged') === 'yes') {
        this.router.navigate(['/emergency-book']);
        this.menuname = localStorage.getItem('phone')
      }
    }
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.splashScreen.hide();
    });
  }
}
