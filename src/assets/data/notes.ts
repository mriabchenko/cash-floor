import {INote} from '../../app/core/models/note';
import {Currency} from '../../app/core/enums/currency';

export const NOTES: INote[] = [
  {
    imgFrontUrl: 'assets/img/notes/uah/20-1.png',
    imgBackUrl: 'assets/img/notes/uah/20-2.png',
    nominal: 20,
    currency: Currency.uah,
    heightMm: 69,
    widthMm: 130,
  },
  {
    imgFrontUrl: 'assets/img/notes/uah/50-1.png',
    imgBackUrl: 'assets/img/notes/uah/50-2.png',
    nominal: 50,
    currency: Currency.uah,
    heightMm: 72,
    widthMm: 136,
  },
  {
    imgFrontUrl: 'assets/img/notes/uah/100-1.png',
    imgBackUrl: 'assets/img/notes/uah/100-2.png',
    nominal: 100,
    currency: Currency.uah,
    heightMm: 75,
    widthMm: 142,
  },
  {
    imgFrontUrl: 'assets/img/notes/uah/200-1.png',
    imgBackUrl: 'assets/img/notes/uah/200-2.png',
    nominal: 200,
    currency: Currency.uah,
    heightMm: 75,
    widthMm: 148,
  },
  {
    imgFrontUrl: 'assets/img/notes/uah/500-1.png',
    imgBackUrl: 'assets/img/notes/uah/500-2.png',
    nominal: 500,
    currency: Currency.uah,
    heightMm: 75,
    widthMm: 154,
  },
  {
    imgFrontUrl: 'assets/img/notes/uah/1000-1.png',
    imgBackUrl: 'assets/img/notes/uah/1000-2.png',
    nominal: 1000,
    currency: Currency.uah,
    heightMm: 75,
    widthMm: 160,
  },
];
