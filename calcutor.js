const displaycont =(content)=>{
    result.value+=content
}
//clear
function calclear(clear){
    result.value=""
}
//result
function calresult(){
    result.value=eval(result.value)
}
//backspace
function removeDigit(){
    result.value= result.value.slice(0,-1)
}