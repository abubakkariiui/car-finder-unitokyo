export interface inquiriesModel {
  $id: string;

  Name: string;
  CountryId: number;
  Company: string;
  Email: string;
  RetypeEmail: string;
  Phone: string;
  Message: string;
  ManufacturerId: number;
  ModelId: number;
  Transmission: string;
  Steering: string;
  YearFrom: string;
  YearTo: string;
  PriceType: string;
  RecaptchaValid: boolean;
}
