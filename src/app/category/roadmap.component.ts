import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';  
import { DevelopmentService } from '../service/development.service';  
import { YtchannelService } from '../service/ytchannel.service';  


import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.css']
})
export class RoadmapComponent implements OnInit {
 
 question:string="what is meant by Roadmap ? ";
 answer:string="All new things starts with plan ,Roadmap is a plan or your path from where to start amd how to start. It gives you a better understanding about what is going to come in between you path and upto where it will go , Definitely there is not end in study but we can say that it is completed when it comes to a certain point. In simple word Roadmap is a syllabus.";        
  constructor(private _newsService:NewsService,
             private _route:ActivatedRoute,
             private _router:Router,
             private _devService:DevelopmentService,
             private _ytService:YtchannelService) { }

 datas:any[]=[];
 
 
  ngOnInit(): void {
    let category=this._route.snapshot.params.name;
    if(category==="roadmap")
        this.datas=this._newsService.getRoadmap();
     else if(category==="frontend")
        this.datas=this._devService.getFrontend();
     else if(category==="backend")
        this.datas=this._devService.getBackend();
     else if(category==="youtube")
        this.datas=this._ytService.getYtchannel();
     else
      this._router.navigate(["/home"]);
   
      
  }

}
