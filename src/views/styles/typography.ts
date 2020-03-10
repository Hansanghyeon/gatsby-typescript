import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 2,
  headerFontFamily: ['Noto Sans KR', 'Noto Sans', 'serif'],
  bodyFontFamily: ['Noto Sans KR', 'Noto Sans', 'serif'],
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
export const { rhythm, scale } = typography;
