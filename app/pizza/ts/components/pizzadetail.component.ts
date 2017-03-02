import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {PizzaDetail} from '../models/pizzadetail.model';
import {PizzaDetailService} from '../services/pizzadetail.service';

@Component({
    selector: 'pizzadetail',
    templateUrl: 'app/pizza/templates/pizzadetail.html',
    styleUrls: ['app/css/styles.css']
})

export class PizzaDetailComponent {

    private _pizzaDetail: PizzaDetail;

    constructor(
        private _pizzaDetailService: PizzaDetailService,
        private _route: ActivatedRoute,
        private _location: Location
    ) {
        let id = this._route.snapshot.params['id'];
        this._pizzaDetailService.getPizzaDetail(id).subscribe(pizzaDetail => {
            this._pizzaDetail = pizzaDetail;
        },
            err => console.error(err),
            () => console.log('done: ' + this._pizzaDetail.image));
    }
    addToCart(pizzaDetail: PizzaDetail) {
        console.log('Eine Pizza wurde ' + ' in den Warenkorb elegt: ' + pizzaDetail.name);
    }
    historyBack() {
        this._location.back();
    }
    get pizzaDetail(): PizzaDetail {
        return this._pizzaDetail;
    }
}