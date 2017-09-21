import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OtherComponent } from './other/other.component';
import { ErrorComponent } from './error/error.component';
import { DetailComponent } from './detail/detail.component';
import { UrlParamComponent } from './url-param/url-param.component';
import { UrlParam2Component } from './url-param2/url-param2.component';
import { LinkToComponent } from './link-to/link-to.component';
import { CustomerComponent } from './customer/customer.component';
import { SalesComponent } from './sales/sales.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { Toolbar1Component } from './toolbar1/toolbar1.component';
import { PermissionGuard } from "./guards/permission.guard";
import { FocusGuard } from "./guards/focus.guard";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OtherComponent,
    ErrorComponent,
    DetailComponent,
    UrlParamComponent,
    UrlParam2Component,
    LinkToComponent,
    CustomerComponent,
    SalesComponent,
    ToolbarComponent,
    Toolbar1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PermissionGuard, FocusGuard],//注入项
  bootstrap: [AppComponent]
})
export class AppModule { }
