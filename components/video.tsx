import { cn } from "@/utils/cn";

export default async function Video({
  src,
  isArticle,
}: {
  src: string;
  isArticle: boolean;
}) {
  return (
    <video
      src={src}
      autoPlay
      muted
      loop
      playsInline
      className={cn(
        "object-cover w-full rounded-2xl snap-center border border-gray-200 bg-gray-300 max-w-4xl z-10 peer-hover:opacity-25 transition-all duration-300 peer-hover:blur-sm",
        isArticle ? "w-full h-full" : "h-[250px]"
      )}
    />
  );
}
