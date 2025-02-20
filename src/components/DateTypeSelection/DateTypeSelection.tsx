import React from "react";
import { JSX } from "react";
import { DateTypes } from "../../types.ts";

interface SolarDateSelectionInterface {
  dateType: DateTypes;
  onChangeDateType: (date: DateTypes) => void;
}

export const DateTypeSelection = ({
  dateType,
  onChangeDateType,
}: SolarDateSelectionInterface): JSX.Element => {
  return (
    <fieldset className="date-type-selection">
      <legend>Select Sol or Earth date:</legend>
      <div>
        <input
          type="radio"
          id="sol"
          name="sol"
          value={DateTypes.SOL}
          checked={dateType === DateTypes.SOL}
          onChange={() => onChangeDateType(DateTypes.SOL)}
        />
        <label htmlFor="sol">Sol</label>
      </div>
      <div>
        <input
          type="radio"
          id="earth"
          name="earth"
          value={DateTypes.EARTH}
          checked={dateType === DateTypes.EARTH}
          onChange={() => onChangeDateType(DateTypes.EARTH)}
        />
        <label htmlFor="earth">Earth</label>
      </div>
    </fieldset>
  );
};
