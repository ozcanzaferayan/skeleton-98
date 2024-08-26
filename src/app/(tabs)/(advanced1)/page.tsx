import Attributes from "@/app/(tabs)/(advanced1)/attributes";
import Avatar from "@/app/(tabs)/(advanced1)/avatar";
import Buttons from "@/app/(tabs)/(advanced1)/buttons";
import Equipment from "@/app/(tabs)/(advanced1)/equipment";
import Map from "@/app/(tabs)/(advanced1)/map";
import RoleSetting from "@/app/(tabs)/(advanced1)/role-setting";

const Advanced1 = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <RoleSetting />
        <div className="flex flex-col">
          <Equipment />
          <Attributes />
        </div>
        <div className="flex flex-col">
          <Avatar />
          <Map />
        </div>
      </div>
      <Buttons />
      <div className="status-bar">
        <p className="status-bar-field">Click to Save Settings</p>
      </div>
    </div>
  );
};

export default Advanced1;
