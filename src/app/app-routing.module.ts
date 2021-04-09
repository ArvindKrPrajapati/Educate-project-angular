import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoadmapComponent } from './category/roadmap.component';

const routes: Routes = [
  {
   path:"home",
   component:HomeComponent
  },
  {
    path:"category/:name",
    component:RoadmapComponent
  },
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
