import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-link-to',
  templateUrl: './link-to.component.html',
  styleUrls: ['./link-to.component.css']
})
export class LinkToComponent implements OnInit {

  private detailId:number;
  private queryInfo : any;
  
  constructor(private dInfo: ActivatedRoute) { }

  ngOnInit() {
    this.detailId = this.dInfo.snapshot.params["id"];
    this.queryInfo = this.dInfo.snapshot.params;
  }
 
}
