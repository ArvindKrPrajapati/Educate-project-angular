import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.css']
})
export class FrontendComponent implements OnInit {
 @Input() fronts:any[];
  constructor( ) { }

  ngOnInit(): void {
    //this.fronts=this._service.getFrontend();
  }

}
