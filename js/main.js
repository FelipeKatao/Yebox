import YeboxEngine from "./Framework/Yebox/Yebox.js";


let YeEngine = new YeboxEngine()
YeEngine.CreateBasicTags()



let Start = setInterval(()=>{
    // Add your methods for Sanddox here
    YeEngine.AlterThemeSystem(YeEngine.Theme.WhiteTheme)
    YeEngine.AlterTheme(YeEngine.Theme.SkyTheme) 
    YeEngine.ModifyW(YeEngine.GetlementById("card"),"90vh")
    YeEngine.ModifyH(YeEngine.GetlementById("card"),"100vh")
    //End Your methods Here
    clearInterval(Start) //Dont erase this line
},400)

let Update = setInterval(()=>{
    if(YeEngine.Questions_save[0] != undefined)
    {
        YeEngine.ModifyContentClass(document.getElementById("card"),YeEngine.Questions_save[0])
        clearInterval(Update)
    }
},600)