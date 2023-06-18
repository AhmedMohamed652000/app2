import { Component } from '@angular/core';
import { Form, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { WiddingService } from './../widding.service';


@Component({
  selector: 'app-hell',
  templateUrl: './hell.component.html',
  styleUrls: ['./hell.component.css']
})
export class HellComponent {
  myForm:any
  fb:any
  file:any

  constructor( private WiddingService: WiddingService, private _fb:FormBuilder) {
   
    
    this.myForm=this._fb.group({
      Name:['',Validators.required],
      Style:['',Validators.required],
      TotalHellSpace:['',Validators.required],
      NumberofTables:['',Validators.required],
      UploadPhoto:['',Validators.required],
      Price:['',Validators.required],
      
    })
}

onSubmit()
{
  const formData=new FormData()
  formData.append('UploadPhoto',this.myForm.get('UploadPhoto').value)
  formData.append('Name',this.myForm.get('Name').value)
  formData.append('Style',this.myForm.get('Style').value)
  formData.append('TotalHellSpace',this.myForm.get('TotalHellSpace').value)
  formData.append('NumberofTables',this.myForm.get('NumberofTables').value)
  formData.append('Price',this.myForm.get('Price').value)
  this.WiddingService.addDetils(formData).subscribe({
    next:(res)=>{
      if(res.message=='success')
      {
        console.log('succes')
      }
      else
      {
        console.log('no'+JSON.stringify(res) )
      }
    }
  })

}
onFileSelect(event:any) {  
   const file=event.target.files[0]  
    this.myForm.get('UploadPhoto')?.setValue(file) 
  }
ngOnInit(): void {}



}



