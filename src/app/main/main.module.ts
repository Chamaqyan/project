import { NgModule } from "@angular/core";
import { MainView } from './main.view';
import { MainRoutingModule } from './main-routing.module';
import { FooterComponent } from '../layouts/footer/footer.component';
import { TopBarComponent } from '../layouts/top-bar/top-bar.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[
        MainView,
        FooterComponent,
        TopBarComponent
    ],
    imports:[
        CommonModule,
        MainRoutingModule
    ],
    exports:[],
    providers:[],
})

export class MainModule {}