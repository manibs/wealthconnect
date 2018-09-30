import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RecomendationServiceProvider } from '../../Providers/recomendation-service/recomendation-service';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html'
})
export class AdminPage {
  //public recomendation: any;
  public result: any;
  public recomendation = { "Stock": "", "CMP": "", "target": "", "stopploss": "", "RecomendedOn": "", "CallType": "" };
  constructor(public navCtrl: NavController, public recomendationServiceProvider: RecomendationServiceProvider, private alertCtrl: AlertController) {

  }

  SaveNotification() {
    //let recomendation = { "Stock": "infy", "CMP": "100", "target": "110", "stopploss": "90", "RecomendedOn": "2018-09-30", "CallType": "Stocks" };
    this.recomendationServiceProvider.SaveRecomendation(this.recomendation)
      .then(data => {
        console.log(data);
          this.recomendation = { "Stock": "", "CMP": "", "target": "", "stopploss": "", "RecomendedOn": "", "CallType": "" };
          let alert = this.alertCtrl.create({
            title: 'Recomendation',
            subTitle: 'Recomendation saved',
            buttons: ['Dismiss']
          });
          alert.present();
       // }
      })
      .catch(error => {
        console.log(error);
      });
  }
}


