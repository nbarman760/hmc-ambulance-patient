import { Component, OnInit } from '@angular/core';
import {UserService} from '../../provider/auth/user.service';
import {Apiresponse} from '../../interface/apiresponse';
import {AlertController, LoadingController, ToastController} from '@ionic/angular';
import {Router} from '@angular/router';
export interface Userdetails {
    name: string;
    phone: string;
    email: string;
    sex: string;
}

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
  providers: [UserService]
})
export class UserDetailsPage implements OnInit {
 public userDetails: Userdetails = {
    name: '',
    phone: '',
    email: '',
    sex: 'male'
 };
  constructor(
      public userProvider: UserService,
      public loadingController: LoadingController,
      private alertController: AlertController,
      private toastController: ToastController,
      private router: Router
  ) { }

  ngOnInit() {
      if (localStorage.getItem('phone') !== undefined) {
          this.userDetails.phone = localStorage.getItem('phone');
          this.userProvider.getUserDetails( +this.userDetails.phone ).then((res: Apiresponse) => {
              this.userDetails = res.data;
          });
      }
  }


  async saveDetails() {
    if (localStorage.getItem('phone') != undefined) {
        this.userDetails.phone = localStorage.getItem('phone');
        let loading = await this.loadingController.create({
            duration: 5000
        });
        loading.present();
        this.userProvider.saveUserdetails(this.userDetails).then(async (res: Apiresponse)=>{
             if (res.status === 'success') {
                 const toast = await this.toastController.create({
                     message: 'Your details has been updated',
                     position: 'bottom',
                     duration: 3000
                 });
                 toast.present();
                 this.router.navigate(['/emergency-book']);
             } else {
                 const alert = await this.alertController.create({
                     message: res.msg,
                     buttons: ['Close']
                 });
                 await alert.present();
             }
            loading.dismiss();
        }, async (err)=>{
            loading.dismiss();
            const alert = await this.alertController.create({
                message: 'Server not found',
                buttons: ['Close']
            });
            await alert.present();
        });
    }

  }

}
