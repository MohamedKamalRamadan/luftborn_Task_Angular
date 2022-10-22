import { Component } from '@angular/core';
import { InvService } from 'src/app/core/serviecs/inv.service';

@Component({
    selector: 'app-invoice',
    templateUrl: './invoice.component.html',
    styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {

    Invoices: any;

    constructor(private Invouice: InvService) {
        this.getAllData();
    }

    getAllData() {
        debugger
        this.Invouice.GetAllInvoice().subscribe((data: any) => {
            console.log(data)
            this.Invoices = data
        });

    }

    Delete(InvId: number) {
        if (confirm('Are you sure you want to delete this?')) {
            this.Invouice.DeleteInvoice(InvId).subscribe(res => {
                console.log(res)
            });
            this.getAllData();
        }else{
            return;
        }

    }


}
