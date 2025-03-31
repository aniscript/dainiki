import Quotes from "./Quotes";

const Footer = () => {
  return (
    <div className="absolute bottom-0 left-0">
      <div className="flex justify-between items-stretch w-screen py-4 px-6">
        <div>
          <Quotes />
        </div>
        <div>right</div>
      </div>
    </div>
  );
};

export default Footer;
