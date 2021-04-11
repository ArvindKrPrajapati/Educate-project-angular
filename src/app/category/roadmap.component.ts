import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';  
import { DevelopmentService } from '../service/development.service';  
import { YtchannelService } from '../service/ytchannel.service';  

import { IData } from '../model/data.model';  


import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.css']
})
export class RoadmapComponent implements OnInit {
 
 question:string;
 answer:string;
 
  roadQuestion="what is meant by Roadmap ? ";
  roadAnswer="All new things starts with plan ,Roadmap is a plan or your path from where to start amd how to start. It gives you a better understanding about what is going to come in between you path and upto where it will go , Definitely there is not end in study but we can say that it is completed when it comes to a certain point. In simple word Roadmap is a syllabus.";        
  
  frontQuestion="Introduction";
  frontAnswer="Every Application has its two parts frontend and backend.frontend describes the look and feel of the application along with its working like when a button is clicked what will happen like stuff .frontend consists of of UI/UX designing After learning Html,css and JavaScript the next step is to learn some of the framework or libraries here are the list of some technology you should learn";
  
  backQuestion="Introduction";
  backAnswer="After learning Html,css,JavaScript the first step to become a full stack developer is by learning backend technologies ,Hello Greenhat.Srs  i am Arvind kumar and today i am gonna introduce you about some of the most famous backend technologies you should be learning .backend basically means the programming at server side (server is a computer nothing else where we store data to all people and give back them their information when they ask) there are a lots of tutorials present on the youtube which is best for you that can teach you everything. Dont worry here the selected videos";
  
  ytQuestion="our superheroes";
  ytAnswer="Firstly i would like to thank all the youtubers those are providing every single technology at free of cost. if you have chosen Computer screen branch and thinking that collage will teach you these technologies then you might be wrong .You have to learn these by yourself .But wait you have invested a lot of money in College so i am saying they will not teach development so now i have to invest more money ,The answer is NO All you can learn FREE only you will need a computer and internet connection  and Thses suoerheros will take you to the success.";
  constructor(private _newsService:NewsService,
             private _route:ActivatedRoute,
             private _router:Router,
             private _devService:DevelopmentService,
             private _ytService:YtchannelService) { }

 datas:IData[]=[];
 category:string;
 
  ngOnInit(): void {
      this._route.paramMap.subscribe(param=>{
      this.category=param.get('id');
      this.getDetails();
    });
    
  }

  getDetails():void{
    switch(this.category)
     {
      case "roadmap":
        this._newsService.getRoadmapHttp().subscribe((data:IData[])=>{
          this.datas=data;
          this.question=this.roadQuestion;
          this.answer=this.roadAnswer;
        });
       break;
      
      case "frontend":
        this._devService.getFrontendHttp().subscribe((data:IData[])=>{
          this.datas=data;
          this.question=this.frontQuestion;
          this.answer=this.frontAnswer;
         });
       break;
      
      case "backend":
        this._devService.getBackendHttp().subscribe((data:IData[])=>{
         this.datas=data;
         this.question=this.backQuestion;
         this.answer=this.backAnswer;
       });
        break;
      
      case "youtube":
        this._ytService.getYtchannelHttp().subscribe((data:IData[])=>{
         this.datas=data;
         this.question=this.ytQuestion;
         this.answer=this.ytAnswer;
       });
        break;
       
      default:
         this._router.navigate(["/home"]);
         break;
      }
  }
  
  //close of class
}
