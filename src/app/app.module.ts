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
import { CourseService } from './service/course.service';
import { DevelopmentService } from './service/development.service';
import { YtchannelService } from './service/ytchannel.service';
import { RoadmapComponent } from './category/roadmap.component';
import { CardComponent } from './globalcomp/card/card.component';


import { HttpClientModule } from '@angular/common/http';
import { CourseComponent } from './course/course.component';
import { BasicComponent } from './course/basic/basic.component';

import { CookieService } from 'ngx-cookie-service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    FrontendComponent,
    ChannelComponent,
    FooterComponent,
    HomeComponent,
    RoadmapComponent,
    CardComponent,
    CourseComponent,
    BasicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [NewsService,DevelopmentService,YtchannelService,CourseService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
