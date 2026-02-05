import Image from "next/image";

export default function Page() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
        {/* LEFT TEXT BLOCK */}
        <div className="max-w-md">
          <h2 className="text-[34px] font-extrabold text-[#0b3c8c] leading-snug">
            IRS Security Parameters for Drake Hosted Desktop
          </h2>

          <p className="mt-3 font-semibold text-gray-800">
            Sagenext Adheres to the Best Security Practices
          </p>

          <p className="mt-4 text-gray-600 text-[15px] leading-7">
            We follow stringent security measures backed by IRS guidelines and
            recommendations to prevent unauthorized access and data theft/loss.
            To ensure cloud compliance, security, stability, performance and
            protection against online risks and threats, we have a dedicated
            team of data security experts who go extra-mile to ensure peace of
            mind of the clients.
          </p>
        </div>

        {/* MIDDLE COLUMN */}
        <div className="relative space-y-14 pl-10 before:absolute before:left-0 before:top-0 before:h-full before:border-l before:border-dashed before:border-gray-300">
          <div className="flex flex-col items-start gap-4">
            <Image src="/step4.png" alt="icon" width={42} height={42} />
            <div>
              <h3 className="font-semibold text-gray-900">
                Multi-Layered Security Measures
              </h3>
              <p className="text-[14px] text-gray-600 mt-1 leading-6">
                As per IRS, one must apply all basic with end-to-end encryption,
                MFA, firewalls, intrusion detection and prevention, Sagenext
                ensures full security of hosted applications and data.
              </p>
            </div>
          </div>

          <div className="flex items-start flex-col gap-4">
            <Image src="/step4.png" alt="icon" width={42} height={42} />
            <div>
              <h3 className="font-semibold text-gray-900">
                Certified Tier-IV Data Centers
              </h3>
              <p className="text-[14px] text-gray-600 mt-1 leading-6">
                Sagenext has SSAE-18 certified Tier-IV data centers that comply
                with HIPAA, PCI DSS, and SOC industry parameters to give our
                clients a sense of security.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="relative space-y-14 pl-10 before:absolute before:left-0 before:top-0 before:h-full before:border-l before:border-dashed before:border-gray-300">
          <div className="flex items-start flex-col gap-4">
            <Image src="/step4.png" alt="icon" width={42} height={42} />
            <div>
              <h3 className="font-semibold text-gray-900">
                Data Recovery & Business Continuity
              </h3>
              <p className="text-[14px] text-gray-600 mt-1 leading-6">
                To provide you with the best cloud hosting services, we have a
                good restoration plan, load-balancing strategy, and high
                availability & true failover IT services.
              </p>
            </div>
          </div>

          <div className="flex items-start flex-col gap-4">
            <Image src="/step4.png" alt="icon" width={42} height={42} />
            <div>
              <h3 className="font-semibold text-gray-900">
                Managed SIEM Services
              </h3>
              <p className="text-[14px] text-gray-600 mt-1 leading-6">
                We offer uncompromised SIEM integration to monitor, detect,
                investigate and mitigate online threats and attacks and help you
                run your practice at optimal efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
