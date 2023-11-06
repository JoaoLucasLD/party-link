import Link from "next/link";

export default function Header() {
  return (
    <header className="flex w-full h-24 bg-[#FA4A0C]">
      <div className="w-full flex justify-start items-center ml-20">
        <Link href="/">
          <img
            src="/images/logo.png"
            alt="PartyLink"
            className="w-[180px] h-[50px]"
          />
        </Link>
      </div>
      <nav className="text-white flex w-full justify-end items-center gap-20 mr-20">
        <a className="hover:text-black transition" href="#sobre">
          Sobre
        </a>
        <a className="hover:text-black transition" href="#download">
          Download
        </a>
      </nav>
    </header>
  );
}
