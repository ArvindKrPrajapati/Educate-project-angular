import { Component ,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 
export class AppComponent implements OnInit {
  title="GreenhatSr";
  frontend=['Angular','ReactJs','VueJs','Angular Material'];
  backend=['Php','NodeJs','python','Ruby'];
  roadmap=['html5 and Css3','Frontend','Backend','Full stack'];

  mobileLayout;
  twitter="https://mobile.twitter.com/ArvindK64730650";
  instagram="https://www.instagram.com/prajapati_arvind2001/";
  facebook="https://www.facebook.com/profile.php?id=100027106157907";
  mode="side";
  
  constructor(private _router:ActivatedRoute){}
  
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
  
  onActive():void{
     let a =document.getElementById("container");
    a.scrollTo(0,0);
   }
  
  
}
