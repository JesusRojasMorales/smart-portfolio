import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { About } from './pages/about/about.component';
import { Projects } from './pages/projects/projects.component';
import { Contact } from './pages/contact/contact.component';
import { Inspiration } from './pages/inspiration/inspiration.component';
import { PageToggle } from './guards/PageToggle.guard';

const routes: Routes = [
    {
        path: '',
        component: Projects,
        canActivate: [PageToggle],
    },
    {
        path: 'about',
        component: About,
        canActivate: [PageToggle]
    },
    {
        path: 'contact',
        component: Contact,
        canActivate: [PageToggle]
    },
    {
        path: 'inspiration',
        component: Inspiration,
        canActivate: [PageToggle]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes,
        {
            useHash: true,
        }
    )],
    exports: [RouterModule]
})
export class AppRoutingModule { }
