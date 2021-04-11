import { Component, OnInit,Input,OnChanges } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit ,OnChanges{
 @Input() data; 
   facebook;
   instagram;
   twitter;
   theme;
  constructor() { }

  ngOnInit(): void {
   this.facebook=this.data[0];
   this.instagram=this.data[2];
   this.twitter=this.data[1];
   
  }
ngOnChanges():void{
this.theme=this.data[3];
}
}
