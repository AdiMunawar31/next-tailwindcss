import { NextPage } from "next";
import Head from "next/head";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

const About: NextPage = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1 ">
      <Head>
        <title>Adi Munawar | About</title>
      </Head>
      <h6 className="my-3 text-base font-medium">
        {/* Hello There, my name is Adi Munawar, and people who know me call me Adi (21), I was born in Kuningan, July 31,
				2001. For now, I live in Mandirancan - Kuningan, West Java, Indonesia */}
        {/* Adi is a Junior Front-End Developer. Experienced with all stages of the development cycle for dynamic mobile and
        web projects. Well-versed in numerous programming languages including Dart and Javascript. */}
        Adi is a Junior Developer with basic skills in software development and the ability to build simple applications
        or systems using the programming language he knows. They are able to test and deploy generated code and have a
        good understanding of basic software development concepts such as data structures, algorithms, and architectural
        design. In addition, as a junior developer, Adi has the ability to work in a team, communicate with colleagues,
        and learn from experience and input provided by senior developers. Adi can complete assigned tasks efficiently
        with proper supervision and is always ready to learn and develop skills to become a better developer in the
        future.
      </h6>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="my-3 text-xl font-semibold tracking-wide">What I am doing</h4>

        <div className="grid gap-6 my-3 md:grid-cols-2">
          {services.map((service) => (
            <div className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1" key={service.title}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
