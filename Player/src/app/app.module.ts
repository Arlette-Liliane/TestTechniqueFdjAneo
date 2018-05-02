import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule} from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TeamProvider } from '../providers/team/team.providers';
import { PlayerProvider } from '../providers/player/player.providers';
import { PlayerPage } from '../pages/player/player';
import { FilterLeaguesPipe } from './pipes/filter-leagues.pipe';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PlayerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PlayerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TeamProvider,
    PlayerProvider,
    FilterLeaguesPipe
  ]
})
export class AppModule {}
