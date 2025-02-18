import React from "react";
import { JSX } from "react";
import { SolarDate } from "../../types.ts";

interface SolarDateSelectionInterface {
  solarDate: SolarDate;
  onChangeSolarDate: (date: SolarDate) => void;
}

export const SolarDateSelection = ({
  solarDate,
  onChangeSolarDate,
}: SolarDateSelectionInterface): JSX.Element => {
  return (
    <fieldset>
      <legend>Select Sol or Earth date:</legend>
      <div>
        <input
          type="radio"
          id="sol"
          name="sol"
          value={SolarDate.SOL}
          checked={solarDate === SolarDate.SOL}
          onChange={() => onChangeSolarDate(SolarDate.SOL)}
        />
        <label htmlFor="sol">Sol</label>
      </div>
      <div>
        <input
          type="radio"
          id="earth"
          name="earth"
          value={SolarDate.EARTH}
          checked={solarDate === SolarDate.EARTH}
          onChange={() => onChangeSolarDate(SolarDate.EARTH)}
        />
        <label htmlFor="earth">Earth</label>
      </div>
    </fieldset>
  );
};
