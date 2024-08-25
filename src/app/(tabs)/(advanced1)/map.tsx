import Image from "next/image";

const Map = () => {
  return (
    <fieldset className="">
      <legend>Map</legend>
      <div className="field-row-stacked">
        <Image
          src="/map.jpg"
          alt="MAp"
          className="object-cover object-center"
          width={150}
          height={150}
        />
      </div>
    </fieldset>
  );
};

export default Map;
