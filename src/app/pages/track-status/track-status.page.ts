import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Booking} from '../car-book/car-book.page';

@Component({
  selector: 'app-track-status',
  templateUrl: './track-status.page.html',
  styleUrls: ['./track-status.page.scss'],
})
export class TrackStatusPage implements OnInit {
  @Input() order: any;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
      console.log('order', this.order);
  }
  dismiss(){
    this.modalCtrl.dismiss({});
  }

}
