import { ChangeTheme } from "../../../reducers/ThemeReducer"
import { useSelector,useDispatch } from "react-redux"
const DarkLightTheme = () => {
    const themecolor=useSelector((state)=>state.theme.value)
    const dispatch=useDispatch()
    const themeHandler=()=>{
        dispatch(ChangeTheme(themecolor==='white'?'black':'white'))
    }
  return (
    <div>
        <button onClick={themeHandler} className={`bg-${themecolor==='white'?'black':'white'} text-${themecolor==='white'?'white':'black'} rounded-full px-2 py-1 font-bold`}>
            {themecolor==='white'?'🌙 Dark ':'☀️ Light '}
        </button>
    </div>
  )
}

export default DarkLightTheme