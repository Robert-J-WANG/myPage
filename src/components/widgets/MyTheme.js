import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#9febad',
      contrastText: '#485469',
    },
  },
  components: {
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: '#c1d3cf', // 字体颜色
          border: '1px solid #485469', // 边框颜色
          transition: 'all 0.5s ease-in-out',
          '&:hover': {
            transform: 'rotate(45deg)', // 鼠标 hover 时旋转
          },
          '&.Mui-selected': {
            backgroundColor: '#9febad', // 点击时背景颜色
            color: '#1b1d24', // 选中时文字颜色
            '&:hover': {
              backgroundColor: '#9febad', // 保持 hover 和选中背景一致
            },
          },
        },
      },
    },
  },
});

export default theme;
