const Attributes = () => {
  return (
    <fieldset className="">
      <legend>Attributes</legend>
      <div className="field-row-stacked">
        <label className="font-bold w-16" htmlFor="qi">
          Qi Blood
        </label>
        <div className="w-full bg-gray-200 h-2 dark:bg-gray-700">
          <div className="bg-red-700 h-2" style={{ width: "90%" }}></div>
        </div>
      </div>
      <div className="field-row-stacked">
        <label className="font-bold w-16" htmlFor="demonDefense">
          Demon Defense
        </label>
        <div className="w-full bg-gray-200 h-2 dark:bg-gray-700">
          <div className="bg-blue-700 h-2" style={{ width: "100%" }}></div>
        </div>
      </div>
      <div className="field-row-stacked">
        <label className="font-bold w-16" htmlFor="skill">
          Skill
        </label>
        <div className="w-full bg-gray-200 h-2 dark:bg-gray-700">
          <div className="bg-orange-600 h-2" style={{ width: "60%" }}></div>
        </div>
      </div>
    </fieldset>
  );
};

export default Attributes;
