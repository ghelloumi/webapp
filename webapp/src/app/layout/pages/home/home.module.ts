import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from "./home-routing.module";
import {CarouselModule} from "angular-bootstrap-md/carousel/carousel.module";

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
