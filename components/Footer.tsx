import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-darkGray flex flex-col justify-center items-center gap-10 pt-20 pb-14 text-lightGray text-xs font-helvetica text-center px-7 md:px-32 xl:px-80 2xl:px-[500px]">
      <div className="hidden md:flex flex-col md:flex-row justify-between items-center w-full gap-10 max-w-[1000px]">
        <Link href="/" className="h-8">
          <img src="/assets/images/logo-white.png" className="h-full" />
        </Link>
        <div className="flex flex-row gap-10">
          <Link href="/about">About</Link>
          <Link href="/help">Help</Link>
          <Link href="https://instagram.com/" passHref={true} target="_blank">
            Instagram
          </Link>
        </div>
        <div className="flex flex-row gap-10">
          <Link
            href="http://mdi.uni-eszterhazy.hu/"
            passHref={true}
            target="_blank"
            className="h-8"
          >
            <img src="/assets/images/MDI-logo-gray.png" className="h-full" />
          </Link>
          <Link
            href="http://uni-eszterhazy.hu/"
            passHref={true}
            target="_blank"
            className="h-8"
          >
            <img src="/assets/images/EKKE-logo-gray.png" className="h-full" />
          </Link>
        </div>
      </div>
      <div className="flex md:hidden flex-col md:flex-row justify-between items-center w-full gap-10 max-w-[2000px]">
        <div className="flex flex-row gap-10 items-center">
          <Link href="/" className="h-8">
            <img src="/assets/images/logo-white.png" className="h-full" />
          </Link>
          <Link
            href="http://mdi.uni-eszterhazy.hu/"
            passHref={true}
            target="_blank"
            className="h-8"
          >
            <img src="/assets/images/MDI-logo-gray.png" className="h-full" />
          </Link>
          <Link
            href="http://uni-eszterhazy.hu/"
            passHref={true}
            target="_blank"
            className="h-8"
          >
            <img src="/assets/images/EKKE-logo-gray.png" className="h-full" />
          </Link>
        </div>
        <div className="flex flex-row gap-10">
          <Link href="/about">About</Link>
          <Link href="/help">Help</Link>
          <Link href="https://instagram.com/" passHref={true} target="_blank">
            Instagram
          </Link>
        </div>
      </div>
      <p>
        #THINK CRITICAL © is a social campaign created as part of a university
        project to raise awareness of the importance of objective
        decision-making and critical thinking.
        <br />
        The design was made at Media and Design, Eger, 2023 (EKKE MDI) by Hajdu
        Boro. Consultant was Vajdics Tamás.
      </p>
    </div>
  );
}
