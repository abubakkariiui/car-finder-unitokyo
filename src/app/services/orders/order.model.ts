export interface orderModel {
  $id: string;
  Id: number;
  OrderCode: string;
  OrderStatus: number;
  ContactTitle: string;
  Tax: string;
  ShowRoomId: number;
  CustomerId: number;
  Comments: string;
  OrderDate: string;
  VehicleSku: number;
  Price: number;
  GrandTotal: number;
  OrderType: number;
  DownPayment: number;
  ServicePlans: string;
  PlanPrice: number;
  Discount: number;
}

export interface AdvanceOrder {
  YearFrom: string,
  YearTo: string,
  Color: string,
  Transmission: number,
  FuelType: number,
  EnginCapacity: string,
  DriveTrain: string,
  ManufacturerId: number,
  ModelId: number,
  CountryId: number,
  CustomerId: number,
  Remarks: string
}
