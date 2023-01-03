/**
 * List
 */
export interface List {
  id: string;
  verified_btn: string;
  btn?: string;
  btn_color?: string;
  image?: Array<{
    img?: string;
  }>;
  year?: string;
  title?: string;
  price?: string;
  country?: string;
  mileage?: string;
  eng?: string;
  fuel?: string;
}
