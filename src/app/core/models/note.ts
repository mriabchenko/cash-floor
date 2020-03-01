import {Currency} from '../enums/currency';

export interface INote {
  imgFrontUrl: string;
  imgBackUrl: string;
  nominal: number;
  currency: Currency;
  heightMm: number;
  widthMm: number;
}

export class Note implements INote {
  imgFrontUrl: string;
  imgBackUrl: string;
  nominal: number;
  currency: Currency;
  heightMm: number;
  widthMm: number;
}
