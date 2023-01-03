import { ShoppingItem } from './models/shopping-item.model';
import { CarModel } from './models/car.model';

import { latestCatalogModel } from 'src/app/services/catalog/latest-catalog.model';

import { catalogModel } from 'src/app/services/catalog/catalog.model';

import { blogModel } from 'src/app/services/blogs/blog.model';

import { brandModel } from 'src/app/services/brands.model';

import { ShowRoomModel } from 'src/app/services/shorooms.model';

export interface AppState {
  readonly shopping: Array<ShoppingItem>;

  readonly compare: Array<CarModel>;

  readonly catalog: Array<catalogModel>;
  readonly latestCatalog: Array<latestCatalogModel>;

  readonly blogs: Array<blogModel>;
  readonly latestBlogs: Array<blogModel>;

  readonly brands: Array<brandModel>;

  readonly showrooms: Array<ShowRoomModel>;
}
