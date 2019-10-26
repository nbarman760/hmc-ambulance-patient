import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {ModalController} from '@ionic/angular';
declare var google;
export interface Ambulance {
  ambulance_id: number;
  ambulance_number: string;
  available_status: number;
  createdAt: Date;
  current_lat: string;
  current_lon: string;
  driver_contact_no: string;
  driver_name: string;
  updatedAt: Date;
};
@Component({
  selector: 'app-route-map',
  templateUrl: './route-map.page.html',
  styleUrls: ['./route-map.page.scss'],
})
export class RouteMapPage implements OnInit, AfterViewInit {
  @Input() ambulance: Ambulance;
  @ViewChild('map', {static: false}) mapNativeElement: ElementRef;
  directionsService = new google.maps.DirectionsService;
  directionsRenderer = new google.maps.DirectionsRenderer;
  currentLocation: any = {
    lat: 0,
    lng: 0
  };
  constructor(  private geolocation: Geolocation,
                private modalController: ModalController) {

  }
  ngAfterViewInit(): void {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.currentLocation.lat = resp.coords.latitude;
      this.currentLocation.lng = resp.coords.longitude;
    });
    const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
      zoom: 7,
      center: this.currentLocation
    });
    this.directionsRenderer.setMap(map);
  }

  ngOnInit() {
    this.calculateAndDisplayRoute();
  }

  calculateAndDisplayRoute() {
    const that = this;
    this.directionsService.route({
      origin: {lat: +this.ambulance.current_lat, lng: +this.ambulance.current_lon}, //
      destination: this.currentLocation,
      travelMode: 'WALKING'
    }, (response, status) => {
      if (status === 'OK') {
        that.directionsRenderer.setDirections(response);
      } else {
       // window.alert('Directions request failed due to ' + status);
         if( status === 'ZERO_RESULTS'){
           this.directionsService.route({
             origin: {lat: +this.ambulance.current_lat, lng: +this.ambulance.current_lon}, //
             destination: this.currentLocation,
             travelMode: 'WALKING'
           }, (resp, statuses) => {
             that.directionsRenderer.setDirections(resp);
           });
         }
      }
    });
  }

  dismiss(){
  //  this.directionsRenderer.destroy();
    this.modalController.dismiss({});
  }

  loadMap() {
    const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
      zoom: 7,
      center: {lat: 41.85, lng: -87.65}
    });
    this.directionsRenderer.setMap(map);
  }
}
