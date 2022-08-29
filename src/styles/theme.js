import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    typography: {
      fontFamily: 'IBM Plex Sans'
    },
    components:{
        MuiButton:{
          variants: [
            {
              props: { variant: 'primary' },
              style: {
                background: 'linear-gradient(90deg, #FF6489 0%, #F9B24E 100%)',
                color: '#ffffff',
              },
            },
            {
              props: { variant: 'secondary' },
              style: {
                background: 'transparent',
                border: '1px solid #FE7E02',
                color: '#FE7E02'
              },
            },
          ],

          styleOverrides: {
            root: {
              borderRadius: '12px',
              padding:'8px',
              textTransform:'capitalize',
              fontWeight:'700'
            },
          },
        }
    }
  });

export default theme