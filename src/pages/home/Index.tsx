import Header from "../../components/headerFooter/Index";
import logo from '../../assets/logo.svg'
import { MenuButton, MenuLink } from "./IndexStyle";
interface PropInterface{
    logo:string,
    list:any
}

const headerData:PropInterface = {
    logo,
    list:[
        {
            element:MenuLink,
            text:"Соревнования"
        },
        {
            element:MenuLink,
            text:"Рейтинг"
        },
        {
            element:MenuButton,
            text:"Войти"
        },
        {
            element:MenuButton,
            text:"Зарегистрироваться"
        },
        
    ]
}



const Home = function(){
    return <><Header {...headerData} ></Header></>
}

export default Home