import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CompareCatalogService {
  @Output() compareItemsChange = new EventEmitter<string>();

  constructor() {}

  compareCatalog = [];

  addToCompareCatalog(addedItem) {
    if (this.compareCatalog.length >= 4) return;
    this.compareCatalog.push(addedItem);
    this.saveCompareCatalog(true);
  }

  getCompareCatalog() {
    return this.compareCatalog;
  }

  loadCompareCatalog(): void {
    this.compareCatalog =
      JSON.parse(localStorage.getItem('CompareCatalog')) ?? [];
  }

  saveCompareCatalog(ToggleDialog): void {
    localStorage.setItem('CompareCatalog', JSON.stringify(this.compareCatalog));
    if (ToggleDialog) this.compareItemsChange.emit('');
  }

  clearCompareCatalog() {
    this.compareCatalog = [];

    localStorage.removeItem('CompareCatalog');
  }

  removeItem(VehicleSku) {
    const index = this.compareCatalog.findIndex(
      (o) => o.VehicleSku === VehicleSku
    );

    if (index > -1) {
      this.compareCatalog.splice(index, 1);
      this.saveCompareCatalog(false);
    }
  }

  itemInCompareCatalog(item): boolean {
    return (
      this.compareCatalog.findIndex((o) => o.VehicleSku === item.VehicleSku) >
      -1
    );
  }
}
