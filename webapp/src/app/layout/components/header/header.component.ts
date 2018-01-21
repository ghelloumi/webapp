import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  profilepicture:string = "../../../../assets/img/profile.png";
  loginname:string="Name";

  constructor() { }

  ngOnInit() {
  }

  onKey(event: any) { // without type info
    // if(this.myArray.indexOf(event.target.value)>-1 ){
    //     this.loginname= this.myArray[this.myArray.indexOf(event.target.value)].toString();
    // }
  }

}
