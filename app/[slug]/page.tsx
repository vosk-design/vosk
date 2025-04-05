import Video from "@/components/video";
import { items } from "../items";
import Image from "next/image";
import Back from "./back";
import Link from "next/link";
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const item = items.find((item) => item.slug === decodedSlug);
  const nextItem =
    items[items.findIndex((item) => item.slug === decodedSlug) + 1];
  const nextItemImage = nextItem?.slides.filter(
    (slide) => slide.type === "image"
  )[0].image;
  return (
    <div className="flex flex-col w-full h-full relative">
      <Back />
      <div className="flex flex-col items-center w-full h-full gap-4 pt-10 px-6 mx-auto pb-80">
        {item?.slides.map((slide, index) => {
          switch (slide.type) {
            case "image":
              return (
                <Image
                  key={index}
                  src={slide.image}
                  alt={slide.text}
                  width={500}
                  height={500}
                  className="object-cover w-full h-auto rounded-2xl snap-center border border-gray-200 max-w-4xl"
                />
              );
            case "video":
              return <Video src={slide.image} key={index} isArticle={true} />;
            case "text":
              return (
                <p
                  className={`text-base max-w-md leading-7 my-5 whitespace-pre-line tracking-[0.0125em] ${
                    index === item?.slides.length - 1 ? "text-center" : ""
                  }`}
                  key={index}
                >
                  {slide.text}
                </p>
              );
            default:
              return null;
          }
        })}

        {nextItem && (
          <div className="w-full max-w-4xl rounded-t-2xl overflow-hidden absolute bottom-0 pointer-events-none">
            <div className="relative translate-y-1/2 rounded-t-2xl overflow-hidden pointer-events-auto hover:translate-y-[45%] transition-all duration-300 hover:opacity-80">
              <Link href={`/${nextItem.slug}`}>
                <Image
                  src={nextItemImage}
                  alt={nextItem?.title}
                  width={500}
                  height={500}
                  className="object-cover w-full h-auto rounded-2xl snap-center border border-gray-200 max-w-4xl max-h-[450px]"
                />
              </Link>
              <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/50 to-black/0 flex flex-row items-center justify-center p-4 pointer-events-none">
                <p className="text-white font-medium">{nextItem.title}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
