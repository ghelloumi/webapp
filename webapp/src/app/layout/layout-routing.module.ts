import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'home' },
            { path: 'home', loadChildren: './pages/home/home.module#HomeModule' },
            { path: 'freetour', loadChildren: './pages/freetour/freetour.module#FreetourModule' },
            { path: 'aboutus', loadChildren: './pages/aboutus/aboutus.module#AboutusModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
