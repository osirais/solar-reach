import { Separator } from "@/components/ui/separator";

export default function About() {
  const people = [
    {
      name: "Aryan Surana",
      bio: "Aryan has a keen interest in just about anything scientific and volunteers at a nursing home every weekend. At Solar Reach, he is responsible for managing the team while also maintaining the solar lantern‘s design and development with Vedant.",
      imageUrl: "/team/aryan.jpg",
    },
    {
      name: "Ethan Base",
      bio: "Ethan is a passionate volunteer with a knack for programming. At Solar Reach, he plays a key role in spreading awareness of the cause through social media platforms and communication with our partners.",
      imageUrl: "/team/ethan.jpg",
    },
    {
      name: "Manashyu Kumar",
      bio: "Manashyu is a massive technology enthusiast who hopes to unite all communities under the shared realm of engineering. He has aided Solar Reach through public outreach and locating events in order to raise funds.",
      imageUrl: "/team/manashyu.jpg",
    },
    {
      name: "Vedant Aggarwal",
      bio: "Vedant greatly enjoys using engineering to benefit the lives of others. At Solar Reach, he has exemplified this by helping develop the model from scratch and helping with operations to keep the organization running.",
      imageUrl: "/team/vedant.jpg",
    },
  ];

  return (
    <div className="mx-auto flex w-full max-w-screen-lg flex-col px-6 pb-24 sm:px-20">
      <h1 className="mt-28 text-xl font-bold uppercase sm:mt-64">
        Our Mission
      </h1>
      <h1 className="mt-2 scroll-m-20 text-4xl font-extrabold tracking-tight">
        Reaching out with solar
      </h1>
      <p className="mt-6 text-lg leading-7">
        At Solar Reach, we are a team of passionate high school students
        committed to making a positive impact on communities with limited access
        to electricity.
        <br />
        <br />
        As a 501(c)(3) nonprofit organization, our mission is to develop and
        distribute solar-powered lights to communities with limited electricity
        access. We believe that everyone deserves the chance to thrive, study,
        and live safely—regardless of their access to the electrical grid.
        <br />
        <br />
        Our initiative is simple yet powerful: we design, build, and distribute
        solar-powered lights that offer reliable illumination to underserved
        regions. Through this effort, we aim to support education, enhance
        safety, and contribute to environmental sustainability by utilizing
        renewable energy.
        <br />
        <br />
        Driven by a shared vision of a brighter future, we are proud to play a
        role in bringing light to the places that need it most.
      </p>
      <h1 className="mt-8 text-xl font-bold uppercase sm:mt-16">Our Team</h1>
      <Separator className="mt-2 stroke-background"></Separator>
      <div className="mt-8">
        <ul role="list" className="divide-y divide-background xl:col-span-3">
          {people.map((person) => (
            <li
              key={person.name}
              className="flex flex-col gap-10 py-12 first:pt-0 last:pb-0 sm:flex-row"
            >
              <img
                alt=""
                src={person.imageUrl}
                className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
              />
              <div className="max-w-xl flex-auto">
                <h3 className="text-lg/8 font-semibold tracking-tight">
                  {person.name}
                </h3>
                <p className="mt-6 text-base/7">{person.bio}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
