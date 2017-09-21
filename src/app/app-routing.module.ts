import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { OtherComponent } from "./other/other.component";
import { ErrorComponent } from "./error/error.component";
import { DetailComponent } from "./detail/detail.component";
import { UrlParamComponent } from "./url-param/url-param.component";
import { UrlParam2Component } from "./url-param2/url-param2.component";
import { LinkToComponent } from "./link-to/link-to.component";
import { CustomerComponent } from "./customer/customer.component";
import { SalesComponent } from "./sales/sales.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { Toolbar1Component } from "./toolbar1/toolbar1.component";
import { PermissionGuard } from "./guards/permission.guard";
import { FocusGuard } from "./guards/focus.guard";

const routes: Routes = [

  {//重定向路由
    path: '',
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: 'home',
    component: HomeComponent,
    children: []
  },
  //辅助路由
  {
    path: 'toolbar',
    component: ToolbarComponent,
    outlet:"toolbar"
  },
  {
    path: 'toolbar1',
    component: Toolbar1Component,
    outlet:"toolbar"
  },
  {
    path: 'other',
    component: OtherComponent,
    children: []
  },
  {
    path: 'detail',
    component: DetailComponent,
    data: [{ home: "xj" }],//路由传递的静态参数
    children: [

    ],
    //路由守卫
    canActivate:[PermissionGuard],//路由拦截器列表，只要有一个返回false,则路由不能进入
    canDeactivate: [FocusGuard]//路由拦截器列表，只要有一个返回false,则路由不能离开
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
    data: [{ home: "xj" }],//路由传递的静态参数
    children: [//嵌套路由
      {
        path: '',
        component: CustomerComponent
      },
      {
        path: 'customer',
        component: CustomerComponent
      },
      {
        path: 'sales',
        component: SalesComponent
      }
    ],
    canDeactivate: [FocusGuard]
  },
  {
    path: 'urlParam',
    component: UrlParamComponent,
    children: []
  },
  {
    path: 'urlParam2/:id',
    component: UrlParam2Component,
    children: []
  },
  {
    path: 'linkTo/:id',
    component: LinkToComponent,
    children: []
  },
  {
    path: 'linkToObj',
    component: LinkToComponent,
    children: []
  },
  {
    path: '**',
    component: ErrorComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
