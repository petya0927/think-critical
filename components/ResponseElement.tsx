import { ResponseT } from "@/utils/types";
import Link from "next/link";

export default function ResponseElement({ response }: { response: ResponseT }) {
  console.log(response.fields.title, response.fields.description);

  const isBold = (text: any) => {
    return text.marks && text.marks.some((mark: any) => mark.type === "bold");
  };

  const isCode = (text: any) => {
    return text.marks && text.marks.some((mark: any) => mark.type === "code");
  };

  const isLink = (text: any) => {
    return text.nodeType === "hyperlink";
  };

  const isUnderline = (text: any) => {
    return (
      text.marks && text.marks.some((mark: any) => mark.type === "underline")
    );
  };

  return (
    <div className="rounded-2xl border-primary border-2 overflow-hidden w-full">
      <div className="bg-primary px-9 py-6">
        <h2 className="font-bold text-2xl text-white">
          {response.fields.title}
        </h2>
      </div>
      <div className="px-5 md:px-10 py-7 flex flex-col lg:flex-row items-start gap-4">
        <div className="w-full lg:w-[55%]">
          {response.fields.description.content.map(
            (paragraph: any, index: number) => (
              <div key={index}>
                <div>
                  {paragraph.content.map((text: any, index: number) =>
                    isLink(text) ? (
                      <a
                        href={text.data.uri}
                        target="_blank"
                        key={index}
                        className={`text-lg underline inline ${
                          isBold(text) ? "font-bold" : "font-normal"
                        } ${isCode(text) ? "text-primary font-semibold" : ""}`}
                      >
                        {text.content[0].value}
                      </a>
                    ) : (
                      <p
                        key={index}
                        className={`text-lg inline ${
                          isBold(text) ? "font-bold" : "font-normal"
                        } ${isCode(text) ? "text-primary font-semibold" : ""} ${
                          isUnderline(text) ? "underline" : ""
                        }`}
                      >
                        {text.value}
                      </p>
                    )
                  )}
                </div>
                <br />
              </div>
            )
          )}
        </div>
        {response.fields.media !== undefined &&
          response.fields.media.fields && (
            <img
              src={`https:${response.fields.media.fields.file.url}`}
              className="w-full xs:w-[45%] ml-auto lg:ml-0"
            />
          )}
      </div>
    </div>
  );
}
