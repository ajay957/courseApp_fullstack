import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  courseTitle=""

  searchData:any=[]

  constructor(private api:ServiceService){}

  readValue=()=>{
    let data:any={"courseTitle":this.courseTitle}
    console.log(data);
    this.api.searchCourse(data).subscribe(
      (response:any)=>{
        console.log(response);
        if (response.length == 0) {
          alert("invalid course")
          
        } else {
          this.searchData=response;
          
        }
      }
    )
  }

}
