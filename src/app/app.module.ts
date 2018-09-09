import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ChatPage } from '../pages/chat/chat';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { notificationPage } from '../pages/notification/notification';
import { AdminPage } from '../pages/admin/admin';
import { TabsPage } from '../pages/tabs/tabs';

import {Push} from '@ionic-native/push';
import { RecomendationServiceProvider } from '../Providers/recomendation-service/recomendation-service';
import { NotificationServiceProvider } from '../providers/notification-service/notification-service';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    notificationPage,
    TabsPage,
    AdminPage,
    ChatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    notificationPage,
    TabsPage,
    AdminPage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Push,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HTTP,
    HttpClient,
    RecomendationServiceProvider,
    NotificationServiceProvider
  ]
})
export class AppModule {}
