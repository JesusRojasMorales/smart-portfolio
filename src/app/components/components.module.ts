import { NgModule } from "@angular/core";
import { Header } from "./common/header/header.component";
import { Layout } from "./common/layout/layout.component";
import { ProjectPreview } from "./project/project-preview.component";
import { AppRoutingModule } from "../app-routing.module";
import { CommonModule } from "@angular/common";
import { AboutItem } from "./about-item/about-item.component";
import { LoaderComponent } from "./common/loader/loader.component";
import { Footer } from "./common/footer/footer.component";
import { ButtonComponent } from "./common/button/button.component";

// export all components as a module

@NgModule({
    declarations: [
        Footer,
        Header, 
        Layout, 
        ProjectPreview, 
        AboutItem,
        LoaderComponent,
        ButtonComponent
    ],
    imports: [ AppRoutingModule, CommonModule ],
    exports: [ 
        Layout,
        ProjectPreview, 
        AboutItem,
        LoaderComponent,
        ButtonComponent
    ],
})
export class ComponentsModule {}
