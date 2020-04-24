import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'registor-class',
    templateUrl: 'registor-class.component.html',
    styleUrls: ['registor-class.component.scss']
})

export class RegistorClassModale implements OnInit, OnDestroy {
    public registorForm: FormGroup;

    constructor(private _fb: FormBuilder) { }

    ngOnInit() {
        this._formBuilder();
    }

    private _formBuilder(): void {
        this.registorForm = this._fb.group({
            name: [null, Validators.required],
            surname: [null, Validators.required],
            age: [null, Validators.required],
            phoneNumber:[null,Validators.required],
            email:[null,Validators.required],
            classname: [null, Validators.required]
        })
    }
    ngOnDestroy() { }
}