import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RecomendationServiceProvider} from '../../Providers/recomendation-service/recomendation-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
     public recomendations: any;

  constructor(public navCtrl: NavController, public recomendationServiceProvider: RecomendationServiceProvider) {
    this.loadRecomendation();
  }

  public loadRecomendation()
  {
    console.log('test');
    this.recomendationServiceProvider.GetRecomendations()
    .then(data=> {
      this.recomendations= data;
      console.log(data);
    })
  }

}
