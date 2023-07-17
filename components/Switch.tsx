"use client";
import { useRouter } from "next/navigation";
import { IoIosArrowForward } from "react-icons/io";

interface props {
  title?: string;
  link?: string;
}

const Switch = ({ title, link }: props) => {
  const router = useRouter();

  const handleButtonClick = () => {
    if (link) {
      router.push(link);
    }
  };
  return (
    <button className="switch" onClick={handleButtonClick}>
      {title} <IoIosArrowForward />
    </button>
  );
};

export default Switch;
