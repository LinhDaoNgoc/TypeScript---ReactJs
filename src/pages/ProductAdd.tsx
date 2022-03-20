import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type ProductAddProps = {
  name: string;
  onAdd: (product: TypeInputs) => void;
};
type typeInput = {
  name: string;
  price: number;
};

const ProductAdd = (props: ProductAddProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<typeInput>();
  const onSubmit: SubmitHandler<typeInput> = (data) => {
    props.onAdd(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {props.name}
      <input type="text" placeholder="Ten san pham" {...register("name")} />
      <input type="number" placeholder="Gia san pham" {...register("price")} />
      <button>Add</button>
    </form>
  );
};

export default ProductAdd;
