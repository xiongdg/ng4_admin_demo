import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot,Resolve,Router } from "@angular/router";
import { Observable } from "rxjs";
import { Detail } from "../detail/detail.component";

@Injectable()//这个class可以注入外部class
export class DetailResolve implements Resolve<Detail>{

    //需要利用构造器来注入Router
    constructor(private router: Router){

    }
    resolve(routeSnapshot : ActivatedRouteSnapshot){
        let id = routeSnapshot.params["id"];
        if(id == 2){
            return new Detail(id, "mobo");
        }else{
            this.router.navigate(["/home"]);
            return undefined;
        }
    }
}