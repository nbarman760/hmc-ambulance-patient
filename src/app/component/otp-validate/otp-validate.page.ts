import {Component, Input, OnInit} from '@angular/core';
import {AlertController, LoadingController, ModalController} from '@ionic/angular';
import {UserService} from '../../provider/auth/user.service';
import {Apiresponse} from '../../interface/apiresponse';
export interface OTP {
   phone: number;
   otp: number;
}
@Component({
  selector: 'app-otp-validate',
  templateUrl: './otp-validate.page.html',
  styleUrls: ['./otp-validate.page.scss'],
  providers: [UserService]
})
export class OtpValidatePage implements OnInit {
  @Input() phone: number;
  public otpDetails: OTP = {
    phone: null,
    otp: null
  }
  constructor(private modalCtrl: ModalController,
              private loadingController: LoadingController,
              private alertController: AlertController,
              private authProvider: UserService) {

  }

  ngOnInit() {
      this.otpDetails.phone = this.phone;
  }
  async validateOtp(){
      let loading = await this.loadingController.create({
          duration: 5000
      });
      loading.present();
     this.authProvider.verifyOTP(this.otpDetails).then(async (res: Apiresponse)=>{
                console.log(res);
                if(res.status == 'success'){
                    localStorage.setItem('userData', JSON.stringify(res.data));
                    this.modalCtrl.dismiss({
                        'dismissed': true,
                        'isValidOtp': 'yes'
                    });
                }else{
                    const alert = await this.alertController.create({
                        message: res.msg,
                        buttons: ['Close']
                    });
                    await alert.present();
                }
                loading.dismiss();
     })
  }
  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true,
        'isValidOtp': 'no'
    });
  }

}
