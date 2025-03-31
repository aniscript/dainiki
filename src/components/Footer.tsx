import { ListTodo, Music } from "lucide-react";
import Quotes from "./Quotes";

const Footer = () => {
  return (
    <div className="absolute bottom-0 left-0">
      <div className="flex justify-between items-center w-screen py-4 px-6">
        <div className="flex-2">
          <Quotes />
        </div>
        <section className="flex flex-1 gap-2 justify-end">
          <ListTodo />
          <Music />
        </section>
      </div>
    </div>
  );
};

export default Footer;
