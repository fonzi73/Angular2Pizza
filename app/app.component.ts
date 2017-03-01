import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/primeng';

@Component({

    selector: 'pizzaconnection',
    templateUrl: 'app/app.html',
    styleUrls: ['app/css/styles.css']

})

export class AppComponent implements OnInit {

    private items: MenuItem[];

    ngOnInit() {
        this.items = [
            {label: 'Home', icon: '', routerLink: ['']},
            {label: 'Speisekarte', icon: 'fa fa-cutlery', routerLink: ['pizzalist']}
        ]
    }
}
