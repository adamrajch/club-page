import AboutCard from "./Card";
import { InstagramOutlined } from "@ant-design/icons";

const About = () => {
  return (
    <div className="container">
      {/* <div className="text-4xl">What are we about</div> */}
      <div>
        <ul>
          <li className="text-5xl text-red-900">ten·don</li>
          <li className="text-xl">/ˈtendən/</li>
          <li className="italic text-xl">noun</li>
          <li className="text-lg">
            1. a flexible but inelastic cord of strong fibrous collagen tissue
            attaching a muscle to a bone.
          </li>
          <li className="text-lg">
            2. what ties together the hearts and souls of arm wrestlers
          </li>
        </ul>
      </div>
      <div>images</div>
      <div className="">
        We are one of Chicago's newest arm wrestling clubs, founded in the
        summer of 2020. Despite having a vibrant arm wrestling culture on the
        outskirts of the city, Chicago does not have a central club....until
        now. Tendon Clan usually meets in the city or in the northshore suburbs
        of Chicago. We host practices almost everyweek and will be attending
        various tournaments as a team. We have many beginners so newcomers are
        welcome to join.
      </div>

      <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-col">
        <AboutCard />
        <AboutCard />
      </div>
    </div>
  );
};

export default About;
