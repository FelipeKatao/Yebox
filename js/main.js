import YeboxEngine from "./Framework/Yebox/Yebox.js";


let YeEngine = new YeboxEngine()
YeEngine.CreateBasicTags()



let Start = setInterval(()=>{
    // Add your methods for Sanddox here
    YeEngine.AlterThemeSystem(YeEngine.Theme.WhiteTheme)
    YeEngine.AlterTheme(YeEngine.Theme.SkyTheme)

    //End Your methods Here
    clearInterval(Start) //Dont erase this line
},400)