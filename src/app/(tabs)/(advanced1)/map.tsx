import Image from "next/image";

const Map = () => {
  return (
    <fieldset className="">
      <legend>Map</legend>
      <div className="field-row-stacked">
        <div className="relative w-full h-36 sm:w-[150px] sm:h-[150px]">
          <Image
            src="/map.jpg"
            alt="Map"
            className="object-cover object-center"
            layout="fill"
          />
        </div>
      </div>
    </fieldset>
  );
};

export default Map;
