import Link from "next/link";

interface props {
  title: string;
  link: string;
}

const LinkItem = ({ title, link }: props) => {
  return (
    <li>
      <Link href={link}>{title}</Link>
    </li>
  );
};

export default LinkItem;
