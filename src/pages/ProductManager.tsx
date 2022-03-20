import React from "react";
import { IProduct } from "../types/product";
type ProductManager = {
  product: IProduct[];
  onRemove: (id: number) => void;
};

const ProductManager = (props: ProductManager) => {
  return(
    <div>
      <table>
        <thead>
          <th>#</th>
          <th>Price</th>
          <th>Name</th>
          <th></th>
        </thead>
        <tbody>
          {props.products.map((item, index)=>{
            return <tr key ={index}>
              <td></td>
          })}
        </tbody>
      </table>
    </div>
  )
}


export default ProductManager;
