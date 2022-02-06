console.log(document);

// bech n5arjou les buttons elli 3andhom classname "plus" lkol 
var plus = document.querySelectorAll('.plus');
// nafs le7keya benesba lel les buttons "minus"
var minus = document.querySelectorAll('.minus');
var sum = document.getElementById('total');
var prices = document.querySelectorAll('.price');
var like =document.querySelectorAll('.like');
console.log(plus);

// bech na3mlou boucle bech nparkouriw tableau eli fih les buttons "+" lkol 
// w bech najoutiw function "inc" te5dem kol maneklikiw 
for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener('click' ,inc)
    
}
// nafs le7keya benesba lel les buttons "-"
for (let i = 0; i < minus.length; i++) {
     minus[i].addEventListener('click' , dec );
     // addEventListener t5alli l elemnt elli 7achtek bih ytaba3 event mta3 dom 
     // kima par exemple l click, l hover, key press w mba3d y5addem function mou3ayna
     // kol maysir l event hedheka
    
}
for (let i = 0; i<like.length; i++) {
    like [i].addEventListener('click', changecolor);
}
function inc(event){
    // event jeyna mel function addeventlistener andou property target bech najmou 
    // ncibliw win sar l event 
    var cible = event.target;
    // houni n3aytou lel parent bech najmou nselectionniw eli 7achtna mennou
    var parent = cible.parentElement;
    var tr = parent.parentElement.parentElement;
    var unitPrice = Number(tr.querySelector('.unitPrice').innerHTML);
    console.log(unitPrice);
    console.log(tr);
    // p houni heya l quantity 
   var p=  parent.querySelector('p');
   // 5dhina l valeur eli heya melowel tjina chaine de characteres a7na nbadlouha
   // Number
   var quantity = Number(p.innerHTML);
   // houni n'incrementiw
   quantity++;
   console.log(quantity);
   // l valeur ejdida n7otouha fel p
   p.innerHTML = quantity;
   // total bech ykoun quantité fel prix
   var total = quantity * unitPrice ;
   console.log(total);
   var price = tr.querySelector('.price');
   // l valeur hedhika bech n7otouha fel price , donc hedha l prix total mta3
   // l produit eli f safa hedhi
   var somme =0
   price.innerHTML = total ;
   for (let i = 0; i < prices.length; i++) {
      somme += Number(prices[i].innerHTML);
       
   }

    console.log("somme totale",somme);
    sum.innerHTML= somme
}

function dec(event){
    var cible = event.target;
    // houni n3aytou lel parent bech najmou nselectionniw eli 7achtna mennou
    var parent = cible.parentElement;
    var tr = parent.parentElement.parentElement;
    var unitPrice = Number(tr.querySelector('.unitPrice').innerHTML);
    console.log(unitPrice);
    console.log(tr);
    // p houni heya l quantity 
   var p=  parent.querySelector('p');
   // 5dhina l valeur eli heya melowel tjina chaine de characteres a7na nbadlouha
   // Number
   var quantity = Number(p.innerHTML);
   // houni n'decrementiw
   if (quantity>0){

       quantity--;
   }
   console.log(quantity);
   // l valeur ejdida n7otouha fel p
   p.innerHTML = quantity;
   // total bech ykoun quantité fel prix
   var total = quantity * unitPrice ;
   console.log(total);
   var price = tr.querySelector('.price');
   // l valeur hedhika bech n7otouha fel price , donc hedha l prix total mta3
   // l produit eli f safa hedhi
   var somme =0
   price.innerHTML = total ;
   for (let i = 0; i < prices.length; i++) {
      somme += Number(prices[i].innerHTML);
       
   }

    console.log(p);
    sum.innerHTML= somme
    }
function changecolor(event){
    var cible=event.target;
    console.log(cible);
    if(cible.style.color !="red"){
        cible.style.color ="red"
    }
    else if (cible.style.color =="red"){
        cible.style.color ="grey"
    }
}