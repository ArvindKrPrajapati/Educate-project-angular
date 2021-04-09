import { Component ,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 
export class AppComponent implements OnInit {
  title="Greenhat sr";
  frontend=['Angular','ReactJs','VueJs','Angular Material'];
  backend=['Php','NodeJs','python','Ruby'];
  roadmap=['html5 and Css3','Frontend','Backend','Full stack'];

  mobileLayout;
  
  mode="side";
  
  constructor(){}
  
ngOnInit(): void {
  if(window.innerWidth<=600)
   {
     this.mobileLayout=true;
     this.mode="over";
   }
  window.onresize=()=>{
    this.mobileLayout=window.innerWidth <=600;
    
  }
  
  }
}
