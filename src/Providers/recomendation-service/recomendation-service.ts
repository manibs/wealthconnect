import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http';
/*
  Generated class for the RecomendationServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RecomendationServiceProvider {

  public Recomendations: any;

  constructor(public http: HTTP) {
    console.log('Hello RecomendationServiceProvider Provider');
  }

  /**
   * GetRecomendations
   */
  public GetRecomendations() {
    //return this.Recomendations; 
    if (this.Recomendations) {
      // already loaded data
      return Promise.resolve(this.Recomendations);
    }

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      this.http.get('assets/recomendation.json', {}, {})
        .then(data => {
          this.Recomendations = data.data.json();
          return this.Recomendations;
        });
    });
  }

}
