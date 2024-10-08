function Chon(){
    document.getElementById("log").innerText="";
    let check1=document.getElementById ('checkb1');
    let check2=document.getElementById ('checkb2');
    let check3=document.getElementById ('checkb3');
    let check4=document.getElementById ('checkb4');
    let check5=document.getElementById ('checkb5');
    let check6=document.getElementById ('checkb6');

    let text="";
    if(check1.checked){
        text+= " Trung Nguyên";
    }
    if(check2.checked){
       text+=" Me Kong,";
    }
    if(check3.checked){
        text+=" New life,";
    }
    if(check4.checked){
        text+=" Ocean Blue,";
    }
    if(check5.checked){
        text+=" Blue Space,";
    }
    if(check6.checked){
        text+=" Windows,";
    }

    document.getElementById("log").innerText=text.trim();
}