export interface BannersType {
  id: number;
  product_id: number;
  category_id:number | null;
  title:string | null;
  description: string;
  image: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  product: any
  category: any;
}
