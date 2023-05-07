import { ResponseT } from "@/utils/types";

export default function ResponseElement({ response }: { response: ResponseT }) {
  return (
    <div className="rounded-2xl border-primary border-2 overflow-hidden w-full">
      <div className="bg-primary px-9 py-6">
        <h2 className="font-bold text-2xl text-white">
          {response.fields.title}
        </h2>
      </div>
      <div className="px-10 py-7 flex flex-col lg:flex-row items-start gap-4">
        <div className="w-auto">
          {response.fields.description.content.map((content: any) => (
            <>
              <p className="text-lg">{content.content[0].value}</p>
              <br />
            </>
          ))}
        </div>
        {response.fields.media.fields && (
          <img
            src={`https:${response.fields.media.fields.file.url}`}
            className="w-72 ml-auto lg:ml-0"
          />
        )}
      </div>
    </div>
  );
}
