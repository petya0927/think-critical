import { ResponseT } from "@/utils/types";
import { css } from "@emotion/css";

export default function ResponseElement({ response }: { response: ResponseT }) {
  const isBold = (text: any) => {
    return text.marks && text.marks.some((mark: any) => mark.type === "bold");
  };

  const isLink = (text: any) => {
    return text.nodeType === "hyperlink";
  };

  const isUnderline = (text: any) => {
    return (
      text.marks && text.marks.some((mark: any) => mark.type === "underline")
    );
  };

  const isList = (paragraph: any) => {
    return paragraph.nodeType === "unordered-list";
  };

  return (
    <div
      className={`rounded-2xl border-primary border-2 w-full ${
        response.fields.media !== undefined ? "mb-16 lg:mb-0" : ""
      }`}
    >
      <div className="bg-primary px-5 md:px-9 py-7 rounded-t-xl">
        <h2 className="font-bold text-2xl text-white">
          {response.fields.title}
        </h2>
      </div>
      <div className="px-5 md:px-10 flex flex-col lg:flex-row items-start gap-0 lg:gap-16">
        <div
          className={css`
            width: calc(100% - ${response.fields.mediaSize + 64}px);
            padding: 1.75rem 0;
            @media screen and (max-width: 1024px) {
              width: 100%;
              padding: 1.75rem 0 1rem 0;
            }
          `}
        >
          {response.fields.description.content.map(
            (paragraph: any, index: number) => (
              <div key={index}>
                {paragraph.content.map((text: any, index: number) =>
                  isLink(text) ? (
                    <a
                      href={text.data.uri}
                      target="_blank"
                      key={index}
                      className={`text-lg underline inline break ${
                        isBold(text) ? "font-bold" : "font-normal"
                      }`}
                    >
                      {text.content[0].value}
                    </a>
                  ) : (
                    <p
                      key={index}
                      className={`text-lg inline ${
                        isList(paragraph) ? "font-semibold text-primary" : ""
                      } ${isBold(text) ? "font-semibold" : "font-normal"} ${
                        isUnderline(text) ? "underline" : ""
                      }`}
                    >
                      {isList(paragraph)
                        ? text.content[0].content[0].value
                        : text.value}
                      {!isBold(text) && <br />}
                    </p>
                  )
                )}
                {response.fields.description.content.indexOf(paragraph) !==
                  response.fields.description.content.length - 1 && <br />}
              </div>
            )
          )}
        </div>
        {response.fields.media !== undefined &&
          response.fields.media.fields && (
            <img
              src={`https:${response.fields.media.fields.file.url}`}
              className={css`
                position: absolute;
                right: 40px;
                width: ${response.fields.mediaSize
                  ? response.fields.mediaSize + "px"
                  : "40%"};
                max-width: 300px;
                margin-left: 0;
                margin-bottom: 0;
                margin-top: ${response.fields.mediaOffset
                  ? response.fields.mediaOffset
                  : 0}px;
                @media screen and (max-width: 1024px) {
                  position: relative;
                  right: 0;
                  width: 50%;
                  margin-left: auto;
                  margin-bottom: -3rem;
                  margin-top: 0;
                }
              `}
            />
          )}
      </div>
    </div>
  );
}
