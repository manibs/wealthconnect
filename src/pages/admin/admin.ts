import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RecomendationServiceProvider } from '../../Providers/recomendation-service/recomendation-service';

@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html'
})
export class AdminPage {
  //public recomendation: any;
  public result: any;
  public recomendation = { "Stock": "", "CMP": "", "target": "", "stopploss": "", "RecomendedOn": "", "CallType": "" };
  constructor(public navCtrl: NavController, public recomendationServiceProvider: RecomendationServiceProvider) {

  }

  SaveNotification() {
    //let recomendation = { "Stock": "infy", "CMP": "100", "target": "110", "stopploss": "90", "RecomendedOn": "2018-09-30", "CallType": "Stocks" };
    this.result = this.recomendationServiceProvider.SaveRecomendation(recomendation);
    console.log(this.result);
  }

}
