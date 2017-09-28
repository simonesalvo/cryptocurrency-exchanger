import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DataService} from './data.service';
import { AppComponent } from './app.component';
import {KrakenService} from './kraken.service';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule],
  providers: [DataService, KrakenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
