import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import {Booking} from '../../interface/booking';
import * as _ from 'lodash';
import {AlertController, LoadingController, ModalController, ToastController} from '@ionic/angular';
import {UserService} from '../../provider/auth/user.service';
import {Apiresponse} from '../../interface/apiresponse';
import {Router} from '@angular/router';
import {TrackStatusPage} from '../track-status/track-status.page';
import {Ambulance, RouteMapPage} from '../route-map/route-map.page';

declare var google;
export interface Points {
   latitude: number;
   longitude: number;
}
@Component({
  selector: 'app-emergency-book',
  templateUrl: './emergency-book.page.html',
  styleUrls: ['./emergency-book.page.scss'],
  providers: [UserService]
})
export class EmergencyBookPage implements OnInit {
  public dieases: any = [
    {
      name: 'Heart Attack',
      icon: '',
      slug: 'heart-attack',
      selected: false
    },
    {
      name: 'Animal Bite',
      icon: '',
      slug: 'animal-bite',
      selected: false
    },
    {
      name: 'Bleeding',
      icon: '',
      slug: 'bleeding',
      selected: false
    },
    {
      name: 'Accident',
      icon: '',
      slug: 'accident',
      selected: false
    },
    {
      name: 'Hypertonic Syndrome',
      icon: '',
      slug: 'hypertonic-syndrom',
      selected: false
    },
    {
      name: 'Ana Pythik shock',
      icon: '',
      slug: 'anapythic-shock',
      selected: false
    },
    {
      name: 'Pregnanncy',
      icon: '',
      slug: 'pregnancy',
      selected: false
    },
    {
      name: 'Other',
      icon: '',
      slug: 'other',
      selected: false
    }
  ];
  public bookingInfo: Booking = {
    userid: JSON.parse(localStorage.getItem('userData')).ID,
    points: {
      latitude: null,
      longitude: null
    },
    diseases: []
  };
  public points: Points = {
    latitude: null,
    longitude: null
  };
  constructor( private geolocation: Geolocation,
               private toastController: ToastController,
               private alertController: AlertController,
               private modalCtrl: ModalController,
               private httpService: UserService,
               private loadingController: LoadingController,
               private router: Router,
               private nativeGeocoder: NativeGeocoder) { }

  makeSelection(dieses, i){
      this.dieases[i].selected = !this.dieases[i].selected;
  }

  async bookAmbulance(){
      this.bookingInfo.points = this.points;
      this.bookingInfo.diseases = _.filter(this.dieases, (d)=>{
          return d.selected;
      });
      if (this.bookingInfo.diseases.length > 0){
        let loading = await this.loadingController.create();
        loading.present();
        this.httpService.bookAmbulance(this.bookingInfo).then(async (res: Apiresponse)=>{
             loading.dismiss();

             if( res.status == 'success' ){
               this.notifyAmbulance(res.data);
               const modal = await this.modalCtrl.create({
                 component: RouteMapPage,
                 componentProps: { 'ambulance': res.data },
               });
               return await modal.present();

             }else{
               const alert = await this.alertController.create({
                 message: res.msg,
                 buttons: ['Close']
               });
               await alert.present();
             }

        }, async (err)=>{
          const alert = await this.alertController.create({
            message: 'Server is busy. Please find a car to reach him/her to hospital',
            buttons: ['Close']
          });
          await alert.present();
          loading.dismiss();
        });
      } else {
        const toast = await this.toastController.create({
          message: 'Please select atleast one diease',
          position: 'top',
          duration: 3000
        });
        toast.present();
      }
      console.log(this.bookingInfo);
  }


  async notifyAmbulance(ambulance: Ambulance) {
     let params = {
       notification:{
         title:"Emergency Patient",
         body:"An accident has been happened at..",
         sound:"default",
         click_action:"FCM_PLUGIN_ACTIVITY",
         icon:"fcm_push_icon"
       },
       data: {
         'bookingInfo': this.bookingInfo,
         'order': ambulance
       },
       to: "/topics/all",
       priority:"high",
       restricted_package_name:""
     };
     this.httpService.alertAmbulance(params).then((res: any)=>{
         console.log(res);
     }, (err)=>{
         console.log(err);
     });
  }

  ngOnInit() {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log("Latitude and longitude", resp.coords.latitude, resp.coords.longitude);
      this.points = {
        longitude: resp.coords.longitude,
        latitude: resp.coords.latitude
      };
    });
  }

}
