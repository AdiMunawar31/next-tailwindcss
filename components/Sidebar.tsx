import { AiFillGithub, AiFillInstagram, AiFillYoutube } from 'react-icons/ai';
import { BsFillFileEarmarkArrowDownFill } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';

const Sidebar = () => {
  return (
    <div>
      {/* My Information */}
      <img src="https://avatars.githubusercontent.com/u/57015700?v=4" alt="avatar" className="w-32 mx-auto rounded-full" />
      <h3 className="my-2 text-2xl font-medium tracking-wider font-">
        <span className="text-blue-600">Adi</span> Munawar
      </h3>
      <p className="px-2 py-1 my-2 bg-gray-200 rounded-full">Web Developer</p>
      <a className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full ">
        <BsFillFileEarmarkArrowDownFill className="w-4 h-4 mr-1 -mt-1" />
        Download Resume
      </a>

      {/* Social Icon */}
      <div className="flex justify-around mx-auto my-3 text-blue-500">
        <a href="https://www.youtube.com/channel/UCx7GJoa9DAyngsmAQJ_uGLA" target="_blank">
          <AiFillYoutube className="cursor-pointer w-7 h-7" />
        </a>
        <a href="https://github.com/AdiMunawar31" target="_blank">
          <AiFillGithub className="cursor-pointer w-7 h-7" />
        </a>
        <a href="https://www.instagram.com/mhunawar31/" target="_blank">
          <AiFillInstagram className="cursor-pointer w-7 h-7" />
        </a>
      </div>

      {/* Address */}
      <div className="py-4 my-3 bg-gray-200" style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
        <div className="flex justify-center mt-2 space-x-1 align-center">
          <GoLocation />
          <span>Kuningan - Indonesia</span>
        </div>
        <p className="my-2">munawar.adi31@gmail.com</p>
        <p className="my-2">+628-156-375-4507</p>
      </div>

      {/* Button */}
      <button className="w-9/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-blue-500 to-blue-600 focus:outline-none" onClick={() => window.open('mailto:munawar.adi31@gmail.com')}>
        Email Me
      </button>
      <button className="w-9/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-blue-500 to-blue-600">Change Theme</button>
    </div>
  );
};

export default Sidebar;
