import { IoStarSharp } from "react-icons/io5";

interface StarsInterface {
  amount: number;
}

export const Stars: React.FC<StarsInterface> = ({ amount }) => {
  const darkAmt = 5 - amount;

  return (
    <>
      <div className="flex ">
        {[...Array(amount)].map((_, index) => (
          <IoStarSharp key={index} className="text-yellow-500" />
        ))}

        {[...Array(darkAmt)].map((_, index) => (
          <IoStarSharp key={index} className="text-gray-500" />
        ))}
      </div>
    </>
  );
};
