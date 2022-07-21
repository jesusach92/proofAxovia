import Navbar from "./Navbar";
import Section from "./Section";
import TopBar from "./TopBar";
const Main = () => {
  return (
    <div className="container-fluid m-0 p-0">
      <TopBar></TopBar>
      <Navbar></Navbar>
      <Section></Section>
    </div>
  );
};

export default Main;
