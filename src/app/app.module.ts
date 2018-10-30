import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ServerComponent} from './server/server.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
