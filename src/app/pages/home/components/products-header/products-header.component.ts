import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: 'products-header.component.html', 
  
})
export class ProductsHeaderComponent implements OnInit {
  // Output to parent components
  @Output() columnsCountChange = new EventEmitter<number>();
  
  sort = 'desc';
  itemsShowCount = 12;

  constructor() { }

  ngOnInit(): void {
  }

  // sort
  onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }

  // count items
  onItemsUpdated(count: number): void {
    this.itemsShowCount = count;
  }

  // update columns
  onColumnsUpdated(colsNum: number): void {
    this.columnsCountChange.emit(colsNum);
  }

}
