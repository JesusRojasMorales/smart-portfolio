import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { LayoutComponent } from "./layout/layout.component";
import { ProjectPreviewComponent } from "./project/project-preview.component";
import { AppRoutingModule } from "../app-routing.module";
import { CommonModule } from "@angular/common";
import { AboutItemComponent  } from "./about-item/about-item.component";
import { LoaderComponent } from "./loader/loader.component";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent, 
        LayoutComponent, 
        ProjectPreviewComponent, 
        AboutItemComponent ,
        LoaderComponent,
    ],
    imports: [ 
        AppRoutingModule, 
        CommonModule 
    ],
    exports: [ 
        LayoutComponent,
        ProjectPreviewComponent, 
        AboutItemComponent ,
        LoaderComponent,
    ],
})
export class ComponentsModule {}
