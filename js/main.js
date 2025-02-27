let gyps = document.querySelector('.product1');
let m3dn = document.querySelector('.product2');
let acc = document.querySelector('.product3');

let productsOne = [
    { id: 1, name: "  جبس أبيض كناوف 3 م", unit: "لوح", price: 315},
    
    { id: 3, name: "  جبس أخضر كناوف ", unit: "لوح", price: 395},
    { id: 4, name: "جبس أحمر كناوف", unit: "لوح", price: 400},
    
    { id: 5, name: "جبس أبيض جي بورد", unit: "لوح", price: 280},
    { id: 6, name: "جبس أخضر جي بورد", unit: "لوح", price: 360},
    { id: 6, name: "جبس أحمر جي بورد", unit: "لوح", price: 360},

 //{ id: 2, name: "جبس أبيض عثمان ", unit: "لوح", price: " "},
];

let productsTwo = [
    { id: 7, name: " زاوية 3", unit: "عود", price: 16},
    { id: 8, name: " أوميجا 3", unit: "عود", price: 32},
    { id: 9, name: " سي 3", unit: "عود", price: 24},
    
    { id: 7, name: " زاوية 33", unit: "عود", price: 17.5},
    { id: 8, name: " أوميجا 33", unit: "عود", price: 35},
    { id: 9, name: " سي 33", unit: "عود", price: 26.25},
    
    { id: 10, name: " زاوية 35", unit: "عود", price: 19.5},
    { id: 11, name: " أوميجا 35", unit: "عود", price: 39},
    { id: 12, name: " سي 35", unit: "عود", price: 29.25},
    
    { id: 13, name: " زاوية 4", unit: "عود", price: 22},
    { id: 14, name: " أوميجا 4", unit: "عود", price: 44},
    { id: 15, name: " سي 4", unit: "عود", price: 33},
    
    { id: 16, name: " خشن 5 سم", unit: "عود", price: 60},
    { id: 17, name: "  ناعم 5 سم", unit: "عود", price: 55},
    
    { id: 18, name: "  خشن 7 سم", unit: "عود", price: 70},
    { id: 19, name: "  ناعم 7 سم", unit: "عود", price: 65}
]
let productsThree = [
    { id: 20, name: " ميتال", unit: "بكرة", price: 100},
    { id: 21, name: " فايبر", unit: "بكرة", price: 75},
    { id: 22, name: " معجون كناوف", unit: "شيكارة", price: 85},
    { id: 23, name: " معجون اكسترا فيل", unit: "شيكارة", price: 75},
    { id: 24, name: " مسمار 25 كيلو", unit: "علبة", price: 100},
    { id: 25, name: " مسمار 35 كيلو", unit: "علبة", price: 100},
    { id: 26, name: "مسمار 25 HD", unit: "علبة", price: 130},
    { id: 27, name: " مسمار 35 HD", unit: "علبة", price: 140},
    { id: 28, name: " مسمار تك", unit: "علبة", price: 140},
    { id: 29, name: " مسمار جنش", unit: "علبة", price: 65},
    { id: 30, name: " أكمن", unit: "علبة", price: 100},
    { id: 31, name: " فيشر", unit: "علبة", price: 5},
    { id: 32, name: " تيش مصري", unit: "عود", price: 23},
    { id: 33, name: " تيش مستورد", unit: "عود", price: 27},
    { id: 34, name: " كورنر بيد", unit: "عود", price: 25},
    { id: 35, name: " اند بيد", unit: "عود", price: 27},
    { id: 36, name: "شادوجاب ", unit: "عود", price: 95},
    { id: 36, name: "شادوجاب محمل", unit: "عود", price: 135},
    { id: 37, name: " عصفورة U", unit: "عدد", price: 1.25},
    { id: 38, name: " عصفورة L", unit: "عدد", price: 2.5},
    { id: 39, name: " صامولة ", unit: "كجم", price: 90},
    { id: 40, name: " سلك", unit: "كجم", price: 80},
    { id: 41, name: " كورنير", unit: "زاوية", price: 22},
    { id: 42, name: " اكسسوار", unit: "متر", price: 50},
    { id: 43, name: " بلاطات ديكوراما 7 مم", unit: "متر", price: 160},
    { id: 44, name: " بلاطات سادة 7 مم", unit: "متر", price: " "},
    //{ id: 44, name: " بلاطات بامبو 7 مم", unit: "متر", price: 160},
]


function displayGyps(filteredGyps) {
    gyps.innerHTML = ""; 
    filteredGyps.forEach(product => {
        gyps.innerHTML += `
            <div class="one d-flex justify-content-between">
                <p>${product.name}</p>
                <div class="number d-flex">
                    <p class="u">${product.unit}</p>
                    ${product.price === " " ? `<p class="pr note">${product.price = "ــــ"}</p>` : `<p class="pr">${product.price}</p>`}
                </div>
                </div>
                
        `;
    });
}
function displayM3dn(filteredM3dn) {
    m3dn.innerHTML = ""; 
    filteredM3dn.forEach(product => {
        m3dn.innerHTML += `
            <div class="one d-flex justify-content-between">
                <p>${product.name}</p>
                <div class="number d-flex">
                    <p class="u">${product.unit}</p>
                    <p class="pr">${product.price}</p>
                </div>
            </div>
            
        `;
    })
}
function displayAcc(filteredAcc) {
    acc.innerHTML = ""; 
    filteredAcc.forEach(product => {
        acc.innerHTML += `
            <div class="one d-flex justify-content-between">
                <p>${product.name}</p>
                <div class="number d-flex">
                    <p class="u">${product.unit}</p>
                    <p class="pr">${product.price}</p>
                </div>
            </div>
            
        `;
    });
}

displayGyps(productsOne);
displayM3dn(productsTwo);
displayAcc(productsThree);
