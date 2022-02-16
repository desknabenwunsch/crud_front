import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DriverApiService }from '../../../services/driver-api.service';

@Component({
  selector: 'app-show-driver',
  templateUrl: './show-driver.component.html',
  styleUrls: ['./show-driver.component.css']
})
export class ShowDriverComponent implements OnInit {

  driverList$!:Observable<any[]>;
  categoryList$!:Observable<any[]>;
  categoryList:any=[];

  // Map to display data associate with foreign keys

  categoriesMap:Map<number, string> = new Map();

  constructor(private service:DriverApiService) { }

  ngOnInit(): void {
    this.driverList$ = this.service.getDriversList();
    this.categoryList$ = this.service.getCategoriesList();
    this.refreshCategoriesMap();
  }

  // properties

  modalTitle:string = '';
  activateAddEditDriverComponent: boolean = false;
  driver:any;

  modalAdd(){
    this.driver = {
      id:0,
      name:null,
      country:null,
      team: null,
      number: 0,
      categoryId: null
    }

    this.modalTitle = "Add Driver";
    this.activateAddEditDriverComponent = true;
  }

  modalClose(){
    this.activateAddEditDriverComponent = false;
    this.driverList$ = this.service.getDriversList();
  }

  refreshCategoriesMap() {
    this.service.getCategoriesList().subscribe(data => {
      this.categoryList = data;
    
      for(let i =0; i <  data.length; i++){
        this.categoriesMap.set(this.categoryList[i].id, 
          this.categoryList[i].categoryName)
      }
    
    })

  }

}
