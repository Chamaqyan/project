import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RegistorClassModale } from './modal/registor-class/registor-class.component';

@Component({
    selector: 'app-home',
    templateUrl: 'home.view.html',
    styleUrls: ['home.view.scss']
})

export class HomeView implements OnInit, OnDestroy {
    public searchForm:FormGroup;
    public donatForm:FormGroup;

    constructor(
        private _fb:FormBuilder,
        private _dialog: MatDialog
        ) { }

    ngOnInit() {
        this._formBuilder();
     }

    private _formBuilder():void {
        this.searchForm = this._fb.group({
            className:[null,Validators.required],
            catigory:[null,Validators.required],
        })
        this.donatForm = this._fb.group({
            email:[null,Validators.required]
        })
    }

    public onClickOpenRegistorModal():void {
        const dialogRef = this._dialog.open(RegistorClassModale, {
            width: '400px',
            height: '450px',
        })
    }

    ngOnDestroy() { }
}