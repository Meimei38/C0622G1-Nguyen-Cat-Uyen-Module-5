import { Component, OnInit } from '@angular/core';
import {FacilityService} from "../../service/facility.service";
import Swal from "sweetalert2";
import {Facility} from "../../model/facility";

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {

  facilityNameSearch = '';

  facilityListPaging: Facility[];
  numberRecord = 3;
  curPage = 1;
  totalPage: number;

  facilityNameDelete: string;
  facilityImageDelete: string;
  facilityIdDelete: number;

  constructor(private facilityService: FacilityService) {
  }

  ngOnInit(): void {
    this.facilityService.findAllFacilitySearch(this.facilityNameSearch)
      .subscribe(list => {
        this.totalPage = Math.ceil(list.length / this.numberRecord);
      }, error => {
        console.log(error);
      }, () => {
        console.log('OK!');
      });

    this.facilityService.findFacilitySearchPaging(this.numberRecord, this.curPage,
      this.facilityNameSearch).subscribe(pagingList => {
      this.facilityListPaging = pagingList;
    }, error => {
      console.log(error);
    }, () => {
      console.log('Hiển thị dịch vụ ở trang ' + this.curPage);
    });
  }

  next(): void {
    this.curPage++;
    this.ngOnInit();
  }

  previos(): void {
    this.curPage--;
    this.ngOnInit();
  }

  getInfoFacilityDelete(facilityImage: string, facilityName: string, facilityId: number): void {
    this.facilityImageDelete = facilityImage;
    this.facilityNameDelete = facilityName;
    this.facilityIdDelete = facilityId;
  }

  deleteFacility(): void {
    this.curPage = 1;
    this.facilityService.deleteFacility(this.facilityIdDelete).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'Successful deleted!',
        text: 'Facility: ' + this.facilityNameDelete,
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff',
        backdrop: `
        rgba(0,0,123,0.4)
        url("'https://fra1.digitaloceanspaces.com/fairlands-school-assets/system/assets/uploads/000/000/371/original/welcome.jpg?1585859530")
        left top
        no-repeat
      `
      });
      this.ngOnInit();
    }, error => {
      console.log(error);
    }, () => {
      console.log('Xóa dịch vụ thành công!');
    });
  }

  searchName(): void {
    this.curPage = 1;
    this.ngOnInit();
  }

}
