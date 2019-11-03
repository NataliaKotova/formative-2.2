var homeware = [
    {
        name: "Pillows",
        id: "1",
        materials: "Fabric - modern curtain velvet. ",
        color: "Multicolored",
        size: "50 x 50CM",
        description: "Actual shades, short pile, matte, universal collection, suitable for any interior.",
        photo1: "images/pillows1.jpg",
        photo2: "images/pillows2.jpg",
        price:120,
        category: "Textile",
        author: ""
    },
    {
        name: "Bottles",
        id: "2",
        materials: "Glass",
        color: "Multicolored",
        size: "Height: 25CM, Diametr: 17CM",
        description: "Excellent addition to any interior.",
        photo1: "images/bottles.jpg",
        photo2: "images/bottles1.jpg",
        price:40,
        category: "Home decor",
        author: "Agata Create, Upslash"
    },
    {
        name: "Mirror",
        id: "3",
        materials: "OUTER SHELL, 40% MDF, 40% GLASS, 20% ALUMINIUM",
        color: "Black",
        size: "Diametr: 70CM",
        description: "Excellent addition to any interior.",
        photo1: "images/mirror.jpg",
        photo2: "images/bottles1.jpg",
        price:40,
        category: "Home decor",
        author:""
    },
    {
        name: "Armchair",
        id: "4",
        materials: "Upholstery: 50% Polyester, 50% Acrylic. Foam filled seat cushion and back rest. Wooden leg construction.",
        color: "Blue",
        size: "71 x 77.5 x 84cm (wxdxh)",
        description: "Sit back and relax in this comfortable armchir.",
        photo1: "images/armchair.jpg",
        price:440,
        category:"Furniture",
        author: "Kari Shea, Upslash"
    },
    {
        name: "Plant",
        id: "5",
        materials: "Natural plant in ceramic pot",
        color: "Green",
        size: "Height: 30CM, Width: 18CM",
        description: "Beautiful plant, great addition to any interior.",
        photo1: "images/plant.jpg",
        photo2: "images/bottles1.jpg",
        price:30,
        category:"",
        author: "Kari Shea, Upslash"
    },
    
    {
        name: "Green sofa",
        id: "7",
        materials: "Velvet",
        color: "Green",
        size: "",
        description: "Excellent addition to any interior.",
        photo1: "images/sofa-green1.jpg",
        photo2: "images/safa-green2.jpg",
        price:840,
        category: "Furniture",
        author:"Phillip Goldsberry, Upslash"
    },
    {
        name: "Leather sofa",
        id: "8",
        materials: "Leather",
        color: "Brown",
        size: "",
        description: "Excellent addition to any interior.",
        photo1: "images/sofa-brown1.jpg",
        photo2: "images/sofa-brown2.jpg",
        price:2000,
        category: "Furniture",
        author:"Paul Weaver, Upslash </br> Kara Eads, Upslash"
    },
    {
        name: "Blanket",
        id: "9",
        materials: "100% cotton",
        color: "White",
        size: "200x200CM",
        description: "Excellent addition to any interior.",
        photo1: "images/blanket1.jpg",
        photo2: "images/blanket2.jpg",
        price:40,
        category: "Textile",
        author:"Agata Create, Upslash"
    },
    {
        name: "Chandelier",
        id: "10",
        materials: "Bone",
        color: "White",
        size: "Diametr: 70CM",
        description: "Excellent addition to any interior.",
        photo1: "images/chandelier1.jpg",
        photo2: "images/chandelier2.jpg",
        price:40,
        category: "Lighting",
        author:"Lindie Wilton, Upslash"
    },
    {
        name: "Curtains",
        id: "11",
        materials: "OUTER SHELL, 40% MDF, 40% GLASS, 20% ALUMINIUM",
        color: "White",
        size: "Diametr: 70CM",
        description: "Excellent addition to any interior.",
        photo1: "images/curtains1.jpg",
        photo2: "images/curtains1.jpg",
        price:40,
        category: "Textile",
        author:"Christopher Martyn, Upslash"
    },
    {
        name: "Picture",
        id: "12",
        materials: "OUTER SHELL, 40% MDF, 40% GLASS, 20% ALUMINIUM",
        color: "Black",
        size: "Diametr: 70CM",
        description: "Excellent addition to any interior.",
        photo1: "images/picture1.jpg",
        photo2: "images/bottles1.jpg",
        price:40,
        category: "Wall art",
        author:"Kari Shea, Upslash"
    },
    {
        name: "Chair",
        id: "13",
        materials: "OUTER SHELL, 40% MDF, 40% GLASS, 20% ALUMINIUM",
        color: "White",
        size: "",
        description: "Excellent addition to any interior.",
        photo1: "images/chair1.jpg",
        photo2: "images/chair2.jpg",
        price:40,
        category:"Furniture",
        author:"Agata Create, Sarah Dorweiler, Upslash"
    },
    {
        name: "Armchair",
        id: "14",
        materials: "OUTER SHELL, 40% MDF, 40% GLASS, 20% ALUMINIUM",
        color: "Yellow",
        size: "",
        description: "Excellent addition to any interior.",
        photo1: "images/armchair-yellow1.jpg",
        photo2: "images/armchair-yellow2.jpg",
        price:40,
        category:"Furniture",
        author:"Kari Shea, Upslash"
    },
    {
        name: "Print",
        id: "15",
        materials: "",
        color: "Yellow",
        size: "",
        description: "Acrilic paint. Excellent addition to any interior.",
        photo1: "images/print1.jpg",
        photo2: "images/print2.jpg",
        price:100,
        category:"Wall art",
        author:"Olia Gozha, Upslash"
    },
    {
        name: "Print",
        id: "16",
        materials: "",
        color: "Pink",
        size: "",
        description: "Acrilic paint. Excellent addition to any interior.",
        photo1: "images/pink-print1.jpg",
        photo2: "images/pink-print1.jpg",
        price:40,
        category:"Wall art",
        author:"Stephanie Harvey, Upslash"
    },
    {
        name: "Basket",
        id: "17",
        materials: "",
        color: "Natural",
        size: "",
        description: "Excellent addition to any interior.",
        photo1: "images/basket1.jpg",
        photo2: "images/basket1.jpg",
        price:40,
        category: "Home decor",
        author:"Agata Create, Upslash"
    },
]
//tableware: Alex Holyoake


