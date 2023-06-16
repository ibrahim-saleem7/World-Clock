import { Component, OnInit } from '@angular/core';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { ServiceService } from './services/service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  faMoon = faMoon;
  faSun = faSun;
  time : any
  city :string = "Cairo"
  Citytime : string = "cairo"
  error : string = ""
  isDark : boolean = false

  constructor( private service : ServiceService){}

  ngOnInit(): void {
    this.getTime()
  }


  getTime(){
    this.service.getTime(this.city).subscribe((res: any)=>{
      if(res.datetime != undefined){
        this.error= ""
        this.time = res.datetime
      }else{
        this.error = `Sorry Not Find City By Name :  ${this.Citytime} `
      }
    })
  }

  search(){
    this.getTime()
    this.Citytime = this.city
  }

  dark(){
    this.isDark = true
  }
  light(){
    this.isDark = false
  }

  title = 'world-clock';
}
