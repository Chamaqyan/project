import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { GalleryView } from './gallery.view';

const galleryRoutes:Routes = [
    { path: '' ,component:GalleryView}
]

@NgModule({
    imports:[RouterModule.forChild(galleryRoutes)],
    exports:[RouterModule]
})

export class GalleryRoutingModule {}