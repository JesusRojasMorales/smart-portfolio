import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPage } from './pages/about/about.page';
import { ProjectsPage } from './pages/projects/projects.page';
import { ContactPage } from './pages/contact/contact.page';
import { PageToggle } from './guards/page-toggle.guard';
import { PortfolioPage } from './pages/portfolio/portfolio.page';

const routes: Routes = [
    {
        path: '',
        component: PortfolioPage,
        canActivate: [PageToggle],
    },
    {
        path: 'projects',
        component: ProjectsPage,
        canActivate: [PageToggle],
    },
    {
        path: 'about',
        component: AboutPage,
        canActivate: [PageToggle]
    },
    {
        path: 'contact',
        component: ContactPage,
        canActivate: [PageToggle]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
            useHash: true,
            initialNavigation: 'enabledBlocking',
            relativeLinkResolution: 'legacy'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export { routes };
