import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
//Angular maps framework
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    AgmCoreModule.forRoot({apiKey: 'AIzaSyBEpQTH2SLSh4cqYOu3jV-gZ_7GE_X2kK4'})
  ],
})
export class HomePageModule {}
