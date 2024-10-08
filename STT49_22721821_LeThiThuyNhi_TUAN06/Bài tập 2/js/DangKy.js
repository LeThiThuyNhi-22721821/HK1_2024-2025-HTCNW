function send(){
    var ar=document.getElementsByTagName('input');
    var name= ar[0].value;
    var mk = ar[1].value;
    if(name==""|| mk==""){
        alert("Vui lòng nhập thông tin");
        return;
    }
}
