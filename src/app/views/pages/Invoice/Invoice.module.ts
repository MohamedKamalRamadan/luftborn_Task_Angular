import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicesRountingModule } from './invoice-routing.module';
import { CreateInvComponent } from './create-inv/create-inv.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    InvoicesRountingModule,
    ReactiveFormsModule
  ],
  declarations: [
    InvoiceComponent,
    CreateInvComponent,
    

  ]
})
export class InvoiceModule { }
