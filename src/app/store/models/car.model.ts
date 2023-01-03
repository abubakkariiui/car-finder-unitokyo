/**
 * CarModel
 */
export interface CarModel {
  id: string;
  verified_btn: string;
  btn?: string;
  btn_color?: string;
  image?: Array<{
    img?: string;
  }>;
  year?: string;
  compare?: boolean;
  title?: string;
  price?: string;
  country?: string;
  mileage?: string;
  eng?: string;
  fuel?: string;
}

export interface CarModels {
  id: string;
  verified_btn: string;
  btn?: string;
  btn_color?: string;
  image?: Array<{
    img?: string;
  }>;
  year?: string;
  compare?: boolean;
  title?: string;
  price?: string;
  country?: string;
  mileage?: string;
  eng?: string;
  fuel?: string;
}
