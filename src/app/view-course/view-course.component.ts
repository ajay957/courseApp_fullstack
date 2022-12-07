import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent {

  constructor(private api:ServiceService){
    api.fetchCourse().subscribe(
      (response)=>{
        this.data=response;
      }
    )
  }

  data:any=[]

}
