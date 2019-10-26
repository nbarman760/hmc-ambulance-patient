import { Injectable } from '@angular/core';
import {appConfig} from '../../app.config';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import {timeout} from 'rxjs/operators';
import {Userdetails} from '../../pages/user-details/user-details.page';
import {Booking} from '../../interface/booking';

let baseUrl = appConfig.baseurl;
@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) {

  }

  sentOtp(params: any){
    return new Promise((resolve, reject) => {
             let options: any = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
              this.http.post(baseUrl + '/api/user/registerOTP', params , options)
                  .subscribe(res => {
                    resolve(res);
                  }, (err) => {
                    reject(err);
                  });
    });
  }

    /**
     *
     * @param params
     */
  verifyOTP(params: any){
      return new Promise((resolve, reject) => {
          let options: any = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
          this.http.post(baseUrl + '/api/user/verifyOTP', params , options)
              .subscribe(res => {
                  resolve(res);
              }, (err) => {
                  reject(err);
              });
      });
  }


  saveUserdetails(params: Userdetails){
      return new Promise((resolve, reject) => {
          let options: any = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
          this.http.post(baseUrl + '/api/user/registerUser', params , options)
              .subscribe(res => {
                  resolve(res);
              }, (err) => {
                  reject(err);
              });
      });
  }

  getUserDetails(mobile: number){
      return new Promise((resolve, reject) => {
          let options: any = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
          this.http.get(baseUrl + '/api/user/getUser?phone=' + mobile, options)
              .subscribe(res => {
                  resolve(res);
              }, (err) => {
                  reject(err);
              });
      });
  }

    /**
     * http://192.168.100.107:7979/api/shift/bookshift

     user_id
     pickup_address
     pickup_lat
     pickup_long
     destination_address
     destination_lat
     destination_long
     shift_items
     shift_cost
     shift_time: 2019-12-25 11:30:10
     * @param params
     */



  bookNow(params: any){
      return new Promise((resolve, reject) => {
          let options: any = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
          this.http.post(baseUrl + '/api/shift/bookshift', params, options)
              .subscribe(res => {
                  resolve(res);
              }, (err) => {
                  reject(err);
              });
      });
  }


    //http://192.168.100.107:7979/api/shift/getBookingList?user_id=4


    getBookingList(){
        return new Promise((resolve, reject) => {
            let options: any = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
            let user_ID = JSON.parse(localStorage.getItem('userData')).ID;
            this.http.get(baseUrl + '/api/shift/getBookingList?user_id=' + user_ID, options)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }


    bookAmbulance(params: Booking){
        return new Promise((resolve, reject) => {
            let options: any = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
            this.http.post(baseUrl + '/api/user/callAmbulance', params, options)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }



    alertAmbulance(params: any){
        return new Promise((resolve, reject) => {
            let options: any = {
                    headers: new HttpHeaders({
                       'Content-Type': 'application/json',
                        Authorization: 'key=AIzaSyDYhRAEKCbfiYdHBekLmXojjlV442mwukg'
                    })
            };
            this.http.post('https://fcm.googleapis.com/fcm/send', params, options)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

}
