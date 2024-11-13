// images.ts
export function importAllImages(r: RequireContext) {
  return r.keys().map(r);
}

const activity = importAllImages(
  require.context(
    "../../assets/images/indivisible/activity",
    false,
    /\.(png|jpe?g|svg)$/
  )
);
const exhibition = importAllImages(
  require.context(
    "../../assets/images/indivisible/exhibition",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

export const activityPhotos = {
  activity: activity,
  exhibition: exhibition,
};
