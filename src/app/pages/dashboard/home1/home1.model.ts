/**
 * popular List
 */
export interface popular {
  image?: string;
  title?: string;
}

/**
 * latest Car List
 */
export interface latestCar {
  id: string;
  verified_btn: string;
  btn?: string;
  btn_color?: string;
  image?: string;
  year?: string;
  title?: string;
  price?: string;
  country?: string;
  mileage?: string;
  eng?: string;
  fuel?: string;
}

/**
 * News List
 */
export interface news {
  btn?: string;
  btn_color?: string;
  image?: string;
  sub_title: string;
  title?: string;
  content?: string;
  profile?: string;
  name?: string;
  date?: string;
  comments?: string;
}

export interface topOffer {
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
  compare?: boolean;
  eng?: string;
  fuel?: string;
}
