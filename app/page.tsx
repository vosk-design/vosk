import Image from "next/image";
import { items } from "./items";
import Copy from "@/public/copy.png";

export default function Home() {
  return (
    <main className="flex flex-col text-sm py-[20dvh] min-h-dvh">
      <div className="flex flex-col justify-center w-screen max-w-md mx-auto ">
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

          <p>
            Our goal is to design change.
            <br />
            To announce it to the world.
            <br />
            To receive feedback.
          </p>
          <p>
            We remain at your disposal for any further information, Best
            regards, ‍
          </p>
        </div>
      </div>
      <div className="bg-black opacity-10 my-10 max-w-3xl mx-auto w-full h-px" />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-3xl mx-auto">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col gap-2">
            {/* <p className="font-medium">{item.title}</p> */}
            <div className="flex flex-row gap-3 overflow-scroll">
              {item.slides
                .filter((slide) => slide.type === "image")
                .slice(0, 1)
                .map((slide) => {
                  return (
                    <div
                      className="w-full h-full relative rounded-2xl overflow-hidden group"
                      key={slide.slide_number}
                    >
                      <Image
                        src={slide.image}
                        alt={slide.text}
                        width={500}
                        height={500}
                        loading="lazy"
                        className="object-cover w-full h-[250px] rounded-2xl snap-center"
                      />
                      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/30 to-black/0 flex flex-row items-start justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="cursor-pointer">
                          <Image src={Copy} alt="Copy" width={25} height={25} />
                        </button>
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/30 to-black/0 flex flex-row items-end justify-start p-4">
                        <p className="text-white font-semibold">{item.title}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
