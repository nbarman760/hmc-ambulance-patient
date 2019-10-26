import { Component, OnInit } from '@angular/core';
import {AlertController, LoadingController, ModalController, ToastController} from '@ionic/angular';

import {UserService} from '../../provider/auth/user.service';
import {OtpValidatePage} from '../../component/otp-validate/otp-validate.page';
import {Router} from '@angular/router';
export interface ValidOtp {
    data: any;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
    providers: [UserService]
})
export class LoginPage implements OnInit {
  public user: any = {
    phone: ''
  };
  constructor(
      public userProvider: UserService,
      public toastController: ToastController,
      public loadingController: LoadingController,
      public modalCtrl: ModalController,
      private alertController: AlertController,
      private router: Router
  ) { }

  ngOnInit() {
      localStorage.setItem('userLogged', 'no');
     //this.router.navigate(['/login']);
  }
 async sentOtp() {
        const phoneno = /^\d{10}$/;
        if(this.user.phone.match(phoneno)){
            let loading = await this.loadingController.create();
            loading.present();
            this.userProvider.sentOtp(this.user).then(async (res: any)=>{
                   loading.dismiss();
                   if(res.status == 'success'){
                       const modal = await this.modalCtrl.create({
                           component: OtpValidatePage,
                           componentProps: this.user,
                       });
                       modal.onDidDismiss().then((passData: ValidOtp) => {
                               if ( passData.data.isValidOtp === 'yes') {
                                   localStorage.setItem('userLogged', 'yes');
                                   localStorage.setItem('phone', this.user.phone);
                                   this.router.navigate(['/user-details']);
                               }
                       });
                       return await modal.present();
                   }
            }, async (err)=>{
                loading.dismiss();
                const alert = await this.alertController.create({
                    message: 'Server not found',
                    buttons: ['Close']
                });
                await alert.present();
            });
        } else {
          const toast = await this.toastController.create({
            message: 'Invalid mobile number',
            position: 'bottom',
            duration: 3000
          });
          toast.present();
        }
  }
}
