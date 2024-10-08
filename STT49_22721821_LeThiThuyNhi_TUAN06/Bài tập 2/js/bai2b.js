function Reste(){
    document.getElementById('so1').value = null;
    document.getElementById('so2').value = null;
    document.getElementById('kq').value = null;
    document.getElementById("log1").innerText="";
    document.getElementById("log2").innerText="";
}

function Sum(){
    var so1=document.getElementById('so1').value ;
    var so2=document.getElementById('so2').value ;
    var s= parseFloat(so1) +parseFloat(so2);
    Check(so1,so2,s);
}

function Tru(){
    var so1=document.getElementById('so1').value ;
    var so2=document.getElementById('so2').value ;
    var s= parseFloat(so1) - parseFloat(so2);
    Check(so1,so2,s);
}
function Nhan(){
    var so1=document.getElementById('so1').value ;
    var so2=document.getElementById('so2').value ;
    var s= parseFloat(so1) * parseFloat(so2);
    Check(so1,so2,s);
}

function Chia(){
    var so1=document.getElementById('so1').value ;
    var so2=document.getElementById('so2').value ;
    //ktra b=0
    if(so2==0){
        document.getElementById("log2").innerText="Nhập b khác 0";
        document.getElementById('so2').value = null;
        document.getElementById('kq').value = null;
    }
    else{
        var s= parseFloat(so1) / parseFloat(so2);
        Check(so1,so2,s);
    }
    
}

function Check(a,b,c){
    //c là giá trị số
    if(isNaN(c)==false){
        document.getElementById('kq').value = c;
        document.getElementById("log1").innerText="";
        document.getElementById("log2").innerText="";
    }
    else{
        if(isNaN(a)==true && isNaN(b)== true){
            document.getElementById("log1").innerText="Nhập a ở dạng số";
            document.getElementById("log2").innerText="Nhập b ở dạng số";
            document.getElementById('so1').value = null;
            document.getElementById('so2').value = null;
            document.getElementById('kq').value = null;
        }
        else{
            if(isNaN(a)==true){
                document.getElementById("log1").innerText="Nhập a ở dạng số";
                document.getElementById('so1').value = null;
                document.getElementById('kq').value = null;
            }
            else{
                document.getElementById("log2").innerText="Nhập b ở dạng số";
                document.getElementById('so2').value = null;
                document.getElementById('kq').value = null;
            }
        }
    }
}