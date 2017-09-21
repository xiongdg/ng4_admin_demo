import { CanActivate } from "@angular/router";


/* 权限拦截 */
/* 可以在路由跳转前进行权限校验 */
export class PermissionGuard implements CanActivate {
    canActivate(){
        var hasPermission:boolean = Math.random() < 0.5;
        if(!hasPermission){
            console.log("无权限访问");
        }
        return hasPermission;
    }
}