import Link from "next/link";

export default function Card({
  title,
  image,
  buttonText,
}: {
  title: string;
  image: string;
  buttonText: string;
}) {
  return (
    <div className="bg-primary rounded-[20px] px-10 py-9 w-full max-h-min flex flex-col gap-8">
      <h3 className="font-semibold text-2xl text-center">{title}</h3>
      <img
        src={image}
        className="w-fit m-auto
      "
      />
      <Link
        href="/"
        className="font-semibold text-2xl bg-white rounded-xl uppercase tracking-wide text-center w-fit md:w-full px-20 md:px-4 py-2 m-auto"
      >
        {buttonText}
      </Link>
    </div>
  );
}
