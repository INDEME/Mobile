import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { LoginPage } from '../pages/login/login';
import { CalculatorPage } from '../pages/calculator/calculator';
import { CreatePage } from '../pages/create/create';
import { EditPage } from '../pages/edit/edit';
import { LibraryPage } from '../pages/library/library';
import { SignupPage } from '../pages/signup/signup';
import { PrincipalPage } from '../pages/principal/principal';
import {HttpModule} from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthSevice } from '../services/auth/auth';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    CalculatorPage,
    CreatePage,
    PrincipalPage,
    EditPage,
    SignupPage,
    LibraryPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      tabsPlacement: 'top',
        platforms: {
          android: {
            tabsPlacement: 'top'
          },
          ios: {
            tabsPlacement: 'top'
          },
          windows:
          {
            tabsPlacement: 'top'
          }
        }
      })
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    CalculatorPage,
    CreatePage,
    EditPage,
    
    PrincipalPage,
    SignupPage,
    LibraryPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    AuthSevice,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
