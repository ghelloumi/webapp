import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FreetourRoutingModule} from "./freetour-routing.module";
import {FreetourComponent} from "./freetour.component";

@NgModule({
    imports: [
      CommonModule,
      FreetourRoutingModule,
    ],
    declarations: [FreetourComponent]
})
export class FreetourModule {}
