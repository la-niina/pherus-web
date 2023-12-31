import Link from "next/link";

import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { LuminusBackround } from "@/components/luminus-backround";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const posts = [
    {
      id: 1,
      title: "Boost your conversion rate",
      href: "#",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: "#" },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 1,
      title: "Boost your conversion rate",
      href: "#",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: "#" },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 1,
      title: "Boost your conversion rate",
      href: "#",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: "#" },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 1,
      title: "Boost your conversion rate",
      href: "#",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: "#" },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
  ];
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 isolate relative">
      <LuminusBackround/>

      <div className="mx-auto max-w-screen-2xl sm:max-w-2xl py-32 sm:py-48 lg:py-16">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 ring-1 ring-slate-300 hover:ring-slate-600">
            Announcing our next round of funding.{" "}
            <a href="#" className="font-semibold text-indigo-600">
              <span className="absolute inset-0" aria-hidden="true" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>

        <div className="text-center max-w-screen-2xl items-center justify-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            {siteConfig.slogan}
          </h1>
          <p className="mt-6 text-sm sm:text-lg leading-normal text-gray-600">
            {siteConfig.subheader}
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href={siteConfig.links.docs}
              target="_blank"
              rel="noreferrer"
              className={`rounded-full ${buttonVariants({
                size: "rounded",
                variant: "outline",
              })}`}
            >
              Documentation
            </Link>

            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.github}
              className={`rounded-full ${buttonVariants({
                size: "rounded",
                variant: "outline",
              })}`}
            >
              GitHub <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="py-5 sm:py-5">
        <div className="mx-auto max-w-screen-2xl px-0 lg:px-0">
          <h2 className="text-center text-lg font-semibold leading-8">
            Trusted by the world’s most innovative teams
          </h2>

          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
              alt="Reform"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
              alt="Tuple"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <h1 className="text-center text-2xl font-extrabold leading-8">
          Our Approach To World HealthCare
        </h1>
        <p className="text-center line-clamp-3">
          Imagine a world where everyone has access to quality healthcare, no
          matter where they live, your social , economic and life style.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 mt-5">
          {/* Your Wellbeing */}
          <Card
            className="flex col-span-1"
            style={{
              transition: "transform .6s cubic-bezier(0.16, 1, 0.3, 1)",
              boxShadow:
                "0 0 0 1px rgba(53,72,91,.14), 0 3px 2px rgba(0,0,0,.04), 0 7px 5px rgba(0,0,0,.02), 0 13px 10px rgba(0,0,0,.02), 0 22px 17px rgba(0,0,0,.02) !important",
            }}
          >
            <CardContent className="flex flex-col justify-center">
              <text>Your Wellbeing</text>
              <a className="flex text-xs font-light">
                Elevate your holistic health experience with Pherus. Monitor
                every facet of your well-being, from physical and mental health
                to emotional and medical aspects, all at your fingertips. Your
                health, your control. Personalized insights empower you to make
                informed decisions and live your best life.
              </a>
            </CardContent>
          </Card>

          {/* Interprofessionals */}
          <Card
            className="flex col-span-1"
            style={{
              transition: "transform .6s cubic-bezier(0.16, 1, 0.3, 1)",
              boxShadow:
                "0 0 0 1px rgba(53,72,91,.14), 0 3px 2px rgba(0,0,0,.04), 0 7px 5px rgba(0,0,0,.02), 0 13px 10px rgba(0,0,0,.02), 0 22px 17px rgba(0,0,0,.02) !important",
            }}
          >
            <CardContent className="flex flex-col justify-center">
              <text>Interprofessionals</text>
              <a className="flex text-xs font-light">
                Connect seamlessly with healthcare professionals on Pherus. Our
                platform brings together doctors, nurses, pharmacists, and more,
                fostering collaborative care. Professionals interact with
                patients at their convenience, providing international and local
                expertise. Quality care meets your schedule and budget, creating
                a truly patient-centered experience.
              </a>
            </CardContent>
          </Card>

          {/* Hospitals */}
          <Card
            className="flex col-span-1"
            style={{
              transition: "transform .6s cubic-bezier(0.16, 1, 0.3, 1)",
              boxShadow:
                "0 0 0 1px rgba(53,72,91,.14), 0 3px 2px rgba(0,0,0,.04), 0 7px 5px rgba(0,0,0,.02), 0 13px 10px rgba(0,0,0,.02), 0 22px 17px rgba(0,0,0,.02) !important",
            }}
          >
            <CardContent className="flex flex-col justify-center">
              <text>Hospitals</text>
              <a className="flex text-xs font-light">
                Embark on a journey of healthcare excellence with Pherus.
                Explore the world of better, practical, and internationally
                recognized medical mobility—all in one accessible platform.
                Access top-tier healthcare institutions, renowned specialists,
                and cutting-edge treatments. Your destination for enhanced
                medical care is just a click away, ensuring a healthier and more
                fulfilling life.
              </a>
            </CardContent>
          </Card>

          {/* Pharmacies */}
          <Card
            className="flex col-span-1"
            style={{
              transition: "transform .6s cubic-bezier(0.16, 1, 0.3, 1)",
              boxShadow:
                "0 0 0 1px rgba(53,72,91,.14), 0 3px 2px rgba(0,0,0,.04), 0 7px 5px rgba(0,0,0,.02), 0 13px 10px rgba(0,0,0,.02), 0 22px 17px rgba(0,0,0,.02) !important",
            }}
          >
            <CardContent className="flex flex-col justify-center">
              <text>Pharmacies</text>
              <a className="flex text-xs font-light">
                Experience the power of connectivity with Pherus. Pharmacies can
                now deliver to both international and local markets, building
                trust and achieving better results. Join the network that
                amplifies your impact and expands your reach. Pherus streamlines
                pharmacy operations, ensuring timely deliveries, inventory
                management, and a seamless patient experience. Trust us to
                enhance your pharmacy's performance and reputation.
              </a>
            </CardContent>
          </Card>

          {/* Laboratories */}
          <Card
            className="flex col-span-1"
            style={{
              transition: "transform .6s cubic-bezier(0.16, 1, 0.3, 1)",
              boxShadow:
                "0 0 0 1px rgba(53,72,91,.14), 0 3px 2px rgba(0,0,0,.04), 0 7px 5px rgba(0,0,0,.02), 0 13px 10px rgba(0,0,0,.02), 0 22px 17px rgba(0,0,0,.02) !important",
            }}
          >
            <CardContent className="flex flex-col justify-center">
              <text>Laboratories</text>
              <a className="flex text-xs font-light">
                Seamless collaboration in healthcare is possible with Pherus.
                Doctors, nurses, and pharmacists interact with patients,
                ensuring comfort, convenience, and global access. Elevate your
                laboratory services to new heights with Pherus. Enjoy efficient
                data sharing, enhanced research capabilities, and the ability to
                provide accurate and timely diagnostics. Pherus is your partner
                in advancing laboratory excellence.
              </a>
            </CardContent>
          </Card>

          {/* Institutions */}
          <Card
            className="flex col-span-1"
            style={{
              transition: "transform .6s cubic-bezier(0.16, 1, 0.3, 1)",
              boxShadow:
                "0 0 0 1px rgba(53,72,91,.14), 0 3px 2px rgba(0,0,0,.04), 0 7px 5px rgba(0,0,0,.02), 0 13px 10px rgba(0,0,0,.02), 0 22px 17px rgba(0,0,0,.02) !important",
            }}
          >
            <CardContent className="flex flex-col justify-center">
              <text>Institutions</text>
              <a className="flex text-xs font-light">
                Pherus transforms healthcare institutions into global hubs of
                knowledge and collaboration. Publish research, conduct studies,
                and connect on an intercontinental scale. Focus on what you do
                best, while Pherus handles the unseen aspects, ensuring a
                seamless and impactful healthcare experience. Harness the power
                of our platform to elevate your institution's reputation,
                facilitate groundbreaking research, and contribute to global
                healthcare advancements.
              </a>
            </CardContent>
          </Card>

          {/* Telemedicine */}
          <Card
            className="flex col-span-1"
            style={{
              transition: "transform .6s cubic-bezier(0.16, 1, 0.3, 1)",
              boxShadow:
                "0 0 0 1px rgba(53,72,91,.14), 0 3px 2px rgba(0,0,0,.04), 0 7px 5px rgba(0,0,0,.02), 0 13px 10px rgba(0,0,0,.02), 0 22px 17px rgba(0,0,0,.02) !important",
            }}
          >
            <CardContent className="flex flex-col justify-center">
              <text>Telemedicine</text>
              <a className="flex text-xs font-light">
                Connect with healthcare professionals remotely through Pherus
                Telemedicine. Access virtual consultations, receive
                prescriptions online, and ensure continuity of care from the
                comfort of your home. Pherus brings the doctor's office to you,
                making healthcare accessible anytime, anywhere.
              </a>
            </CardContent>
          </Card>

          {/* Electronic Health Records (EHR) */}
          <Card
            className="flex col-span-1"
            style={{
              transition: "transform .6s cubic-bezier(0.16, 1, 0.3, 1)",
              boxShadow:
                "0 0 0 1px rgba(53,72,91,.14), 0 3px 2px rgba(0,0,0,.04), 0 7px 5px rgba(0,0,0,.02), 0 13px 10px rgba(0,0,0,.02), 0 22px 17px rgba(0,0,0,.02) !important",
            }}
          >
            <CardContent className="flex flex-col justify-center">
              <text>Electronic Health Records (EHR)</text>
              <a className="flex text-xs font-light">
                Pherus centralizes your health information securely in one
                digital space. Access your Electronic Health Records (EHR)
                anytime, allowing healthcare professionals to make informed
                decisions based on your complete medical history. Streamline
                healthcare processes, reduce paperwork, and enhance patient
                safety.
              </a>
            </CardContent>
          </Card>

          {/* Health Monitoring Devices Integration */}
          <Card className="flex col-span-1">
            <CardContent className="flex flex-col justify-center">
              <text>Health Monitoring Devices Integration</text>
              <a className="flex text-xs font-light">
                Seamlessly integrate your wearable devices and health monitoring
                gadgets with Pherus. Monitor vital signs, track fitness levels,
                and share real-time health data with your healthcare providers.
                Pherus ensures a comprehensive and proactive approach to your
                well-being, leveraging the power of connected health devices.
              </a>
            </CardContent>
          </Card>

          {/* Prescription Management */}
          <Card
            className="flex col-span-1"
            style={{
              transition: "transform .6s cubic-bezier(0.16, 1, 0.3, 1)",
              boxShadow:
                "0 0 0 1px rgba(53,72,91,.14), 0 3px 2px rgba(0,0,0,.04), 0 7px 5px rgba(0,0,0,.02), 0 13px 10px rgba(0,0,0,.02), 0 22px 17px rgba(0,0,0,.02) !important",
            }}
          >
            <CardContent className="flex flex-col justify-center">
              <text>Prescription Management</text>
              <a className="flex text-xs font-light">
                Simplify your medication journey with Pherus Prescription
                Management. Receive electronic prescriptions, set medication
                reminders, and easily refill prescriptions online. Pherus
                ensures accuracy in medication management, improving adherence
                and overall health outcomes.
              </a>
            </CardContent>
          </Card>

          {/* Health Education and Resources */}
          <Card
            className="flex col-span-1"
            style={{
              transition: "transform .6s cubic-bezier(0.16, 1, 0.3, 1)",
              boxShadow:
                "0 0 0 1px rgba(53,72,91,.14), 0 3px 2px rgba(0,0,0,.04), 0 7px 5px rgba(0,0,0,.02), 0 13px 10px rgba(0,0,0,.02), 0 22px 17px rgba(0,0,0,.02) !important",
            }}
          >
            <CardContent className="flex flex-col justify-center">
              <text>Health Education and Resources</text>
              <a className="flex text-xs font-light">
                Empower yourself with Pherus's rich repository of health
                education materials. Access informative articles, videos, and
                resources covering a wide range of health topics. Stay informed,
                make healthy choices, and actively participate in your
                well-being journey with Pherus's educational resources.
              </a>
            </CardContent>
          </Card>

          {/* Appointment Scheduling */}
          <Card
            className="flex col-span-1"
            style={{
              transition: "transform .6s cubic-bezier(0.16, 1, 0.3, 1)",
              boxShadow:
                "0 0 0 1px rgba(53,72,91,.14), 0 3px 2px rgba(0,0,0,.04), 0 7px 5px rgba(0,0,0,.02), 0 13px 10px rgba(0,0,0,.02), 0 22px 17px rgba(0,0,0,.02) !important",
            }}
          >
            <CardContent className="flex flex-col justify-center">
              <text>Appointment Scheduling</text>
              <a className="flex text-xs font-light">
                Take control of your healthcare appointments with Pherus
                Appointment Scheduling. Book and manage appointments online,
                receive reminders, and streamline the check-in process. Pherus
                ensures a hassle-free and organized approach to your healthcare
                appointments, saving you time and reducing wait times.
              </a>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className=" py-24 sm:py-32">
        <div className="mx-auto max-w-screen-2xl px-0 lg:px-0">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              From the blog
            </h2>
            <p className="mt-2 text-lg leading-8">
              Learn how to grow your business with our expert advice.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6  group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 ">
                    {post.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <Image
                    src={post.author.imageUrl}
                    alt=""
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold ">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </section>
  );
}
