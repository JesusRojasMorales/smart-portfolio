import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';

@NgModule({ 
    declarations: [
        AppComponent,
    ],
    bootstrap: [
        AppComponent
    ], 
    imports: [
        ComponentsModule,
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        PagesModule
    ], 
    providers: [
        provideHttpClient(withInterceptorsFromDi())
    ] 
})
export class AppModule { }
