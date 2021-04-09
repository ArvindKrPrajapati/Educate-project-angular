import { Component, OnInit } from '@angular/core';
import { DevelopmentService } from '../service/development.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 frontend:any[]=[];
 backend:any[]=[];
  constructor(private _service:DevelopmentService) { }

  ngOnInit(): void {
    this.frontend=this._service.getFrontend();
    this.backend=this._service.getBackend();
  }

}
