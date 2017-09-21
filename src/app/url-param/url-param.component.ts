import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-url-param',
  templateUrl: './url-param.component.html',
  styleUrls: ['./url-param.component.css']
})
export class UrlParamComponent implements OnInit {

  private detailId:number;
  private queryInfo : any;
  
  constructor(private dInfo: ActivatedRoute) { }

  ngOnInit() {
    this.detailId = this.dInfo.snapshot.params["id"];
    this.queryInfo = this.dInfo.snapshot.params;
  }

}
