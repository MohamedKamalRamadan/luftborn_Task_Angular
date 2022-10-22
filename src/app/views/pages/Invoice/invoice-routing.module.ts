import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateInvComponent } from "./create-inv/create-inv.component";
import { InvoiceComponent } from "./invoice/invoice.component";

const routes: Routes = [
    { path: 'invlist', component: InvoiceComponent },
    { path: 'createinv', component: CreateInvComponent },
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
})
export class InvoicesRountingModule { }