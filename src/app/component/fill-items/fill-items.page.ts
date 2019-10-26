import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../../category/furniture';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-fill-items',
  templateUrl: './fill-items.page.html',
  styleUrls: ['./fill-items.page.scss'],
})
export class FillItemsPage implements OnInit {
  @Input() category: Category;
  constructor(
      private modalCtrl: ModalController
  ) {

  }
    plus(item, i) {
        this.category.items[i].qty++;
    }
    minus(item, i) {
        if( this.category.items[i].qty != 0){
            this.category.items[i].qty--;
        }
    }

  ngOnInit() {
     console.log(this.category);
  }
  dismiss(){
     this.modalCtrl.dismiss({
        category: this.category
     })
  }

}
