import { Component ,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 
export class AppComponent implements OnInit {
  title="educateMe";
  frontend=['Angular','ReactJs','VueJs','Angular Material'];
  backend=['Php','NodeJs','python','Ruby'];
  roadmap=['html5 and Css3','Frontend','Backend','Full stack'];

  mobileLayout;
  twitter="https://mobile.twitter.com/ArvindK64730650";
  instagram="https://www.instagram.com/prajapati_arvind2001/";
  facebook="https://www.facebook.com/profile.php?id=100027106157907";
  mode="side";
  theme="accent";
  footerTheme="accentTheme";
  constructor(private _cookie:CookieService ){}
  
ngOnInit(): void {
  if(window.innerWidth<=600)
   {
     this.mobileLayout=true;
     this.mode="over";
   }
  window.onresize=()=>{
    this.mobileLayout=window.innerWidth <=600;
   }
  let x=this._cookie.get('theme');
  this.changeTheme(x);
  }
  
  onActive():void{
     let a =document.getElementById("container");
    a.scrollTo(0,0);
   }
  
  changeTheme(theme):void{
   this._cookie.set('theme',theme);
    let t=+theme;
     switch(t){
      case 1:
        this.theme="accent";
        this.footerTheme="accentTheme";
        break;
      case 2:
        this.theme="warn";
        this.footerTheme="warnTheme";
        break;
      case 3:
        this.theme="primary"
        this.footerTheme="primaryTheme";
        break;
      case 4:
        this.theme="darkTheme";
        this.footerTheme="darkTheme";
        break;
    }
    
  }
  
}
