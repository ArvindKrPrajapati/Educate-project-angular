import { Component, OnInit ,Input, EventEmitter } from '@angular/core';
import { CourseService } from '../service/course.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
 //@Output() changeTitle=new EventEmitter();
 @Input() basicId;
  id;
  data;
  constructor(private _service:CourseService,
             private _route:ActivatedRoute) { 
               
             }

  ngOnInit(): void {
    this._route.paramMap.subscribe((id)=>{
      this.id=+id.get('id');
      if(this.basicId)
        this.id=this.basicId;
    this.data=this._service.getCourse(this.id);
    });
  }

}
