import { ResponseT } from "@/utils/types";
import { css } from "@emotion/css";

export default function ResponseElement({ response }: { response: ResponseT }) {
  console.log(response.fields);

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
    <div
      className={`rounded-2xl border-primary border-2 w-full ${
        response.fields.media !== undefined ? "mb-16 lg:mb-0" : ""
      }`}
    >
      <div className="bg-primary px-9 py-6">
        <h2 className="font-bold text-2xl text-white">
          {response.fields.title}
        </h2>
      </div>
      <div className="px-5 md:px-10 py-7 flex flex-col lg:flex-row items-start gap-0 lg:gap-16">
        <div
          className={`w-full ${
            response.fields.media !== undefined && "lg:w-[60%]"
          }`}
        >
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
              // className={`w-1/2 xs:w-[40%] ml-auto lg:ml-0 -mb-24 lg:mb-0`}
              className={css`
                width: 40%;
                margin-left: 0;
                margin-bottom: 0;
                margin-top: ${response.fields.mediaOffset}px;
                @media screen and (max-width: 425px) {
                  width: 50%;
                }
                @media screen and (max-width: 1024px) {
                  margin-left: auto;
                  margin-bottom: -6rem;
                  margin-top: 0;
                }
              `}
            />
          )}
      </div>
    </div>
  );
}
