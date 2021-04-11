import { Injectable } from '@angular/core';
import { Observable ,of } from 'rxjs';
import { IData } from '../model/data.model';  
import { HttpClient } from '@angular/common/http';  

 
 
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  RaodmapData:IData[]=[
    {
    id:1,
    name:"html-css",
    text:"start your career in web dev By learning Html5 , css3 , JavaScript",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHzheP0NxMoTFNygfq5LH2epZX1mkec-upZg&usqp=CAU"
    },
    {
    id:2,
    name:"frontend",
    text:"complete Roadmap to become job ready frontend developer",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL_p0pXmLYvP-pb0XBpRXCLDsJBepeOQgQSA&usqp=CAU"     
  },
  {
    id:3,
    name:"Backend",
    text:"complete Roadmap to become job ready backend  developer",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRF_CtBroKv24RcN6Qc3Z1IzmL1IqfHNxvXA&usqp=CAU"
  },
  {
    id:4,
    name:"full stack",
    text:"complete Roadmap to become job ready full stack web developer",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHw5wTWG9_XYeVkqxtFyD0pl67oUYbqY_mw&usqp=CAU"
  }];
  
  data:any[]=[{
    id:2,
    name:"frontend",
    mess:"you can start you journey to become frontend developer by learning basics, i have listed the things which you should start learning from today if you wish to become a web developer.You will get the video tutorial links related to the topic which is listed below amf from the best teacher on youtube which is absolutely free",
    tech:['html5','css3','JavaScript','Angular','React','Vuejs','version Control system (git)','source code management (github)']
  },{
    id:4,
    name:"fullstack",
    mess:"After Learning Frontend and backend its time to ho for full stack development here are the listed things you need to learn to become full stack developer",
    tech:['Frontend','Backend','Database','DevOps','Mobile App']
  },{
    id:3,
    name:"backend",
    mess:"After Learning Frontend or basic html,css, JavaScript, you can start one of the course from listed below to become backend developer",
    tech:['php','Nodejs','Ruby','Python','Laravel(Php framework)','Django(Puthon framework)','ExpressJs(Nodejs framework)']
  }] ;
  constructor(private _http:HttpClient) { }
  getRoadmap():IData[]{
    return this.RaodmapData;
  }
  getRoadmapHttp(){
    return of(this.RaodmapData);
  }
  
  getDataOfMap(id){
    return this.data.find(d=> d.id==id)
  }
}
