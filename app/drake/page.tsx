import Image from "next/image";

export default function Page() {
  return (
    <section className="flex flex-col items-center justify-center gap-10 p-10 bg-blue-50 relative">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-[#013d8e]">
        How to Host Drake on the Cloud?
      </h1>
      <p className="text-gray-600 text-center">
        Getting Started with Hosted Tax Practice
      </p>

      {/* Steps Container */}
      <div className="relative w-full max-w-7xl flex flex-col md:flex-row items-start justify-between gap-10 mt-10">
        {/* 🔵 Dotted Line */}
        <div className="hidden md:block absolute top-[75px] left-0 right-0 border-t-2 border-dashed border-blue-300"></div>

        {/* STEP 1 */}
        <div className="relative z-10 flex flex-col items-center text-center gap-2 max-w-xs">
          <p className="font-bold">Step 1</p>
          <Image alt="step" height={150} width={150} src="/step4.png" />
          <p className="font-bold">Get Drake Tax Software License</p>
          <p className="text-gray-600 text-sm">
            Get in touch with Drake Tax Software Sales to get the genuine
            license of the application.
          </p>
        </div>

        {/* STEP 2 */}
        <div className="relative z-10 flex flex-col items-center text-center gap-2 max-w-xs">
          <p className="font-bold">Step 2</p>
          <Image alt="step" height={150} width={150} src="/step3.png" />
          <p className="font-bold">
            Find a Suitable Drake Tax Hosting Provider
          </p>
          <p className="text-gray-600 text-sm">
            Evaluate major hosting providers and select the one that offer
            efficient and affordable hosting solutions.
          </p>
        </div>

        {/* STEP 3 */}
        <div className="relative z-10 flex flex-col items-center text-center gap-2 max-w-xs">
          <p className="font-bold">Step 3</p>
          <Image alt="step" height={150} width={150} src="/step2.png" />
          <p className="font-bold">The Hosting Process</p>
          <p className="text-gray-600 text-sm">
            Get your tax application hosted on high-performance and secure
            servers for maximum productivity.
          </p>
        </div>

        {/* STEP 4 */}
        <div className="relative z-10 flex flex-col items-center text-center gap-2 max-w-xs">
          <p className="font-bold">Step 4</p>
          <Image alt="step" height={150} width={150} src="/step1.png" />
          <p className="font-bold">A Demo to Go</p>
          <p className="text-gray-600 text-sm">
            Go for a quick demo to get a thorough understanding of the hosted
            platform and its features.
          </p>
        </div>
      </div>

      {/* Bottom CTA */}
      <h2 className="text-3xl font-bold text-center text-[#013d8e] mt-10">
        Embrace the Future of Tax Operations with Confidence
      </h2>

      <button className="bg-blue-900 text-white border border-blue-900 py-3 px-10 rounded-full font-bold cursor-pointer transition hover:bg-white hover:text-blue-900">
        Request a free Quote
      </button>
    </section>
  );
}
