import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import {HeaderComponent} from "./components/header/header.component";
import { LoginComponent } from './components/login/login.component';
import { SingninComponent } from './components/singnin/singnin.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {ModalModule} from "angular-bootstrap-md/modals/modal.module";

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        NgbModule.forRoot(),
        MDBBootstrapModule.forRoot(),
        ModalModule
    ],
    schemas: [ NO_ERRORS_SCHEMA ],
    declarations: [LayoutComponent, HeaderComponent, LoginComponent, SingninComponent]
})
export class LayoutModule {}
