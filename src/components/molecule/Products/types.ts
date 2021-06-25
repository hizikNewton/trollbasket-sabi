export interface IProps {
  products:Array<Product>
}
export interface ReviewProps {
  review:Review 
}
interface Review{
  star:number,
  comment:string,
  thumbnail:string,
  username:string
}