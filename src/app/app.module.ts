import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { listComponent } from './SuperHero/list.component';
import { createComponent } from './SuperHero/create.component';
import { FormsModule } from '@angular/forms';
import { SuperHeroService } from './Services/SuperHeroService';
import{HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    listComponent,
    createComponent,
  ],
  imports: [
    BrowserModule,
     AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SuperHeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
