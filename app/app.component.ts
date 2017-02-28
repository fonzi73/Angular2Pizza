import {Component} from '@angular/core';

@Component({

    selector: 'pizzaconnection',
    templateUrl: 'app/app.html',
    styleUrls: []
    
})

export class AppComponent {

    private text: string = 'Hallo';
    private showInput: boolean = true;
    
    toggleInput() {
        this.showInput = !this.showInput;
    }    
}
