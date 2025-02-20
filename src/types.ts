export enum DateTypes {
  SOL = "sol",
  EARTH = "earth",
}

type ValuePiece = Date | null;
export type EarthDateValue = ValuePiece | [ValuePiece, ValuePiece];
