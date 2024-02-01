

const Footer = () => {
  return (
    <footer className="bg-gray-500 text-white p-4 text-center font-medium absolute w-full bottom-0  ">
      <p className="text-sm mx-5">
        &copy;Amrit {new Date().getFullYear()} . All rights reserved.
      </p>
      <span className="bg-white text-black px-4 font-normal"> Email- Amrit.gill3005@gmail.com</span>
    </footer>
  );
};

export default Footer;
