import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryView } from './gallery.view';
import { GalleryItemComponent } from 'src/app/components/gallery-item/gallery-item.component';
@NgModule({
    declarations:[
        GalleryView,
        GalleryItemComponent
    ],
    imports:[
        CommonModule,
        GalleryRoutingModule,
    ],
    exports:[

    ],
    providers:[]
})

export class GalleryModule{}