import Image from "next/image";
import { items } from "./items";
import Video from "@/components/video";
import Link from "next/link";
import LogoVideo from "@/components/logo-video";

export default function Home() {
  return (
    <div className="flex flex-col justify-start w-fit max-w-md mx-auto text-sm max-md:px-4 py-[10vh] md:py-[15dvh] px-4 ">
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-col gap-0.5">
          <p className="font-medium">VOSK</p>
          <a
            href="mailto:hello@vosk.design"
            className="opacity-50 hover:opacity-100 transition-opacity duration-300"
          >
            hello@vosk.design
          </a>
        </div>
        <p className="opacity-50">
          {new Date().toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </div>
      <div className="pt-6 flex flex-col gap-3">
        <p>Hi there,</p>

        <p>Thank you for reaching out,</p>

        <p>
          At VOSK, we act as heralds of change, creating space for new
          meaningful and emotional experiences in both physical and digital
          environments.
        </p>

        <p>We provide the services below:</p>

        <ul className="list-disc list-inside">
          <li>AI Brand Optimization</li>
          <li>Services</li>
          <li>Products</li>
          <li>Experiences</li>
          <li>Brands</li>
          <li>Processes</li>
          <li>Tools</li>
        </ul>

        <p className="italic">
          Our goal is to design change.
          <br />
          To announce it to the world.
          <br />
          To receive feedback.
        </p>
        <p>
          We remain at your disposal for any further information, Best regards,
          ‍
        </p>
        <div className="flex flex-col">
          <LogoVideo />
          <div className="flex flex-row gap-2 mt-10 items-center justify-start *:opacity-50 *:hover:opacity-100 transition-opacity duration-300">
            <Link
              href="https://t.me/sasha_bazan"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </Link>
            <Link
              href="https://www.linkedin.com/company/vosk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
            <Link
              href="https://www.instagram.com/vosk.design/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </Link>
            <Link
              href="https://www.behance.net/VOSK"
              target="_blank"
              rel="noopener noreferrer"
            >
              Behance
            </Link>
          </div>
        </div>
        <hr className="opacity-10 my-5" />
        <div className="flex flex-col gap-6">
          {items.map((item, index) => (
            <Link
              href={`/${item.slug}`}
              key={index}
              className="flex flex-col gap-2 group"
            >
              <div className="flex flex-row gap-2 items-center justify-between">
                <p className="font-medium">{item.title}</p>
                <svg
                  height="16"
                  strokeLinejoin="round"
                  viewBox="0 0 16 16"
                  width="16"
                  className="hidden md:block md:opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.75011 4H6.00011V5.5H6.75011H9.43945L5.46978 9.46967L4.93945 10L6.00011 11.0607L6.53044 10.5303L10.499 6.56182V9.25V10H11.999V9.25V5C11.999 4.44772 11.5512 4 10.999 4H6.75011Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-row gap-2 overflow-x-auto snap-x snap-mandatory rounded-2xl no-scrollbar h-[250px]">
                {item.slides
                  .filter((slide) => slide.type === "image")
                  .slice(0, 3)
                  .map((slide, index) => {
                    switch (slide.type) {
                      case "image":
                        const image = slide.image;
                        const imageWithoutQParams = image.split("q=")[0];
                        const ImageWithNewQParams = imageWithoutQParams + "q=1";
                        return (
                          <Image
                            key={index}
                            src={slide.image}
                            alt={slide.text}
                            width={500}
                            height={500}
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL={ImageWithNewQParams}
                            className="object-cover w-full h-[250px] rounded-2xl snap-center border border-gray-200"
                          />
                        );
                      case "video":
                        return (
                          <Video
                            src={slide.image}
                            key={index}
                            isArticle={false}
                          />
                        );
                      default:
                        return null;
                    }
                  })}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
