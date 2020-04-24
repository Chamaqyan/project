import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'top-bar',
    templateUrl: 'top-bar.component.html',
    styleUrls: ['top-bar.component.scss']
})


export class TopBarComponent implements OnInit {
      public show:boolean =false;

      ngOnInit(){
           
      }
      public showMenu(){
          this.show =!this.show
          console.log(this.show)
      }

}