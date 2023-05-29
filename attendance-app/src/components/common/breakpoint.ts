export const size = {
  mobileSize: '767px',
  tabletSize: '1150px',
  pcSize: '1300px',
}

export const device = {
  mobile: `(max-width: ${size.mobileSize})`,
  tablet: `(min-width: ${size.mobileSize}) and (max-width: ${size.tabletSize})`,
  pc: `(min-width: ${size.tabletSize})`,
}
