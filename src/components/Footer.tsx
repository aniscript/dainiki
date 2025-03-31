import { ListTodo, Music } from "lucide-react";
import Quotes from "./Quotes";

const Footer = () => {
  return (
    <div className="absolute bottom-0 left-0">
      <div className="flex justify-between items-center w-screen py-4 px-6">
        <div>
          <Quotes />
        </div>
        <section className="flex gap-2">
          <ListTodo />
          <Music />
        </section>
      </div>
    </div>
  );
};

export default Footer;
