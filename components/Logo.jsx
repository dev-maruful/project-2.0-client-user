import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center w-1/5 gap-4">
      <Image
        height={400}
        width={900}
        src="/logo/shopping 1.png"
        alt="logo"
        className="w-9 h-9"
      />
      <h2 className="text-xl font-bold text-[#5D5FEF]">eShop</h2>
    </Link>
  );
}

export default Logo;
