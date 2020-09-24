const Yeet = ({ tendon }) => {
  console.log(tendon);
  return (
    <div className="max-w-sm rounded overflow-hidden border-solid border-4 border-white-600 m-1 ">
      <img
        className=" object-cover h-48 w-full"
        src={tendon.url}
        alt="Sunset in the mountains"
        // width="50%"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{tendon.name}</div>

        <ul className="text-lg">
          <li>Age: {tendon.age}</li>
          <li>Height: {tendon.height}</li>
          <li>Weight: {tendon.weight}</li>
        </ul>
      </div>
    </div>
  );
};
export default Yeet;
