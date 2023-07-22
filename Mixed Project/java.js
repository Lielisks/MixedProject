// SEPETE EKLE VE ÇIKAR BÖLÜMÜ 
function image()
{
    var sonuc = document.getElementById("sonuc");
    sonuc.value = Number(sonuc.value) +1;
}
function azalt()
{
    
    var sonuc = document.getElementById("sonuc");
    sonuc.value = Number(sonuc.value) -1;

    if(sonuc.value<0)
    {
       sonuc=0;
       alert("Sepet (-) değerlere düşemez");
    }
}



// 1. RESİM
function sayi(v1)   
{
    return v1 - (v1 * 0.20);
}

var btn = document.querySelector(".btnHesap");

btn.onclick = function ()
{
    var v1 = Number(document.getElementById("sayi").value);
    var sonuc;  
    sonuc = sayi(v1);
    document.getElementById("fiyat").innerHTML = "İndirimli Fiyatı : " + sonuc;
}

// 2. RESİM
function sayi2(t1)
{
    return t1 - (t1 * 0.20);
}

var btn2 = document.querySelector(".btnHesap2");

btn2.onclick = function ()
{
    var t1 = Number(document.getElementById("sayi2").value);
    var sonuc2;  
    sonuc2 = sayi2(t1);
    document.getElementById("fiyat2").innerHTML =  "İndirimli Fiyatı : " + sonuc2;
}

// 3.RESİM 

function sayi3(z1)
{
    return z1 - (z1 * 0.20);
}

var btn3 = document.querySelector(".btnHesap3");

btn3.onclick = function ()
{
    var z1 = Number(document.getElementById("sayi3").value);
    var sonuc3;  
    sonuc3 = sayi3(z1);
    document.getElementById("fiyat3").innerHTML =  "İndirimli Fiyatı : "+ sonuc3;
}


// 4.RESİM

function sayi4(x1)
{
    return x1 - (x1 * 0.20);
}

var btn4 = document.querySelector(".btnHesap4");

btn4.onclick = function ()
{
    var x1 = Number(document.getElementById("sayi4").value);
    var sonuc4;  
    sonuc4 = sayi4(x1);
    document.getElementById("fiyat4").innerHTML =  "İndirimli Fiyatı : "+ sonuc4;
}

// 5. RESİM

function sayi5(g1)
{
    return g1 - (g1 * 0.20);
}

var btn5 = document.querySelector(".btnHesap5");

btn5.onclick = function ()
{
    var g1 = Number(document.getElementById("sayi5").value);
    var sonuc5;  
    sonuc5 = sayi5(g1);
    document.getElementById("fiyat5").innerHTML =  "İndirimli Fiyatı : " + sonuc5;
}

// 6.RESİM 
function sayi6(q1)
{
    return q1 - (q1 * 0.20);
}

var btn6 = document.querySelector(".btnHesap6");

btn6.onclick = function ()
{
    var q1 = Number(document.getElementById("sayi6").value);
    var sonuc6;  
    sonuc6 = sayi6(q1);
    document.getElementById("fiyat6").innerHTML =  "İndirimli Fiyatı : " + sonuc6;
}

// 7.RESİM
function sayi7(y1)
{
    return y1 - (y1 * 0.20);
}

var btn7 = document.querySelector(".btnHesap7");

btn7.onclick = function ()
{
    var y1 = Number(document.getElementById("sayi7").value);
    var sonuc7;  
    sonuc7 = sayi7(y1);
    document.getElementById("fiyat7").innerHTML =  "İndirimli Fiyatı : " + sonuc7;
}


// 8. RESİM 
function sayi8(s1)
{
    return s1 - (s1 * 0.20);
}

var btn8 = document.querySelector(".btnHesap8");

btn8.onclick = function ()
{
    var s1 = Number(document.getElementById("sayi8").value);
    var sonuc8;  
    sonuc8 = sayi8(s1);
    document.getElementById("fiyat8").innerHTML =  "İndirimli Fiyatı : " + sonuc8;
}