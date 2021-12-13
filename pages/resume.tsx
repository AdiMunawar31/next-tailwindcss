import { languages, tools } from '../data';
import Skills from '../components/Skills';

const Resume = () => {
  return (
    <div className="px-6 py-2">
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Computer Science Engineering</h5>
            <p className="font-semibold">Academy of Technology (2017-2021)</p>
            <p className="my-3">I am currently pursuing B.tech in Computer Science Engineering from Academy of Technology</p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Software Developer Jr.</h5>
            <p className="font-semibold">Tata Consultancy Services</p>
            <p className="my-3">I don't know why I am doing this job</p>
          </div>
        </div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="grid grid-cols-2 my-2 md:grid-cols-4">
            {languages.map((language, i) => (
              <Skills value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="grid grid-cols-2 my-2 md:grid-cols-4">
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
