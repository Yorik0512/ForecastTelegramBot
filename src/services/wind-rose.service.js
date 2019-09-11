import WindRoseData from '../configs/wind-rose.config';

class WindRose {
  direction(deg) {
    let value = '';
    WindRoseData.forEach((item) => {
      if ((item.from < deg) && (deg < item.to)) value = item.title;
    });
    return value;
  }
}

const WindRoseService = new WindRose();
export default WindRoseService;
