import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../service/news.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  data;
  constructor(private _router:ActivatedRoute,
            private _service:NewsService) { }
 ifBasic=false;
  ngOnInit(): void {
    let route=this._router.snapshot.params.id;
    this.ifBasic=route==1;
    this.data=this._service.getDataOfMap(route);
  }

}
