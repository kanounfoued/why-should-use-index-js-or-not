import { AboutHeader, Button } from "../components/About";

function About() {
  return (
    <>
      <h1>
        <AboutHeader />
      </h1>

      <div className="card">
        <Button label="home" to="/" />
      </div>
    </>
  );
}

export default About;
