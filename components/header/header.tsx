import { Heading } from "./heading/heading";
import { Navbar } from "./navbar/navbar";

export const Header = () => {
  return (
    <header>
      <div>
        <Navbar />
      </div>
      <div>
        <Heading />
      </div>
    </header>
  );
};
