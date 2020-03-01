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
  depthMm: 0.11; // from usd
  weight: 0.0012; // from usd

  constructor(
    {
      imgFrontUrl,
      imgBackUrl,
      nominal,
      currency,
      heightMm,
      widthMm
    }: INote) {
    this.imgFrontUrl = imgFrontUrl;
    this.imgBackUrl = imgBackUrl;
    this.nominal = nominal;
    this.currency = currency;
    this.heightMm = heightMm;
    this.widthMm = widthMm;
  }


  get height(): number {
    return this.heightMm / 1000;
  }

  get width(): number {
    return this.widthMm / 1000;
  }

  get depth(): number {
    return this.depthMm / 1000;
  }

  get area(): number {
    return this.height * this.width;
  }

  get getM2Price(): number {
    return 1 / this.area * this.nominal;
  }
}
