import { Component, OnInit } from '@angular/core';
import {UserService} from '../../provider/auth/user.service';
import {Apiresponse} from '../../interface/apiresponse';
import {AlertController, ModalController} from '@ionic/angular';
import {OtpValidatePage} from '../../component/otp-validate/otp-validate.page';
import {ValidOtp} from '../login/login.page';
import {TrackStatusPage} from '../track-status/track-status.page';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.page.html',
  styleUrls: ['./booking-list.page.scss'],
  providers: [UserService]
})
export class BookingListPage implements OnInit {
  public orders: any = [];
  private msg: string = '';
  public fakeList: any = [{},{},{},{},{},{}];
  constructor(private serviceProvider: UserService,
              private modalCtrl: ModalController,
              private alertController: AlertController) { }
  ngOnInit() {
      this.serviceProvider.getBookingList().then(async (res: Apiresponse)=>{
         console.log(res);
         this.orders = res.data;
         if(res.data.length == 0){
           const alert = await this.alertController.create({
             message: 'No Orders Found',
             buttons: ['Close']
           });
          // await alert.present();
             this.fakeList = [];
             this.msg = 'No orders found';
         }
      }, async (err)=>{
        const alert = await this.alertController.create({
          message: 'Server not found',
          buttons: ['Close']
        });
        await alert.present();
      });
  }

  async trackStatus(order: any){
      const modal = await this.modalCtrl.create({
          component: TrackStatusPage,
          componentProps: {'order': order},
      });
      return await modal.present();
  }

}
