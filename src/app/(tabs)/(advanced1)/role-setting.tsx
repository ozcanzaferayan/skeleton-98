const RoleSetting = () => {
  return (
    <fieldset className="w-36">
      <legend>Role Setting</legend>
      <div className="field-row">
        <label className="font-bold w-16" htmlFor="name">
          Name
        </label>
        <select id="name">
          <option>Skull Warrior</option>
        </select>
      </div>
      <div className="field-row">
        <label className="font-bold w-16" htmlFor="gender">
          Gender
        </label>
        <select id="gender">
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>
      <div className="field-row">
        <label className="font-bold w-16" htmlFor="level">
          Level
        </label>
        <select id="level">
          <option>Senior</option>
        </select>
      </div>
      <div className="field-row">
        <label className="font-bold w-16" htmlFor="status">
          Status
        </label>
        <select id="status">
          <option>Healthy</option>
        </select>
      </div>
      <div className="field-row">
        <label className="font-bold w-16">Grade</label>
        <input className="w-8" type="text" value="61" />
        <input className="w-8" type="text" value="120" />
      </div>
      <div className="field-row">
        <label className="font-bold w-16">Speed</label>
        <input className="w-8" type="text" value="90" />
      </div>
      <div className="field-row">
        <label className="font-bold w-16">Power</label>
        <input className="w-8" type="text" value="74" />
      </div>
      <div className="field-row">
        <label className="font-bold w-16">Endurance</label>
        <input className="w-8" type="text" value="68" />
      </div>
      <div className="field-row">
        <label className="font-bold w-16">Magic</label>
        <input className="w-8" type="text" value="91" />
      </div>
      <div className="field-row">
        <label className="font-bold w-16">Hitpoint</label>
        <input className="w-8" type="text" value="70" />
      </div>
      <div className="field-row">
        <label className="font-bold w-16">Hurt</label>
        <input className="w-8" type="text" value="87" />
      </div>

      <div className="mt-4" />

      <div className="field-row">
        <label className="font-bold w-16" htmlFor="arms">
          Arms
        </label>
        <select id="arms">
          <option>Axe</option>
        </select>
      </div>
      <div className="field-row">
        <label className="font-bold w-16" htmlFor="helmet">
          Helmet
        </label>
        <select id="helmet">
          <option>God of War</option>
        </select>
      </div>
      <div className="field-row">
        <label className="font-bold w-16" htmlFor="shield">
          Shield
        </label>
        <select id="shield">
          <option>Storm Protector</option>
        </select>
      </div>
      <div className="field-row">
        <label className="font-bold w-16" htmlFor="wrist">
          Wrist
        </label>
        <select id="wrist">
          <option>Mad Demon</option>
        </select>
      </div>
      <div className="field-row">
        <label className="font-bold w-16" htmlFor="boots">
          Boots
        </label>
        <select id="boots">
          <option>Copper Boots</option>
        </select>
      </div>
      <div className="field-row">
        <label className="font-bold w-16" htmlFor="band">
          Band
        </label>
        <select id="band">
          <option>Record Band</option>
        </select>
      </div>
    </fieldset>
  );
};

export default RoleSetting;
