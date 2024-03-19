import Modal from ".";
import TechStack from "../TechStack";

const CSSModal = () => {
  return (
    <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-css3 stroke-blue-600"
              width="100"
              height="100"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#000000"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
              <path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
            </svg>
      <div className='text-center'>
      <h1 className="font-extrabold text-2xl dark:text-white">Cascading Style Sheets</h1>
      <p className='dark:text-white'>CSS is the most basic form of styling a website, it's not commonly used in its base form but its a must-know for any web developer.</p>
      </div>
    </div>
  );
};
export default CSSModal;
