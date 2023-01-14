import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClothService } from '../cloth.service';

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent implements OnInit {

  id:number ;
  cloth:any;
  constructor(ar:ActivatedRoute,private es:ClothService) { 
    this.id=ar.snapshot.params.id;
    es.getClothsID(this.id).subscribe(e=>this.cloth=e)
  }

  ngOnInit(): void {
  }
  
  onDelete(){
    this.es.deleteProduct(this.id).subscribe(e=>alert('Deleted'));
  }
}
