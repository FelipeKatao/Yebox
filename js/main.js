import YeboxEngine from "./Framework/Yebox/Yebox.js";


let YeEngine = new YeboxEngine()
//Set your Themes here
YeEngine.AlterThemeSystem(YeEngine.Theme.DarkTheme)
YeEngine.AlterTheme(YeEngine.Theme.SkyTheme) 
//End Themes 
YeEngine.CreateBasicTags()



let Start = setInterval(()=>{
    // Add your methods for Sanddox here
    let ter = document.getElementById("terreno").getElementsByClassName("card")[0]
    ter.classList+="Terreno"
    ter.style.width="90vh"
    ter.style.marginTop="30vh"
    ter.style.marginLeft="-5vh"
    ter.style.backgroundImage= "Url('../img/grass.png')"

    let Rabbit = document.getElementById("rabbit_1")
    Rabbit.style.marginLeft="-30vh"
    Rabbit.style.marginTop="20vh"

    let arvore = document.getElementById("arvore")
    arvore.style.marginLeft="-80vh"
    arvore.style.marginTop="-6vh"
    //End Your methods Here
    clearInterval(Start) //Dont erase this line
},400)
