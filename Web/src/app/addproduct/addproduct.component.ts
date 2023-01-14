import { Component, OnInit } from '@angular/core';
import { ClothService } from '../cloth.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  products:any;
  constructor(private cs:ClothService) { 
    cs.getCloths().subscribe(p=>this.products=p);
  }

  ngOnInit(): void {
  }

  onSubmit(data:any)
  {
    this.cs.saveProduct(data).subscribe(p=> alert("New Product Added Successfully"));
  }

}
