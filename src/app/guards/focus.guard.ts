
import { CanDeactivate } from "@angular/router";
import { DetailComponent } from "../detail/detail.component";

export class FocusGuard implements CanDeactivate<DetailComponent>{
    canDeactivate(component: DetailComponent){
        console.log(component.isFocus());
        return component.isFocus() ? component.isFocus() : window.confirm("您还没点关注呢，就要列我而去吗？");
    }
}