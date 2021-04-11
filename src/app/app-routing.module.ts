import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoadmapComponent } from './category/roadmap.component';
import { CourseComponent } from './course/course.component';
import { BasicComponent } from './course/basic/basic.component';

const routes: Routes = [
  {
   path:"home",
   component:HomeComponent,
   data:{title1:"Greenhat sr"}
  },
  {
    path:"category/:id",
    component:RoadmapComponent,
    data:{title2:"category"}
  },
  {
    path:"course/:id",
    component:CourseComponent,
    data:{title3:"course"}
  },
  {
    path:"basic/:id",
    component:BasicComponent
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
