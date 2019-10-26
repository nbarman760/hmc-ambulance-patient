import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ModalController} from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
declare var google;
@Component({
  selector: 'app-select-location',
  templateUrl: './select-location.page.html',
  styleUrls: ['./select-location.page.scss'],
})
export class SelectLocationPage implements OnInit {
  @Input() location: string;
  @ViewChild('map', {static: false}) mapElement: ElementRef;
  map: any;
  public address:string;
  public longitude: any;
  public latitude: any;
  public locality: string;
  public pincode: string;
  constructor(private modalCtrl: ModalController,
              private geolocation: Geolocation,
              private nativeGeocoder: NativeGeocoder) {
             console.log('location ', this.location);
  }

  async getPoints() {
      console.log('change');
    if ( this.address == ''){
      let options: NativeGeocoderOptions = {
        useLocale: true,
        maxResults: 5
      };
      this.nativeGeocoder.forwardGeocode(this.address, options)
        .then((result: NativeGeocoderResult[]) => {
          console.log('The coordinates are latitude=' + result[0].latitude + ' and longitude=' + result[0].longitude);
          this.latitude = result[0].latitude;
          this.longitude = result[0].longitude;
          let latLng = new google.maps.LatLng(result[0].latitude, result[0].longitude);
          let mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };
          this.getAddressFromCoords(result[0].latitude, result[0].longitude);
          this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
          this.map.addListener('tilesloaded', () => {
            console.log('accuracy', this.map);
            this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng())
          });
        }).catch((error: any) => console.log(error));
     }
  }


  ngOnInit() {
     this.loadMap();
  }

  loadMap() {
    this.geolocation.getCurrentPosition().then((resp) => {
      let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.map.addListener('tilesloaded', () => {
        console.log('accuracy',this.map);
        this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng())
      });
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  getAddressFromCoords(lattitude, longitude) {
    console.log("getAddressFromCoords "+lattitude+" "+longitude);
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };

    this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
        .then((result: NativeGeocoderResult[]) => {
          //this.address = "";
          let responseAddress = [];
          this.address = result[0].subLocality + ',' + result[0].locality + ',' + result[0].administrativeArea + ',' + result[0].administrativeArea + ','+ result[0].countryCode +','+ result[0].postalCode; ///JSON.stringify(result[0]);
          this.locality = result[0].subLocality;
          this.pincode = result[0].postalCode;
          for (let [key, value] of Object.entries(result[0])) {
            if(value) {
              responseAddress.push(value);
            }
          }
          responseAddress.reverse();
          for (let value of responseAddress) {
            this.address += value+", ";
          }
          this.address = this.address.slice(0, -2);
        })
        .catch((error: any) =>{
          this.address = "Address Not Available!";
        });

  }

  dismiss(){
    this.modalCtrl.dismiss({
      'dismissed': true,
      'location': this.address,
      'isPoint': false
    });
  }

    confirmLocation(){
        this.modalCtrl.dismiss({
            'dismissed': true,
            'location': this.address,
            'isPoint': true,
            'points': {
                latitude: this.latitude,
                longitude: this.longitude
            }
        });
    }

}
