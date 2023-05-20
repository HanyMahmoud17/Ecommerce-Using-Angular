import { Component } from '@angular/core';
import { StoreData } from 'src/app/ViewModels/store-data';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isImage: boolean = true;
  storeInfo:StoreData;
  constructor(){
    this.storeInfo = new StoreData('store','https://picsum.photos/300/300',['cairo','alex','aswan']);
  }

  showHideImg(){
    this.isImage =!this.isImage;
  }
}
