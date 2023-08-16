// import './App.css'
import Home from './pages/home/Index'
import { ThemeProvider } from 'styled-components'

interface Theme {
  MainThemeColor:string,
  OrangeBackground:string,
  OrangeLine:string,
  MainBackgroundColor:string,
  MainContainerWidth:string
}

const theme:Theme= {
  MainThemeColor:"#592D82",
  OrangeBackground:"#F05023",
  OrangeLine:"#F99C24",
  MainBackgroundColor:"#F0F0F0",
  MainContainerWidth:"1000px"
}


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Home/>
      </ThemeProvider>
    </>
  )
}

export default App
