import { NgModule } from "@angular/core";
import { HomeView } from './home.view';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SliderComponent } from 'src/app/components/slider/slider.component';
import { OurServicesItem } from 'src/app/components';
import { OurActiveItem } from 'src/app/components/ouractive-item/ouractive-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatDialogModule} from '@angular/material/dialog';
import { RegistorClassModale } from './modal/registor-class/registor-class.component';
import { EventComponent } from 'src/app/components/event/event.component';

@NgModule({
    declarations:[
        HomeView,
        SliderComponent,
        OurServicesItem,
        OurActiveItem,
        EventComponent,
        RegistorClassModale
    ],
    imports:[
        CommonModule,
        HomeRoutingModule,
        SlickCarouselModule,
        ReactiveFormsModule,
        SharedModule,
        MatDialogModule
    ],
    exports:[],
    entryComponents:[
        RegistorClassModale
    ],
    providers:[]
})

export class HomeModule {}