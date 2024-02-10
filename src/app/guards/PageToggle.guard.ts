import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map } from 'rxjs/operators';
import { DataService } from '../services/data.service';
import { pageToggle } from '../models/pageToggle';
import { Observable } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class PageToggle implements CanActivate {

    constructor(private dataService: DataService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
    {
        return this.IsPageEnabled(state.url);
    }

    private IsPageEnabled(url: string): Observable<boolean> {
        return this.dataService.getAssetData("page-toggle.json").pipe(
            map(data => {
                const pages = data as pageToggle[];
                const page = pages.find(page => page.url === url);
                return page ? page.visible : false;
            })
        );
    }

}
