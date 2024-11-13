// images.ts
export function importAllImages(r: RequireContext) {
  return r.keys().map(r);
}

const day1_Images_cannot_stop = importAllImages(require.context('../../assets/images/cannot_stop_2023/day1', false, /\.(png|jpe?g|svg)$/));
const day2_Images_cannot_stop = importAllImages(require.context('../../assets/images/cannot_stop_2023/day2', false, /\.(png|jpe?g|svg)$/));
const day3_Images_cannot_stop = importAllImages(require.context('../../assets/images/cannot_stop_2023/day3', false, /\.(png|jpe?g|svg)$/));

export const Images_cannot_stop = {
  day1: day1_Images_cannot_stop, 
  day2: day2_Images_cannot_stop,
  day3: day3_Images_cannot_stop,
};
