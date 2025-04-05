import Image from "next/image";
import { items } from "./items";
import Copy from "@/public/copy.png";

export default function Home() {
  return (
    <main className="flex flex-col">
    <div className="flex flex-col justify-center w-screen min-h-dvh max-w-md mx-auto text-sm py-[20dvh]">
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
          We remain at your disposal for any further information, Best regards,
          ‍
        </p>
        <hr className="opacity-10 my-10" />
      </div>
    </div>
    </main>
  );
}
