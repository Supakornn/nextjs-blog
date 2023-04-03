import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="https://avatars.githubusercontent.com/u/78318848?s=400&u=6e590db140362afa35ac339b390a6d4839a1ce02&v=4"
            className="rounded-full"
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
        <h1>Supakorn</h1>
      </div>

      <div>
        <Link
          href="https://github.com/Supakornn"
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#2cf608] flex items-center rounded-full text-center"
        >
          GitHub
        </Link>
      </div>
    </header>
  );
}

export default Header;
