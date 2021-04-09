import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

import { FormsModule } from '@angular/forms';
import { NewsComponent } from './component/news/news.component';
import { FrontendComponent } from './component/frontend/frontend.component';
import { ChannelComponent } from './component/channel/channel.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home.component';

import { NewsService } from './service/news.service';
import { DevelopmentService } from './service/development.service';
import { YtchannelService } from './service/ytchannel.service';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    FrontendComponent,
    ChannelComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [NewsService,DevelopmentService,YtchannelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
