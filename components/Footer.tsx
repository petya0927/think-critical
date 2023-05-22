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
          <Link
            href="https://www.instagram.com/think_critical_campaign/"
            passHref={true}
            target="_blank"
          >
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
          <Link
            href="https://www.instagram.com/think_critical_campaign/"
            passHref={true}
            target="_blank"
          >
            Instagram
          </Link>
        </div>
      </div>
      <p>
        #THINK CRITICAL © is a social campaign created as part of a university
        project to raise awareness of the importance of objective
        decision-making and critical thinking.
        <br />
        The design was made at{" "}
        <Link
          href="http://mdi.uni-eszterhazy.hu/"
          className="underline text-gray-300"
          target="_blank"
        >
          Media and Design Institue
        </Link>
        , Eger, 2023 (EKKE MDI) by{" "}
        <Link
          href="https://www.behance.net/borhajdu"
          className="underline text-gray-300"
          target="_blank"
        >
          Hajdu Boro
        </Link>
        .
        <br />
        Consultant was Vajdics Tamás.
        <br />
        Website created by
        <Link
          href="https://github.com/petya0927"
          className="underline text-gray-300"
          target="_blank"
        >
          Unyi Peter Almos
        </Link>{" "}
        , the code used to build it{" "}
        <br />
        is an open source project that is available on{" "}
        <Link
          href="https://github.com/petya0927/think-critical"
          target="_blank"
          className="underline text-gray-300"
        >
          GitHub
        </Link>
        .
      </p>
    </div>
  );
}
