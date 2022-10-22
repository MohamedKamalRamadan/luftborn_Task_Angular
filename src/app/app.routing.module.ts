import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HeaderComponent } from "./views/layout/components/header/header.component";

const routes: Routes = [
    {
        path: '',loadChildren: () =>import('../app/views/layout/layout.module').then((m) => m.LayoutModule),
      },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            scrollPositionRestoration: 'top',
            useHash: false,
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule { }