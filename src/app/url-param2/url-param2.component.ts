import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-url-param2',
  templateUrl: './url-param2.component.html',
  styleUrls: ['./url-param2.component.css']
})
export class UrlParam2Component implements OnInit {

  private detailId:number;
  private queryInfo : any;
  
  constructor(private dInfo: ActivatedRoute) { }

  ngOnInit() {
    this.detailId = this.dInfo.snapshot.params["id"];
    this.queryInfo = this.dInfo.snapshot.params;
  }

}
