import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../service/news.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  roadmap:any[]=[];
  constructor(private _service:NewsService) { }

  ngOnInit(): void {
    this.roadmap=this._service.getRoadmap();
  }

}
