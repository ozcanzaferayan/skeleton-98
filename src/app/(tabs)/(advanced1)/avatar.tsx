import Image from "next/image";

const Avatar = () => {
  return (
    <fieldset className="">
      <legend>Appearance</legend>
      <div className="field-row-stacked">
        <div className="relative w-full h-36 sm:w-[150px] sm:h-[200px]">
          <Image
            src="/skeleton.jpg"
            alt="Skeleton"
            className="object-cover object-center"
            layout="fill"
          />
        </div>
      </div>
    </fieldset>
  );
};

export default Avatar;
