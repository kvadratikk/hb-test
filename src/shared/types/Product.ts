type Image = {
  FileName: string;
  FileExtension: string;
  Image: string;
};

export type Product = {
  Id: number;
  Name: string;
  Description: string;
  Quantity: number;
  Unit: string;
  Сurrency: string;
  Price: number;
  DiscountedPrice: number;
  Images: Image[];
};
