import { Component, OnInit } from '@angular/core';
import {Category, furnitureJsopn} from '../../category/furniture';
import {ModalController} from '@ionic/angular';
import {OtpValidatePage} from '../../component/otp-validate/otp-validate.page';
import {ValidOtp} from '../login/login.page';
import {FillItemsPage} from '../../component/fill-items/fill-items.page';
import {electronicJson} from '../../category/electronic';
import {kitchenJson} from '../../category/kitchen';
import {accessoriesJson} from '../../category/accessories';
import {miscellaneousJson} from '../../category/miscellaneous';
import {vehicleJson} from '../../category/vehicles';
import {Router} from '@angular/router';
import * as _ from 'lodash';
export interface ItemsData {
   furniture: any;
   electronics: any;
   kitchen: any;
   accessories: any;
   miscellaneous: any;
   vehicle: any;
};
export interface Itemcount {
  furniture: number;
  electronics: number;
  kitchen: number;
  accessories: number;
  miscellaneous: number;
  vehicle: number;
}
@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
  public furniture: Category = furnitureJsopn;
  public electronics: Category = electronicJson;
  public kitchen: Category = kitchenJson;
  public accessories: Category = accessoriesJson;
  public miscellaneous: Category = miscellaneousJson;
  public vehicle: Category = vehicleJson;
  public total_items: Itemcount = {
    furniture: 0,
    electronics: 0,
    kitchen: 0,
    accessories: 0,
    miscellaneous: 0,
    vehicle: 0
  };
  constructor(
      private modalCtrl: ModalController,
      private router: Router
  ) {

  }

  async fillFurniture() {
    const modal = await this.modalCtrl.create({
      component: FillItemsPage,
      componentProps: {
        category: this.furniture
      }
    });
    modal.onDidDismiss().then((passData: any) => {
       this.furniture = passData.data.category;
       this.total_items.furniture = 0;
       for (let i=0; i<this.furniture.items.length; i++){
          this.total_items.furniture =  this.total_items.furniture + (+this.furniture.items[i].qty);
       }
    });
    return await modal.present();
  }

  async fillElectronics() {
    const modal = await this.modalCtrl.create({
      component: FillItemsPage,
      componentProps: {
        category: this.electronics
      }
    });
    modal.onDidDismiss().then((passData: any) => {
      this.electronics = passData.data.category;
      this.total_items.electronics = 0;
      for (let i=0; i<this.electronics.items.length; i++){
        this.total_items.electronics =  this.total_items.electronics + (+this.electronics.items[i].qty);
      }
    });
    return await modal.present();
  }
  async fillKitchen() {
    const modal = await this.modalCtrl.create({
      component: FillItemsPage,
      componentProps: {
        category: this.kitchen
      }
    });
    modal.onDidDismiss().then((passData: any) => {
      this.total_items.kitchen = 0;
      this.kitchen = passData.data.category;
      for (let i=0; i < this.kitchen.items.length; i++){
        this.total_items.kitchen =  this.total_items.kitchen + (+this.kitchen.items[i].qty);
      }
    });
    return await modal.present();
  }


  async fillAccessories() {
    const modal = await this.modalCtrl.create({
      component: FillItemsPage,
      componentProps: {
        category: this.accessories
      }
    });
    modal.onDidDismiss().then((passData: any) => {
      this.accessories = passData.data.category;
      this.total_items.accessories = 0;
      for (let i=0; i < this.accessories.items.length; i++){
        this.total_items.accessories =  this.total_items.accessories + (+this.accessories.items[i].qty);
      }
    });
    return await modal.present();
  }

  async fillMiscellaneous() {
    const modal = await this.modalCtrl.create({
      component: FillItemsPage,
      componentProps: {
        category: this.miscellaneous
      }
    });
    modal.onDidDismiss().then((passData: any) => {
      this.miscellaneous = passData.data.category;
      this.total_items.miscellaneous = 0;
      for (let i=0; i < this.miscellaneous.items.length; i++){
        this.total_items.miscellaneous =  this.total_items.miscellaneous + (+this.miscellaneous.items[i].qty);
      }
    });
    return await modal.present();
  }

  async fillVehicle() {
    const modal = await this.modalCtrl.create({
      component: FillItemsPage,
      componentProps: {
        category: this.vehicle
      }
    });
    modal.onDidDismiss().then((passData: any) => {
      this.vehicle = passData.data.category;
      this.total_items.vehicle = 0;
      for (let i=0; i < this.vehicle.items.length; i++){
        this.total_items.vehicle =  this.total_items.vehicle + (+this.vehicle.items[i].qty);
      }
    });
    return await modal.present();
  }

  proceedToaddress(){
      let jsonItems: ItemsData = {
         furniture: this.furniture,
         kitchen: this.kitchen,
         electronics: this.electronics,
         accessories: this.accessories,
         miscellaneous: this.miscellaneous,
         vehicle: this.vehicle
      };
      this.router.navigate(['/car-book', { categories: JSON.stringify(jsonItems) }]);
  }

  ngOnInit() {
    this.total_items.vehicle = 0;
    for (let i=0; i < this.vehicle.items.length; i++){
      this.total_items.vehicle =  this.total_items.vehicle + (+this.vehicle.items[i].qty);
    }
    this.total_items.furniture = 0;
    for (let i=0; i < this.furniture.items.length; i++){
      this.total_items.furniture =  this.total_items.furniture + (+this.furniture.items[i].qty);
    }

    this.total_items.accessories = 0;
    for (let i=0; i < this.accessories.items.length; i++){
      this.total_items.accessories =  this.total_items.accessories + (+this.accessories.items[i].qty);
    }

    this.total_items.kitchen = 0;
    for (let i=0; i < this.kitchen.items.length; i++){
      this.total_items.kitchen =  this.total_items.kitchen + (+this.kitchen.items[i].qty);
    }
    this.total_items.miscellaneous = 0;
    for (let i=0; i < this.miscellaneous.items.length; i++){
      this.total_items.miscellaneous =  this.total_items.miscellaneous + (+this.miscellaneous.items[i].qty);
    }

  }

}
