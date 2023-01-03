export interface catalogModel {
  $id: string;
  Items: Item[];
  TotalItems: number;
  CurrentPage: number;
  ItemsPerPage: number;
  TotalPages: number;
}

export interface Item {
  $id: string;
  Sku: number;
  VehicleSku: number;
  OfficeFileNumber: string;
  Title: string;
  ModelCode: string;
  Chesis: string;
  Color: string;
  Price: number;
  OldPrice: number;
  VehicleGrade: string;
  ConditionGrade: number;
  CostValue: number;
  Markup: number;
  IsMarkupFixed: boolean;
  PriceType: number;
  ShowPrice: boolean;
  IsPublished: boolean;
  Offer: any;
  Manufacturer: Manufacturer;
  ManufacturerId: number;
  Model: Model;
  ModelId: number;
  Type: number;
  TruckType: number;
  MachineryType: number;
  Transmission: number;
  DriveTrain: number;
  Steering: number;
  FuelType: number;
  Doors: number;
  Seats: number;
  Year: string;
  EnginSize: number;
  Mileage: number;
  AirConditioning: boolean;
  PowerSteering: boolean;
  PowerWindows: boolean;
  PowerMirror: boolean;
  CentralLocking: boolean;
  Stereo: boolean;
  AlloyWheel: boolean;
  RearSpoiler: boolean;
  Airbag: boolean;
  DualAirbags: boolean;
  SunRoof: boolean;
  BodyKit: boolean;
  LeatherSeats: boolean;
  KeylessEntry: boolean;
  HeightControl: boolean;
  HIDLights: boolean;
  AntilockBreakingSystem: boolean;
  AntiTheftSystem: boolean;
  Long: boolean;
  HighRoof: boolean;
  HighDeck: boolean;
  Others?: string;
  IsLowMileage: boolean;
  Extras: string;
  Keywords: string;
  IsReserved: boolean;
  ReservedDate: any;
  IsSold: boolean;
  Length: number;
  Width: number;
  Height: number;
  M3: number;
  ShowRoomId: number;
  ShowRoom: ShowRoom;
  CreatedOn: string;
  CreatedBy: string;
  CreatorId: number;
  ModifiedOn: string;
  ModifiedBy: string;
  ModifierId: number;
  SoldOn: string;
  SoldBy: any;
  SalesmanId: any;
  IsAdvanced: boolean;
  FacebookSharedDate: any;
  TwitterSharedDate: string;
  InstagramSharedDate: any;
  IsExteriorVideoUploaded: boolean;
  IsInteriorVideoUploaded: boolean;
  Id: number;
}

export interface Manufacturer {
  $id?: string;
  Title?: string;
  Description?: string;
  PageTitle?: string;
  Tags?: string;
  Slug?: string;
  Id?: number;
  $ref?: string;
}

export interface Model {
  $id: string;
  Title: string;
  ModelCodes: string;
  Description?: string;
  Slug: string;
  Manufacturer: Manufacturer2;
  ManufacturerId: number;
  Id: number;
}

export interface Manufacturer2 {
  $ref: string;
}

export interface ShowRoom {
  $id?: string;
  Title?: string;
  VAT?: number;
  Country?: Country;
  CountryId?: number;
  PageTitle?: string;
  Tags?: string;
  BusinessTitle?: string;
  BusinessAddress?: string;
  Users: any;
  Offices: any;
  Coupons: any;
  Id?: number;
  $ref?: string;
}

export interface Country {
  $id: string;
  Name: string;
  CountryCode: string;
  Ports: any;
  Id: number;
}
