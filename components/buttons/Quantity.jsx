"use client";

import { handleAmount } from "@/redux/features/addToCartSlice";
import { Minus, Plus } from "@/utils/icons";
import { useDispatch, useSelector } from "react-redux";

const Quantity = ({ stock }) => {
  const { _amount } = useSelector((state) => state.addToCartSlice);
  const dispatch = useDispatch();

  return (
    <div className="flex">
      <button
        type="button"
        className="h-10 bg-gray-100 flex justify-center items-center px-3"
        onClick={() =>
          dispatch(handleAmount({ direction: "decrement", stock }))
        }
      >
        <Minus />
      </button>
      <input
        type="number"
        name="quantity"
        id="quantity"
        value={_amount}
        className="max-w-[50px] outline-none px-3 py-2 text-center h-fit"
        min={1}
        readOnly
      />
      <button
        type="button"
        className="h-10 bg-gray-100 flex justify-center items-center px-3"
        onClick={() =>
          dispatch(handleAmount({ direction: "increament", stock }))
        }
      >
        <Plus />
      </button>
    </div>
  );
};

export default Quantity;
