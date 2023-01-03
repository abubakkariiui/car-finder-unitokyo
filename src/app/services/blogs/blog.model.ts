export interface blogModel {
  $id: string;
  Items: Item[];
  TotalItems: number;
  CurrentPage: number;
  ItemsPerPage: number;
  TotalPages: number;
}

export interface Item {
  $id: string;
  Category: Category;
  Comments: Comment[];
  Ratings: Rating[];
  Writer: Writer;
  Title: string;
  ShortDescription: string;
  Body: string;
  CreatedOn: string;
  Tags: any;
  Slug: string;
  IsRatingEnabled: boolean;
  IsCommentsEnabled: boolean;
  IsPublished: boolean;
  Rating: number;
  WriterId: number;
  CategoryId: number;
  Id: number;
}

export interface Category {
  $id: string;
  BlogPosts: BlogPost[];
  Title: string;
  Slug: string;
  Id: number;
}

export interface BlogPost {
  $ref: string;
}

export interface Comment {
  $id: string;
  Post: Post;
  UserId: number;
  UserName: string;
  Comment: string;
  CreatedOn: string;
  Status: number;
  PostId: number;
  Id: number;
}

export interface Post {
  $ref: string;
}

export interface Rating {
  $id: string;
  Post: Post2;
  UserId: number;
  Rating: number;
  PostId: number;
  Id: number;
}

export interface Post2 {
  $ref: string;
}

export interface Writer {
  $id: string;
  Country: Country;
  Orders: any[];
  Quotes: any[];
  ShowRooms: any[];
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
  PostalAddress: any;
  PostalCode: any;
  Role: number;
  Status: number;
  DateOfBirth: string;
  LastLoggedIn: string;
  MemberSince: string;
  CountryId: number;
  Id: number;
}

export interface Country {
  $id: string;
  Ports: any[];
  Name: string;
  CountryCode: string;
  Id: number;
}
