import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClothService {
// apiurl='http://localhost:56936/api/BuyCloth/';
// apiurl='http://localhost:27172/api/BuyCloth/';
apiurl = 'http://www.webapiprojectp0.com:82/api/BuyCloth/';
  constructor(private http:HttpClient) { }

  getCloths()
  {
    return this.http.get(this.apiurl);
  }

  getClothsID(id:number)
  {
    return this.http.get(this.apiurl +id);
  }

  saveProduct(product:any){
    return this.http.post(this.apiurl,product);
  }

  updateProduct(id:number,product:any)
  {
    return this.http.put(this.apiurl+id,product);
  }

  deleteProduct(id:number)
  {
    return this.http.delete(this.apiurl+id);
  }
}
