import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import {ValidateOtpComponent} from './component/validate-otp/validate-otp.component';
import {OtpValidatePage} from './component/otp-validate/otp-validate.page';
import {OtpValidatePageModule} from './component/otp-validate/otp-validate.module';
import {SelectLocationPage} from './component/select-location/select-location.page';
import {SelectLocationPageModule} from './component/select-location/select-location.module';
import {NativeGeocoder} from '@ionic-native/native-geocoder/ngx';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {FillItemsPage} from './component/fill-items/fill-items.page';
import {FillItemsPageModule} from './component/fill-items/fill-items.module';
import {TrackStatusPageModule} from './pages/track-status/track-status.module';
import {TrackStatusPage} from './pages/track-status/track-status.page';
import {AmbulanceDetailsComponent} from './component/ambulance-details/ambulance-details.component';
import {BookAmbulaceDetailsPageModule} from './component/book-ambulace-details/book-ambulace-details.module';
import {BookAmbulaceDetailsPage} from './component/book-ambulace-details/book-ambulace-details.page';
import {RouteMapPage} from './pages/route-map/route-map.page';
import {RouteMapPageModule} from './pages/route-map/route-map.module';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [
      OtpValidatePage,
      SelectLocationPage,
      FillItemsPage,
      TrackStatusPage,
      RouteMapPage
  ],
  imports: [
      BrowserModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      HttpClientModule,
      OtpValidatePageModule,
      SelectLocationPageModule,
      FillItemsPageModule,
      TrackStatusPageModule,
      RouteMapPageModule
  ],
  providers: [
    SplashScreen,
    HTTP,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Geolocation,
    NativeGeocoder,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
