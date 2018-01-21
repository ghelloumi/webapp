import { Component } from '@angular/core';
import {trigger, transition, style, animate} from "@angular/animations";
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public myInterval: number = 2000;
  public activeSlideIndex: number = 0;
  public noWrapSlides:boolean = false;
  public slides:Array<Object> = [
    {"image":"../../../assets/img/slider1.jpg"},
    {"image":"../../../assets/img/slider2.jpg"},
    {"image":"../../../assets/img/slider3.jpg"},
  ];

  activeSlideChange(){
    console.log(this.activeSlideIndex);
  }





}
