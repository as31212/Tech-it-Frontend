import { cartCardInterface } from "../interfaces/cartCardInterface";
import { Link, useNavigate } from "react-router-dom";

const CartCard: React.FC<cartCardInterface> = ({
  name,
  _id,
  price,
  mainImage,
  quantity,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-around border-[1px] w-2/3">
        <img
          className="w-[50px] h-[50px]"
          src={mainImage}
          alt={`${name} image`}
        />
        <Link to={`Products/${_id}`}>{name}</Link>
        <select name="quantity" id="">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <p>${price}</p>
      </div>
    </>
  );
};

export default CartCard;

//todo all that needs to be done is you need to create the state for managing the quantity front end select input changes and you must also import and use the newly created useChangeQuantity hook to handle the change to use data 
