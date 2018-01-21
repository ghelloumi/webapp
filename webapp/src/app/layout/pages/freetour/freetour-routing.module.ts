import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FreetourComponent} from "./freetour.component";

const routes: Routes = [
    {
        path: '', component: FreetourComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FreetourRoutingModule {
}
