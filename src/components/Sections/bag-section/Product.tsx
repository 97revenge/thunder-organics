// import { Bag } from "../../Carts";
// const context = useContext(Bag);
type ProductProps = {
  imageProduct: string;
  nameProduct: any;
  descriptionProduct: any;
  amountProduct: any;
  discountProduct: any;
  valueProduct: any;
};
export const Product = ({
  imageProduct,
  nameProduct,
  descriptionProduct,
  amountProduct,
  discountProduct,
  valueProduct,
}: ProductProps) => {
  return (
    <>
      <li className="flex items-center gap-4 overflow-auto">
        <img
          src={imageProduct}
          alt=""
          className="h-16 w-16 rounded object-cover scroll-m-3"
        />
        <div>
          <h3 className="text-sm text-gray-900">{nameProduct}</h3>
          <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
            <div>
              <dt className="inline">{descriptionProduct}</dt>
              <dd className="flex-1">{amountProduct}</dd>
            </div>
            <div>
              <dt className="inline"> {discountProduct} </dt>
              <dd className="inline">
                <strong>$ {valueProduct}.99</strong>
              </dd>
            </div>
          </dl>
        </div>
      </li>
    </>
  );
};
