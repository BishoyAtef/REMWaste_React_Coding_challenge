
import yarder4 from '../assets/imgs/yarder4.jpg';
import yarder5 from '../assets/imgs/yarder5.jpg';
import yarder6 from '../assets/imgs/yarder6.jpg';
import yarder8 from '../assets/imgs/yarder8.jpg';
import yarder10 from '../assets/imgs/yarder10.jpg';
import yarder12 from '../assets/imgs/yarder12.jpg';
import yarder14 from '../assets/imgs/yarder14.jpg';
import yarder16 from '../assets/imgs/yarder16.jpg';
import yarder20 from '../assets/imgs/yarder20.jpg';
import yarder40 from '../assets/imgs/yarder40.jpg';
import defaultskip from '../assets/imgs/defaultskip.png'

const skipImages = {
  4 : yarder4,
  5 : yarder5,
  6 : yarder6,
  8 : yarder8,
  10: yarder10,
  12: yarder12,
  14: yarder14,
  16: yarder16,
  20: yarder20,
  40: yarder40
};

const getSkipImage = (skipSize) => {
    return skipImages[skipSize] || defaultskip;
}

export default getSkipImage;