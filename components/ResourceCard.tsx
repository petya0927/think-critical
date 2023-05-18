import Link from "next/link";

export default function ResourceCard({
  title,
  image,
  buttonText,
  link,
}: {
  title: string;
  image: string;
  buttonText: string;
  link: string;
}) {
  return (
    <div className="bg-primary rounded-[20px] px-10 py-9 w-full max-h-min flex flex-col items-center gap-7 max-w-[286px]">
      <h3 className="font-semibold text-2xl text-center">{title}</h3>
      <img src={image} className="w-fit mt-auto max-w-[175px]" />
      <Link
        href={link}
        target="_blank"
        className="font-semibold text-2xl bg-white rounded-xl uppercase tracking-wide text-center w-full px-4 py-2"
      >
        {buttonText}
      </Link>
    </div>
  );
}
