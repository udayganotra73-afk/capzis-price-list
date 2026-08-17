const data = {
  en: {
    subtitle: "Electrical Products",
    heading: "Live Product Price List",
    desc: "Always check the latest prices before placing an order.",
    search: "Search Product...",
    product: "Product",
    price: "Price",
    updated: "Updated",
    footer: "© CAPZIS | Live Price Portal"
  },

  mr: {
    subtitle: "इलेक्ट्रिकल प्रॉडक्ट्स",
    heading: "थेट उत्पादन किंमत सूची",
    desc: "ऑर्डर करण्यापूर्वी कृपया नवीनतम किंमत तपासा.",
    search: "उत्पादन शोधा...",
    product: "उत्पादन",
    price: "किंमत",
    updated: "अद्यतन",
    footer: "© CAPZIS | थेट किंमत पोर्टल"
  }
};

function setLanguage(lang){

document.getElementById("subtitle").innerText=data[lang].subtitle;

document.getElementById("heading").innerText=data[lang].heading;

document.getElementById("desc").innerText=data[lang].desc;

document.getElementById("t1").innerText=data[lang].product;

document.getElementById("t2").innerText=data[lang].price;

document.getElementById("t3").innerText=data[lang].updated;

document.getElementById("footer").innerText=data[lang].footer;

}

document.getElementById("search").addEventListener("keyup",function(){

let value=this.value.toLowerCase();

let rows=document.querySelectorAll("#productTable tbody tr");

rows.forEach(row=>{

let txt=row.innerText.toLowerCase();

row.style.display=txt.includes(value)?"":"none";

});

});
