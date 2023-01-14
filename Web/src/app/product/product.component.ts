import { Component, OnInit } from '@angular/core';
import { ClothService } from '../cloth.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
cloths:any;
  constructor( private cs:ClothService) { 
   cs.getCloths().subscribe(p=>this.cloths=p);
  }

  ngOnInit(): void {
  }

}
