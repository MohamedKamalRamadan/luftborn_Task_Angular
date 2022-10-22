import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ICustomer } from 'src/app/core/models/customer/ICustomer.interface';
import { IItem } from 'src/app/core/models/Items/IItem.interface';
import { CustService } from 'src/app/core/serviecs/cust.service';
import { InvService } from 'src/app/core/serviecs/inv.service';
import { ItemService } from 'src/app/core/serviecs/item.service';

@Component({
  selector: 'app-create-inv',
  templateUrl: './create-inv.component.html',
  styleUrls: ['./create-inv.component.css']
})
export class CreateInvComponent {

  isEdit: boolean = false;

  inv_Details: any[] = [];

  formdataInvoice: FormGroup = this.fb.group({
    id: [0],
    code: [0, [Validators.required]],
    invoiceDate: ['', [Validators.required]],
    customer_Id: [0, [Validators.required]],
    inv_Details: [this.inv_Details]

  });

  formdata: FormGroup = this.fb.group({
    item_Id: [0],
    item_Name: [''],
    qty: ['', [Validators.required]],
    price: ['', [Validators.required]]

  });

  GetCustomers: ICustomer[] = [];

  GetItems: IItem[] = [];

  GetInvoice: any[] = [];

  constructor(private Invouice: InvService,
    private Customer: CustService,
    private Item: ItemService,
    private fb: FormBuilder,
    private activeroute: ActivatedRoute) {

    Customer.GetAllCustomers().subscribe((data: ICustomer[]) => this.GetCustomers = data);
    Item.GetAllItem().subscribe((data: any) => this.GetItems = data);

    activeroute.queryParams.subscribe((res: any) => {
      if (res.id) {
        this.isEdit = true;
        this.Invouice.GetInvoiceById(res.id).subscribe((data: any) => {
          console.log(data)
          this.formdataInvoice.patchValue({
            id: data[0].id,
            code: data[0].code,
            customer_Id: data[0].customer_Id,
            invoiceDate: data[0].invoiceDate
          });
          this.inv_Details = data[0].inv_Details;
          console.log(this.formdataInvoice.value)
        },
        error=> console.log(error),
        ()=>{
          this.formdataInvoice.get('inv_Details')?.setValue(this.inv_Details);
        }
        
        );
      }else{
            this.getMaxCode();
      }
    })

  }

  getMaxCode() {
    this.Invouice.GetInvoiceMaxCode().subscribe(data => this.formdataInvoice.patchValue({ code: data }));
  }

  addItem() {
    if (this.formdata.valid) {
      this.inv_Details.push(
        {
          Item_Id: this.formdata.get('item_Id')?.value,
          item_Name: this.GetItems.find(x => x.id == this.formdata.get('item_Id')?.value)?.item_Name,
          qty: this.formdata.get('qty')?.value,
          price: this.formdata.get('price')?.value
        });
      this.formdata.get('qty')?.setValue('');
      this.formdata.get('price')?.setValue('');
    }
  }

  editItem(item: any, index: number) {
    this.formdata.patchValue(item);
    this.inv_Details.splice(index, 1);
  }

  deleteItem(index: number) {
    this.inv_Details.splice(index, 1)
  }

  CreateInvoice() {
    debugger
    console.log(this.isEdit);
    console.log(this.inv_Details);
    console.log(this.formdataInvoice.value);
    if (this.isEdit) {
      this.Invouice.UpdateInvoice(this.formdataInvoice.value).subscribe(res => {
        // this.formdataInvoice.patchValue({ code: 0, invoiceDate: '', customer_Id: null });
        console.log(res)
      },
      error =>console.log(error)
      );
      this.clearform();
      this.getMaxCode();
      this.isEdit=false;
    } else {
      this.Invouice.CreateInvoice(this.formdataInvoice.value).subscribe(res => {
        // this.formdataInvoice.patchValue({ code: 0, invoiceDate: '', customer_Id: null });
        console.log(res)
      });
      this.clearform();
      this.getMaxCode();

    }


  }

  clearform(){
    this.formdataInvoice.reset();
    this.inv_Details =[];
  }

  GetInv(event: any) {

    event.stopPropagation();
    let Val = event.target.value;

    if (Val > 0) {
      {
        this.Invouice.GetInvoicebyCode(Val).subscribe(data => this.GetInvoice.push(data));
        console.log(this.GetInvoice);
        this.GetInvoice.forEach(function (item, index) {

          var x = item;
          console.log(x);
        });


      }



    }
  }

}
