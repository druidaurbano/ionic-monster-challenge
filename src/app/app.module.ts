import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CameraModule } from './components/camera/camera.module';
import { FooterModule } from './components/footer/footer.module';
import { GpsModule } from './components/gps/gps.module';
import { NotificationModule } from './components/notification/notification.module';
import { RickAndMortyModule } from './components/rick-and-morty/rick-and-morty.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    CameraModule,
    FooterModule,
    GpsModule,
    NotificationModule,
    RickAndMortyModule,
    HttpClientModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
