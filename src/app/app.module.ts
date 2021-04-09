import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

import { FormsModule } from '@angular/forms';
import { NewsComponent } from './home/news/news.component';
import { FrontendComponent } from './home/frontend/frontend.component';
import { ChannelComponent } from './home/channel/channel.component';
import { FooterComponent } from './home/footer/footer.component';
import { HomeComponent } from './home/home.component';

import { NewsService } from './service/news.service';
import { DevelopmentService } from './service/development.service';
import { YtchannelService } from './service/ytchannel.service';
import { RoadmapComponent } from './category/roadmap.component';
import { CardComponent } from './globalcomp/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    FrontendComponent,
    ChannelComponent,
    FooterComponent,
    HomeComponent,
    RoadmapComponent,
    CardComponent
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
