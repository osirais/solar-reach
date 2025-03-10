import { EmailForm } from "@/components/email-form";
import Image from "next/image";
import React from "react";

export default function Footer() {
  const navigation = {
    nav: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Donate", href: "/donate" },
    ],
    social: [
      {
        name: "Instagram",
        href: "https://www.instagram.com/solarreach2024",
        icon: (props: React.SVGProps<SVGSVGElement>) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
    ],
  };

  return (
    <footer className="flex w-full flex-wrap items-center justify-center gap-6 bg-[--background]">
      <div className="mx-auto w-full max-w-7xl px-6 pb-8 pt-8 sm:pt-10 lg:px-8">
        <div>
          <Image
            alt="Solar Reach Initiative"
            src="/logo.svg"
            width={50}
            height={50}
            className="-mb-4"
          />
          <div className="mb-4 mt-10 md:mt-0 xl:col-span-2 xl:flex xl:justify-end">
            <div className="flex flex-row items-center space-x-4">
              <ul role="list" className="flex flex-row space-x-4">
                {navigation.nav.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm/6 text-gray-400 hover:text-white"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex gap-x-6 md:order-2">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-gray-300"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon aria-hidden="true" className="size-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="min-w-xl border-t border-white/10 pt-8 lg:flex lg:items-center lg:justify-between">
          <div>
            <h3 className="text-sm/6 font-semibold text-white">
              Stay Connected
            </h3>
            <p className="mt-2 max-w-sm text-sm/6 text-gray-300">
              Sign up for our newsletter to stay informed about our latest
              projects, success stories, and ways you can get involved.
            </p>
          </div>
          <EmailForm />
        </div>
        <div className="mt-8 border-t border-white/10 pt-4">
          <p className="mt-8 text-sm/6 text-gray-400 md:order-1 md:mt-0"></p>
        </div>
      </div>
    </footer>
  );
}
