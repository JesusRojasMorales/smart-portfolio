import { Projects } from './projects/projects.component';
import { About } from './about/about.component';
import { Contact } from './contact/contact.component';
import { Inspiration } from './inspiration/inspiration.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [Projects, About, Contact, Inspiration],
    imports: [ CommonModule, ComponentsModule, ReactiveFormsModule, RouterModule ],
})
export class PagesModule {}
