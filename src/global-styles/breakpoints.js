const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: `860px`,
  laptop: `1130px`,
};

export const device = {
  laptop: `(max-width : ${size.laptop})`,
  tablet: `(max-width : ${size.tablet})`,
  mobileL: `(max-width: ${size.mobileL})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileS: `(max-width: ${size.mobileS})`,
};
