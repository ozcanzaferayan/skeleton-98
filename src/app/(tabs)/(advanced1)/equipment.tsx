const Equipment = () => {
  return (
    <fieldset className="">
      <legend>Equipment</legend>
      <div className="field-row">
        <label className="font-bold w-16" htmlFor="equipment">
          Equipment
        </label>
        <select id="equipmentame">
          <option>Band of Indomitable</option>
        </select>
      </div>
      <div className="field-row">
        <label className="font-bold w-16" htmlFor="prestige">
          Prestige
        </label>
        <select id="prestige">
          <option>Weiwu</option>
        </select>
      </div>
      <div className="field-row">
        <label className="font-bold w-16" htmlFor="divine">
          Divine
        </label>
        <select id="divine">
          <option>Beidou Seven</option>
        </select>
      </div>
      <div className="field-row">
        <label className="font-bold w-16" htmlFor="spell">
          Spell
        </label>
        <select id="spell">
          <option>Highly Toxic Water</option>
        </select>
      </div>
      <div className="field-row">
        <label className="font-bold w-16" htmlFor="reagent">
          Reagent
        </label>
        <select id="reagent">
          <option>Blue Potion</option>
        </select>
      </div>
      <div className="field-row">
        <label className="font-bold w-16" htmlFor="potions">
          Potions
        </label>
        <select id="potions">
          <option>2 Two</option>
        </select>
      </div>
      <div className="field-row">
        <label className="font-bold w-16" htmlFor="money">
          Money
        </label>
        <select id="money">
          <option>3200</option>
        </select>
      </div>
      <div className="field-row">
        <label className="font-bold w-16" htmlFor="weight">
          Weight
        </label>
        <select id="weight">
          <option>55</option>
        </select>
      </div>
      <div className="field-row">
        <label className="font-bold w-16" htmlFor="amulet">
          Amulet
        </label>
        <select id="amulet">
          <option>Bloodsucking Amulet</option>
        </select>
      </div>
      <div className="field-row">
        <label className="font-bold w-16" htmlFor="bones">
          Bones
        </label>
        <select id="bones">
          <option>Millenuim Ashes</option>
        </select>
      </div>
      <div className="field-row">
        <label className="font-bold w-16" htmlFor="organ">
          Organ
        </label>
        <select id="organ">
          <option>Brain</option>
        </select>
      </div>
    </fieldset>
  );
};

export default Equipment;
