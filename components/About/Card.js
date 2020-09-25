import {
  GithubOutlined,
  InstagramOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
const Card = () => {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex mr-2 mb-4 ">
      <div
        className="h-48 lg:h-auto lg:w-64 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-cover bg-center border border-grey-500"
        style={{ backgroundImage: "url(/arnold.jpg)" }}
      ></div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-grey-700 rounded-b lg:rounded-b-none lg:rounded-r pt-3 px-3 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-white-900 font-bold text-xl mb-2 ">
            Adam Rajchwald
          </div>
          <p className="text-white-600 text-md italic">
            Co-Creator of Tendon Clan
          </p>
          <p className="text-white-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
          <div className="flex text-white-700 items-end justify-around">
            <InstagramOutlined />
            <GithubOutlined />
            <FacebookOutlined />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
