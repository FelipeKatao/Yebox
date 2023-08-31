import oct8 from "../Oct8/Oct8.js"

class YeboxEngine{
    _oct8 = new oct8()
    Questions_save =[]
    Theme = {SkyTheme:"sky",DarkTheme:"dark",WhiteTheme:"white",HelloTheme:"pink",YeTheme:"yellow",starndartTheme:"standart",GreenTheme:"green",TemaCinza:"gray"}
    CreateBasicTags(){
        this._oct8.createNewTag("rabbit","<img src='../../../img/08b4246c864362eec7d6eea89963f1e2cd0d8471_hq.gif' height='90'>")
        this._oct8.createNewTag("fox","<img src='../../../img/3IsJ.gif' height='90'>")
        this._oct8.createNewTag("tree","<img src='../../../img/Tree.png' height='320'>")
        this._oct8.createNewTag("ghost","<img src='../../../img/monster.gif' height='50'>")
        this._oct8.createNewTag("grass","<img src='../../../img/grass.png' height='100'>")
        this._oct8.createNewTag("card","<div id='card' class='card'></div>")
        this._oct8.createNewTag("question",()=>{
            document.getElementById("SandBox").innerHTML+="<div id='QuestioN-bx' class='blackRole'></div>"
            document.getElementById("QuestioN-bx").innerHTML+="<div class='qt_0'><input id='qt_input' type='text'><button id='qt_0_3'>Send</button></div>"
            document.getElementById("qt_0_3").addEventListener("click",()=>{
                this.Questions_save.push(document.getElementById("qt_input").value)
                document.getElementById("QuestioN-bx").remove()
            })
        })
        this._oct8.ReactiveTags("SandBox")
    }
    ModifyH(Element,height="10vh"){
        Element.style.height = height
    }

    ModifyW(Element,height="10vh"){
        Element.style.width = height
    }
    MoveObject(ObjectName="IdName",position="10vh",Axis="X"){
        let Obj = document.getElementById(ObjectName)
        let errorDoc = true
        if(Axis == "X" || Axis =="x")
        {
            Obj.style.position+="absolute"
            Obj.style.marginLeft+=position
            errorDoc= false
        }
        if(Axis == "Y" || Axis == "y"){
            Obj.style.position="absolute"
            Obj.style.marginTop=position
            errorDoc = false
        }
        else
        {
            if(errorDoc==true)
            {
                document.getElementById("SandBox").innerHTML="#Axis error: Error "+Axis+" no exist."
            }
            
        }
    }
    AlterTheme(Theme){
        document.getElementById("SandBox").className=Theme
    }
    AlterThemeSystem(Theme)
    {
        document.body.className+=" "+Theme+" noneBorder"
    }
    ClearSandBox(){
        document.getElementById("SandBox").innerHTML=""
    }
    ModifyContentClass(Element,Content){
        Element.innerHTML+=Content
    }
    GetElementByClass(className,Index){
        return document.getElementsByClassName(className)[Index]
    }
    GetlementById(Idname){
        return document.getElementById(Idname)
    }
    ReloadTags(){
        this._oct8.ReactiveTags("SandBox")
    }
}

export default YeboxEngine