import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
 @Input() data; 
   facebook;
   instagram;
   twitter;
  constructor() { }

  ngOnInit(): void {
   this.facebook=this.data[0];
   this.instagram=this.data[2];
   this.twitter=this.data[1];
  }

}
