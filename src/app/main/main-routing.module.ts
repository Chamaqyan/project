import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { MainView } from './main.view';

const mainRoutes: Routes = [
    {
        path: '', component: MainView,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadChildren: () => import('./home/home.module').then((h) => h.HomeModule) },
            { path: 'volunteer', loadChildren: () => import('./volunteer/volunteer.module').then((v) => v.VolunteerModule) },
            { path: 'gallery', loadChildren: () => import('./gallery/gallery.module').then(g => g.GalleryModule) }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(mainRoutes)],
    exports: [RouterModule]
})

export class MainRoutingModule { }