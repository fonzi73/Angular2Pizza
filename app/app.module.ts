import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {InputTextModule, ButtonModule, MenubarModule} from 'primeng/primeng';
import {routing} from './app.routes';
import {HomeComponent} from './home/ts/components/home.component';
import {PizzaListComponent} from './pizza/ts/components/pizzalist.component';

@NgModule({

    imports: [
        BrowserModule,
        InputTextModule,
        ButtonModule,
        FormsModule,
        routing,
        MenubarModule],
    declarations: [
        AppComponent,
        HomeComponent,
        PizzaListComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule {}