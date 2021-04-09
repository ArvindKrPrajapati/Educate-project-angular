import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  RaodmapData:any[]=[{
    id:1,
    name:"html-css",
    text:"start your career in web dev By learning Html5 amd css3",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuRKEFXmInaNhu9g99LqbtytBhM7k1NM84hQ&usqp=CAU"
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
  constructor() { }
  
  getRoadmap():any[]{
    return this.RaodmapData;
  }
}
