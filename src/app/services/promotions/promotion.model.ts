export interface promotionModel {
  Id: number;
  DownPayment: number;
  Status: number;
  CountryId: number;
  CustomerId: number;
  VehicleSku: number;
  RequestedOn: string;
  IssuedOn: string;
  OperatorId: number;
  Comments: string;
  Price: number;
  Tax: number;
  Total: number;
  Type: number;
  PriceType: number;
  DesiredVehicleId: number;
  AdminNote: string;
  Price2: number;
  Price3: number;
  DiscountAmount: number;
  IsDiscountPercent: string;
  TotalDiscount: number;
  ServicePlans: string;
  PlanPrice: number;
}