function showAllItems(array) {
    document.getElementById('homeware').innerHTML = " ";
    for(var i = 0; i < array.length; i++) {
      document.getElementById('homeware').innerHTML+='<div class="col-md-3">'
      +'<div class="frame">'
      +'<div class="card m-3">'
      +'<img class="card-img-top" src="'+ array[i].photo1 +' " alt="Homeware">'
      +'<div class="card-body">'
      +'<p class="card-text">' + array[i].name.toUpperCase() + '</p>'
      +'<p class="card-text">' + "$" + array[i].price + '</p>'
      +'</div>'
      +'<button class="quickView">QUICK VIEW</button>'
      +'</div>'
      +'</div>'
      +'</div>'
    }
}


showAllItems(homeware);

//function which is responsible for filtering items by category 
function filterCategory(array, category) {
    var filterResult = array.filter(function(item) {
      return item.category.toLowerCase() === category;
    })
    showAllItems (filterResult, category);
}

// function filterFurniture(array) {
//     var filterResult = array.filter(function(item) {
//       return item.category.toLowerCase() === "furniture";
//     })
//     showAllItems (filterResult);
// }

//function which is responsible for filtering items by color
function filterColor(array, color) {
    var filterResult = array.filter(function(item) {
      return item.color.toLowerCase() === color;
    })
    showAllItems (filterResult, color);
}

//function which is responsible for filtering items by price range 

function filterPrice100(array){
    var filterResult = array.filter(function(item) {
            return item.price <= 100; 
    })
    showAllItems(filterResult);
}

function filterPrice200(array){
    var filterResult = array.filter(function(item) {
        return item.price >=101 && item.price <= 199;
    })
    showAllItems(filterResult);
}

function filterPrice400(array){
    var filterResult = array.filter(function(item) { 
        return item.price >=200 && item.price <= 399; 
    })
    showAllItems(filterResult);
}

function filterPriceMore(array){
    var filterResult = array.filter(function(item) {
        return item.price >=400; 
    })
    showAllItems(filterResult);
}

document.getElementById('reset').addEventListener('click', function() {
    showAllItems(homeware);
});

document.getElementById('furniture').addEventListener('click', function() {
    filterCategory(homeware, "furniture");
});

document.getElementById('textile').addEventListener('click', function() {
    filterCategory(homeware, "textile");
});

document.getElementById('homeDecor').addEventListener('click', function() {
    filterCategory(homeware, "home decor");
});

document.getElementById('wallArt').addEventListener('click', function() {
    filterCategory(homeware, "wall art");
});

document.getElementById('white').addEventListener('click', function() {
    filterColor(homeware, "white");
});

document.getElementById('blue').addEventListener('click', function() {
    filterColor(homeware, "blue");
});

document.getElementById('yellow').addEventListener('click', function() {
    filterColor(homeware, "yellow");
});

document.getElementById('brown').addEventListener('click', function() {
    filterColor(homeware, "brown");
});

document.getElementById('pink').addEventListener('click', function() {
    filterColor(homeware, "pink");
});

document.getElementById('multicolored').addEventListener('click', function() {
    filterColor(homeware, "multicolored");
});

document.getElementById('brown').addEventListener('click', function() {
    filterColor(homeware, "brown");
});

document.getElementById('green').addEventListener('click', function() {
    filterColor(homeware, "green");
});

document.getElementById('price100').addEventListener('click', function() {
    filterPrice100(homeware);
});

document.getElementById('price200').addEventListener('click', function() {
    filterPrice200(homeware);
});

document.getElementById('price400').addEventListener('click', function() {
    filterPrice400(homeware);
});

document.getElementById('priceMore').addEventListener('click', function() {
    filterPriceMore(homeware);
});

