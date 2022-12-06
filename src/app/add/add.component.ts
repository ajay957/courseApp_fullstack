import { Component } from '@angular/core';

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

  readValue=()=>
  {
    let data:any={"courseTitle":this.courseTitle,"description":this.description,"venue":this.venue,"duration":this.duration,"date":this.date}
    console.log(data)
  }

}
