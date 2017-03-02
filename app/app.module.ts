import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule, JsonpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {InputTextModule, ButtonModule, MenubarModule, DataGridModule, PanelModule} from 'primeng/primeng';
import {routing} from './app.routes';
import {PizzaListComponent} from './pizza/ts/components/pizzalist.component';
import {PizzaListService} from './pizza/ts/services/pizzalist.service';
import {PizzaDetailComponent} from './pizza/ts/components/pizzadetail.component';
import {PizzaDetailService} from './pizza/ts/services/pizzadetail.service';

@NgModule({

    imports: [
        BrowserModule,
        InputTextModule,
        ButtonModule,
        FormsModule,
        routing,
        MenubarModule,
        HttpModule,
        JsonpModule,
        DataGridModule,
        PanelModule
        ],
    declarations: [
        AppComponent,
        PizzaListComponent,
        PizzaDetailComponent
    ],
    bootstrap: [AppComponent],
    providers: [
    PizzaListService,
    PizzaDetailService
    ]
})

export class AppModule {}