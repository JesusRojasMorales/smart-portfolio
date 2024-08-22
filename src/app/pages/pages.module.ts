import { ProjectsPage } from './projects/projects.page';
import { AboutPage } from './about/about.page';
import { ContactPage } from './contact/contact.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        //PortfolioPage, 
        ProjectsPage, 
        AboutPage, 
        ContactPage
    ],
    imports: [ 
        CommonModule, 
        ComponentsModule, 
        ReactiveFormsModule, 
        RouterModule 
    ]
})

export class PagesModule {}
