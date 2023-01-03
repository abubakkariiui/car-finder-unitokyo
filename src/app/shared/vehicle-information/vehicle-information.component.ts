import { Component, Input, OnInit } from '@angular/core';
import { CatalogService } from 'src/app/services';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-vehicle-information',
  templateUrl: './vehicle-information.component.html',
  styleUrls: ['./vehicle-information.component.scss'],
})
export class VehicleInformationComponent implements OnInit {
  @Input() vSKU = '';

  selectedVehicle: any = {};
  admin_base_url = environment.admin_base_url;
  loading: any = false;

  constructor(private _catalogService: CatalogService) {}
  splitImages(item) {
    let images = [];
    if (item.Images) {
      images = item.Images.split(',').map(
        (i) => this.admin_base_url + '/Pictures/VehicleImages/' + i
      );
      return images;
    }
    return [
      this.admin_base_url + '/Content/Images/Products/no-image-found.jpg',
    ];
  }
  config = {
    initialSlide: 0,
    slidesPerView: 1,
    pagination: true,
    navigation: true,
  };

  ngOnInit(): void {
    this.loading = true;
    this._catalogService.getCatalogDetails(this.vSKU).subscribe((data) => {
      this.selectedVehicle = data;
      this.loading = false;
    });
  }
}
