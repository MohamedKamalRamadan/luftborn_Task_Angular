import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MenuSideComponent } from './components/menu-side/menu-side.component';
import { ContentComponent } from './components/content/content.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
    { path: '', component: ContentComponent,children:[
        {path:'home',loadChildren: () =>import('../pages/general/general.module').then((m) => m.GeneralModule)},
        {path:'invoice',loadChildren: () =>import('../pages/Invoice/Invoice.module').then((m) => m.InvoiceModule)},
        {path:'',redirectTo:'/home',pathMatch:'full'},
        {path:'**',redirectTo:'/home'}
    ] }
]

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        HeaderComponent,
        MenuSideComponent,
        ContentComponent
    ]
})
export class LayoutModule { }
