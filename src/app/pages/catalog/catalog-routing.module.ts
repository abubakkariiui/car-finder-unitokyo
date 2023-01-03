import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component Pages
import { ListComponent } from './list/list.component';
import { GridComponent } from './grid/grid.component';
import { SingleComponent } from './single/single.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'grid',
    component: GridComponent,
  },
  {
    path: 'single',
    component: SingleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogRoutingModule {}
