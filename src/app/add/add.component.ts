import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  courseTitle=""
  description=""
  venue=""
  duration=""
  date=""

  constructor(private api:ServiceService){}

  readValue=()=>
  {
    let data:any={"courseTitle":this.courseTitle,"description":this.description,"venue":this.venue,"duration":this.duration,"date":this.date}
    console.log(data)
    this.api.addCourse(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.status=="success"){
          alert("course added successfully")
          this.courseTitle=""
          this.description=""
          this.venue=""
          this.duration=""
          this.date=""
        }
        else{
          alert("something went wrong")
        }
      }
    )
  }

}
