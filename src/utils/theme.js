import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#0C2E59'
        },

        secondary: {
            main: '#3F7EA6'
        }
    },
    components :{
        MuiButton: {
            styleOverrides: {
                root: {
                    color: 'white',
                    height: '48px',
                    fontSize: '16px',
                    lineHeight: '20px',
                    fontWeight: '500',
                    borderRadius: '4px',
                }

            }
        }
    }
})

export default theme;