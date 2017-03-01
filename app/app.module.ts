import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {InputTextModule, ButtonModule, MenubarModule} from 'primeng/primeng';
import {routing} from './app.routes';

@NgModule({

    imports: [BrowserModule,
        InputTextModule,
        ButtonModule,
        FormsModule,
        routing,
        MenubarModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule {}