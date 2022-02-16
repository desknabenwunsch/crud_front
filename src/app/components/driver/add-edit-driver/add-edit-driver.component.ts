import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DriverApiService } from 'src/app/services/driver-api.service';

@Component({
  selector: 'app-add-edit-driver',
  templateUrl: './add-edit-driver.component.html',
  styleUrls: ['./add-edit-driver.component.css']
})
export class AddEditDriverComponent implements OnInit {

  driverList$!: Observable<any[]>;
  categoryList$!: Observable<any[]>;

  constructor(private service: DriverApiService) { }

  
  @Input() driver: any;
  id: number = 0;
  name: string =  "";
  country: string = "";
  team: string = "";
  number: number = 0;
  categoryId!: number;
  
  ngOnInit(): void {
    this.id = this.driver.id;
    this.name = this.driver.name;
    this.country = this.driver.country;
    this.team = this.driver.team;
    this.number = this.driver.number;
    this.categoryId = this.categoryId;
    this.driverList$ = this.service.getDriversList();
    this.categoryList$ = this.service.getCategoriesList();
  }

  addDriver(){
    let driver = {
      name:this.name,
      country:this.country,
      team:this.team,
      number:this.number,
      categoryId:this.categoryId
    }
    this.service.addDriver(driver).subscribe(res => {
      let closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      let showAddSuccess = document.getElementById('add-success-alert');
      if(showAddSuccess) {
        showAddSuccess.style.display = "block";
      }
      setTimeout(() => {
        if(showAddSuccess) {
          showAddSuccess.style.display = "none";
        }
      }, 3000);
    })
  }

  updateDriver(){

  }
}
