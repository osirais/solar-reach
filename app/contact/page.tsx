import Link from "next/link";

export default function Contact() {

  return (
    <div className="mx-auto flex w-full max-w-screen-lg flex-col px-6 pb-24 sm:px-20">
      <h1 className="mt-2 scroll-m-20 text-4xl font-extrabold tracking-tight">
        Contact us
      </h1>
      <p className="mt-6 text-lg leading-7">
        <Link href="mailto:solarreachinitiative@gmail.com"></Link>
      </p>
    </div>
  );
}
