import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { HerolistComponent } from './herolist/herolist.component';
import { HeroState } from './herolist/hero.state';

@NgModule({
  declarations: [
    AppComponent,
    HerolistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxsModule.forRoot([HeroState])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
