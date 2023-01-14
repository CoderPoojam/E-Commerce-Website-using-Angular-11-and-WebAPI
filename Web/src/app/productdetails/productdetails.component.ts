import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClothService } from '../cloth.service';


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
cid:number;
product:any
  constructor(ar:ActivatedRoute,private cs:ClothService) {
    this.cid=ar.snapshot.params.id;
    cs.getClothsID(this.cid).subscribe(p=>this.product=p)
   }

  ngOnInit(): void {
  }

}
