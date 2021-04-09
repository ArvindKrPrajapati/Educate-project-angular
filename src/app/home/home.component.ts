import { Component, OnInit } from '@angular/core';
import { DevelopmentService } from '../service/development.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 front:any[]=[];
 back:any[]=[];
  constructor(private _service:DevelopmentService) { }

  ngOnInit(): void {
    this.front=this._service.getFrontend();
    this.back=this._service.getBackend();
  }

}
