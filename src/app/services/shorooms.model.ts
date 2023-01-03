export interface ShowRoomModel {
  $id: string;
  Country: Country;
  Coupons: Coupon[];
  Offices: Office[];
  Users: User[];
  Title: string;
  VAT: number;
  CountryId: number;
  PageTitle: string;
  Tags: string;
  BusinessTitle: string;
  BusinessAddress: string;
  Id: number;
}

export interface Country {
  $id: string;
  Ports: Port[];
  Name: string;
  CountryCode: string;
  Id: number;
}

export interface Port {
  $id: string;
  Country: Country2;
  InspectionCompany: InspectionCompany;
  Name: string;
  CountryId: number;
  NameWithCountryName: string;
  InsuranceStatus: number;
  InspectionStatus: number;
  InspectionCompanyId: number;
  Id: number;
}

export interface Country2 {
  $ref: string;
}

export interface InspectionCompany {
  $id?: string;
  Title?: string;
  Rate?: number;
  TitleWithRate?: string;
  Id?: number;
  $ref?: string;
}

export interface Coupon {
  $id: string;
  ShowRoom: ShowRoom;
  Title: string;
  TargetCustomers: number;
  Code: string;
  IsDiscountPercent: boolean;
  DiscountAmount: number;
  StartFrom: string;
  EndOn: string;
  Message: string;
  Status: boolean;
  MessageStatus: boolean;
  IsValid: boolean;
  ShowRoomId: number;
  Id: number;
}

export interface ShowRoom {
  $ref: string;
}

export interface Office {
  $id: string;
  ShowRoom: ShowRoom2;
  Title: string;
  Phone: string;
  Address: string;
  Email: string;
  City: string;
  Incharge: string;
  ShowRoomId: number;
  Id: number;
}

export interface ShowRoom2 {
  $ref: string;
}

export interface User {
  $id: string;
  Country: Country3;
  Orders: any[];
  Quotes: any[];
  ShowRooms: ShowRoom3[];
  Email: string;
  Password: string;
  FullName: string;
  FirstName: string;
  LastName: string;
  Gender: number;
  Company: any;
  IsCompanyAccount: boolean;
  City: string;
  Phone: string;
  PostalAddress: string;
  PostalCode: string;
  Role: number;
  Status: number;
  DateOfBirth: string;
  LastLoggedIn: string;
  MemberSince: string;
  CountryId: number;
  Id: number;
}

export interface Country3 {
  $ref: string;
}

export interface ShowRoom3 {
  $ref: string;
}
