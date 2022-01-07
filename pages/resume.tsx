import { languages, tools } from '../data';
import Skills from '../components/Skills';
import Head from 'next/head';

const Resume = () => {
  return (
    <div className="px-6 py-2">
      <Head>
        <title>Adi Munawar | Resume</title>
      </Head>
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h1 className="px-2 my-3 text-2xl font-bold border-l-4 border-blue-600 dark:text-gray-200">Education</h1>
          <p className="my-2 text-xl font-bold">Computer Science Engineering</p>
          <p className="font-semibold">STMIK IKMI Cirebon(2019)</p>
          <p className="my-3">I'm currently studying at the S1 level at STMIK IKMI Cirebon</p>
        </div>
        <div>
          <h1 className="px-2 my-3 text-2xl font-bold border-l-4 border-blue-600 dark:text-gray-200">Experience</h1>
          <p className="my-2 text-xl font-bold">Software Developer Jr.</p>
          <p className="font-semibold">Web and Mobile Developer</p>
          <p className="my-3">I dont know why I am doing this job</p>
        </div>
      </div>
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h5 className="my-3 text-lg font-bold lg:text-2xl">Language & Framework</h5>
          <div className="grid grid-cols-3 my-2 md:grid-cols-4">
            {languages.map((language, i) => (
              <Skills value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-lg font-bold lg:text-2xl">Tools & Softwares</h5>
          <div className="grid grid-cols-3 my-2 md:grid-cols-4">
            {tools.map((tool, i) => (
              <Skills value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
