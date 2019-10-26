import { Component, OnInit } from '@angular/core';
import {AlertController, LoadingController, ModalController, ToastController} from '@ionic/angular';
import {OtpValidatePage} from '../../component/otp-validate/otp-validate.page';
import {ValidOtp} from '../login/login.page';
import {SelectLocationPage} from '../../component/select-location/select-location.page';
import {ItemsData} from '../items/items.page';
import {ActivatedRoute, Router} from '@angular/router';
import * as _ from 'lodash';
import {UserService} from '../../provider/auth/user.service';
import {Apiresponse} from '../../interface/apiresponse';
declare var google;
export interface Location {
    pickup: string;
    dropoff: string;
    pickuppoints: any
    droppoints: any;
}
export interface Booking {
    user_id: number;
    pickup_address: string;
    pickup_lat: number;
    pickup_long: number;
    destination_address: string;
    destination_lat: number;
    destination_long: number;
    shift_items: string;
    shift_cost: number;
    shift_time: string;
}
@Component({
  selector: 'app-car-book',
  templateUrl: './car-book.page.html',
  styleUrls: ['./car-book.page.scss'],
    providers: [UserService]
})
export class CarBookPage implements OnInit {
     public minDate: string;
     public maxDate: string;
      public autocompleteItems: any = [];
      public autocomplete: any = {
         input: ''
      };
      public items: any;
      public location: Location = {
      pickup: '',
      dropoff: '',
      pickuppoints: {},
      droppoints: {}
  };
  public GoogleAutocomplete: any;
  public price: number = 0;
  public datetime: any = new Date();
  constructor(
      private modalController: ModalController,
      private router: ActivatedRoute,
      private route: Router,
      private toastController: ToastController,
      private loadingController: LoadingController,
      private alertController: AlertController,
      private serviceProvider: UserService
  ) {
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete = { input: '' };
    this.autocompleteItems = [];

      var currentDate = new Date();
      var date = currentDate.getDate();
      var month = currentDate.getMonth(); //Be careful! January is 0 not 1
      var year = currentDate.getFullYear();
      this.minDate = year + "-" +(month + 1) + "-" + date;
  }

  async getPickUpLocation(locfor: string) {
      console.log('get here');
      const modal = await this.modalController.create({
          component: SelectLocationPage,
          componentProps: {
              location: this.location.pickup,
              locfor: locfor
          }
      });
      modal.onDidDismiss().then((passData: any) => {
          if (passData.data.isPoint) {
              if (locfor == 'pickup') {
                  this.location.pickup = passData.data.location;
                  this.location.pickuppoints = passData.data.points;
              } else if (locfor == 'drop') {
                  this.location.dropoff = passData.data.location;
                  this.location.droppoints = passData.data.points;
              }
          }
          console.log(passData);
      });
      return await modal.present();
  }

  async next() {
      console.log(this.location);
        if (this.location.pickup === '' || this.location.dropoff === '' ){
            const toast = await this.toastController.create({
                message: 'Both pickup and drop location is available',
                position: 'bottom',
                duration: 3000
            });
            toast.present();
        } else {
            let userID = JSON.parse(localStorage.getItem('userData')).ID;
            let params: Booking = {
                shift_items: JSON.stringify(this.items),
                destination_lat: this.location.droppoints.latitude,
                destination_long: this.location.droppoints.longitude,
                destination_address: this.location.dropoff,
                pickup_address: this.location.pickup,
                pickup_lat: this.location.pickuppoints.latitude,
                pickup_long: this.location.pickuppoints.longitude,
                shift_cost: this.price,
                user_id: +userID,
                shift_time: this.datetime
            };
            console.log(params);
            let loading = await this.loadingController.create();
            loading.present();
            this.serviceProvider.bookNow(params).then(async (res: Apiresponse)=>{
                loading.dismiss();
                if(res.status == 'success') {
                    const alert = await this.alertController.create({
                        message: res.msg,
                        buttons: [
                            {
                                text: 'Ok',
                                role: 'cancel',
                                cssClass: 'secondary',
                                handler: (blah) => {
                                   // console.log('Confirm Cancel: blah');
                                    this.route.navigate(['/booking-list']);
                                }
                            }
                        ]
                    });
                   // await alert.present();
                    const toast = await this.toastController.create({
                        message: res.msg,
                        position: 'middle',
                        duration: 3000
                    });
                    toast.present();
                    this.route.navigate(['/booking-list']);
                } else {
                    const alert = await this.alertController.create({
                        message: 'Server Went Wrong',
                        buttons: [
                            {
                                text: 'Ok',
                                role: 'cancel',
                                cssClass: 'secondary',
                                handler: (blah) => {
                                    console.log(blah);
                                }
                            }
                        ]
                    });
                    await alert.present();
                }
            }, async (err)=>{
                loading.dismiss();
                const alert = await this.alertController.create({
                    message: 'Server Went Wrong',
                    buttons: [
                        {
                            text: 'Ok',
                            role: 'cancel',
                            cssClass: 'danger',
                            handler: (blah) => {
                                console.log('Confirm Cancel: blah');
                            }
                        }
                    ]
                });
                await alert.present();
            });

        }
    }

  ngOnInit() {
    this.router.params.subscribe((params: any) => {
           this.items = JSON.parse(params['categories']);
           this.calculatePrice();
           console.log(JSON.parse(params['categories']));
      });
  }

   calculatePrice() {
       for (let key in this.items){
           console.log(key);
           let keyItems = this.items[key].items;
           let prices = _.map(keyItems, (d)=>{
               return ( d.qty * d.price )
           });
           this.price = this.price + _.sum(prices);
       }
       if (this.price < 1000){
            this.price = this.price + 1000;
       }
       console.log(this.price);
   }
}
