function changecolors(){
    let hex_code=['1','2','3', '4', '5', '6', '7','8', '9','0','A','B','C','D','E','F'];
    let result= "";
    for(let i=0; i<6;i++){
        let hex_random= Math.floor(Math.random()*hex_code.length);
        
        result+= hex_code[hex_random];
    }
    document.getElementById('code').innerHTML=result;
    document.getElementsByTagName('body')[0].style.background='#'+result;
}