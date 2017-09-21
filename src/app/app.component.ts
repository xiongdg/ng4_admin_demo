import { Component } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router){

  }

  //传递简单参数
  linkToComponent(){
      this.router.navigate(['/linkTo', 3]);
  }
  //传递复杂参数
  linkToComponent2(){
      this.router.navigate(['/linkToObj', {id: 4, name:"xgq"}]);
  }
}
