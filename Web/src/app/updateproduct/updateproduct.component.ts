import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClothService } from '../cloth.service';
@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
clothpform:FormGroup;
id:number;
  constructor(ar:ActivatedRoute,private cs:ClothService) { 
    this.id=ar.snapshot.params.id;

    this.clothpform = new FormGroup({
      cId:new FormControl(),
      cName:new FormControl('',[Validators.required,Validators.minLength(4)]),
      cFabric:new FormControl('',[Validators.required,Validators.minLength(4)]),
      cSize:new FormControl('',[Validators.required,Validators.maxLength(4)]),
      cPrice:new FormControl('',Validators.required),
      imageUrl:new FormControl('',Validators.required)
    });
    cs.getClothsID(this.id).subscribe(p=>this.clothpform.setValue(p));
  }

  ngOnInit(): void {
  }

  onUpdate(data:any)
  {
    console.log(data);
    this.cs.updateProduct(this.id,data).subscribe(p=> alert("Product Successfully Updated"));
  }

  get getcontrol(){
    return this.clothpform.controls;
  }

}
