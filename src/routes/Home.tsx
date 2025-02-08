import { Button, HomeHeader } from "../components/Home";
// import Button from "../components/Home/button";
// import HomeHeader from "../components/Home/HomeHeader";

function Home() {
  /**
   *
   * the require statement is used to import modules
   * require will locate, download and execute the code of each dependency, which will add an extra  layer of complexity to the code.
   *
   */

  return (
    <>
      <h1>
        <HomeHeader />
      </h1>
      <div className="card">
        <Button label="About" to="about" />
      </div>
    </>
  );
}

export default Home;
