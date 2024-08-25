import Image from "next/image";

const Avatar = () => {
  return (
    <fieldset className="">
      <legend>Appearance</legend>
      <div className="field-row-stacked">
        <Image
          src="/skeleton.jpg"
          alt="Skeleton"
          className="object-cover object-center"
          width={150}
          height={200}
        />
      </div>
    </fieldset>
  );
};

export default Avatar;
