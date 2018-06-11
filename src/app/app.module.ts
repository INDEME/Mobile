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
import { CreateAskPage } from '../pages/create-ask/create-ask';
import { HttpModule } from '@angular/http';
import { DoPoollPage } from '../pages/do-pooll/do-pooll';
import { GraphicPage } from '../pages/graphic/graphic';
import { SeePollPage } from '../pages/see-poll/see-poll';
import { ResultpollsPage } from '../pages/resultpolls/resultpolls';
import { ConsultaProvider } from '../providers/consulta/consulta';

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
    DoPoollPage,
    GraphicPage,
    ResultpollsPage,
    SeePollPage,
    PrincipalPage,
    EditPage,
    SignupPage,
    LibraryPage,
    TabsPage,
    CreateAskPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      tabsPlacement: 'bottom',
        platforms: {
          android: {
            tabsPlacement: 'bottom'
          },
          ios: {
            tabsPlacement: 'bottom'
          },
          windows:
          {
            tabsPlacement: 'bottom'
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
    DoPoollPage,
    GraphicPage,
    SeePollPage,
    CalculatorPage,
    ResultpollsPage,
    CreatePage,
    EditPage,
    CreateAskPage,
    PrincipalPage,
    SignupPage,
    LibraryPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    AuthSevice,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConsultaProvider
  ]
})
export class AppModule {}
