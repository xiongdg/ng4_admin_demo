import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  private detailId: number;
  private queryInfo: any;
  private staticData: any;
  private focus: boolean = false;

  constructor(private activatedRoute: ActivatedRoute) { }

  //统一组件之间跳转时，此方法不会调用，因此页面数据不会更新，解决方法是用订阅方式来接收数据
  ngOnInit() {
    //方案1：如果不会出现统一组件之间跳转，启用这种方式来处理数据，性能高
    /* this.detailId = this.dInfo.snapshot.queryParams["id"];
    this.queryInfo = this.dInfo.snapshot.queryParams; */

    //方案2：订阅  params 每次改变都会执行传入的function
    this.activatedRoute.queryParams.subscribe((params:Params) => {
      this.detailId = params["id"];
      this.queryInfo = params;
    });
     
    //相同组件之间跳转  只初始化一次
    this.staticData = this.activatedRoute.snapshot.data[0];

  }

  isFocus() {
    return this.focus;
  }

}

export class Detail {
  id:number;
  name:string;
  constructor(id:number, name:string){
    this.id = id;
    this.name = name;
  }


}
