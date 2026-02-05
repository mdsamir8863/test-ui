"use client";
import Image from "next/image";

type Steps = {
  step: string;
  title: string;
  desc: string;
  img: string;
};
const steps: Steps[] = [
  {
    step: "Step 1",
    title: "Get Drake Tax Software License",
    img: "/step1.png",
    desc: "Get in touch with Drake Tax Software Sales to get the genuine license of the application.",
  },
  {
    step: "Step 2",
    title: "Find a Suitable Drake Tax Hosting Provider",
    img: "/step2.png",
    desc: "Evaluate major hosting providers and select the one that offer efficient and affordable hosting solutions.",
  },
  {
    step: "Step 3",
    title: "The Hosting Process",
    img: "/step3.png",
    desc: "Get your tax application hosted on high-performance and secure servers for maximum productivity.",
  },
  {
    step: "Step 4",
    title: "A Demo to Go",
    img: "/step4.png",
    desc: "Go for a quick demo to get a thorough understanding of the hosted platform and its features.",
  },
];
export default function DrakeSteps(): void {
  <section className="bg-blue-50 py-20">
    <h1>How to Host Drake on the Cloud?</h1>
    <p>Getting Started with Hosted Tax Practice</p>

    {/* steps start*/}
    <div className="flex">
      {/* step  box */}
      {steps.map((items, index) => (
        <div key={index} className="">
          <p>{items.step}</p>
          <Image alt="progress steps" height={36} width={36} src={items.img} />
          <p>{items.title}</p>
          <p>{items.desc}</p>
        </div>
      ))}
    </div>

    {/* steps end*/}
  </section>;
}
