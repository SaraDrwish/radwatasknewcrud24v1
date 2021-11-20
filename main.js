
var btn = document.getElementById("btn");

var editbtn = document.getElementById("editbtn");

var  inp = document.getElementsByClassName("inp");

var productlist = [];

btn.onclick = function(){

var prname = document.getElementById("prname").value;
var prpric = document.getElementById("prpric").value;
var prcatg = document.getElementById("prcatg").value;
var prdec = document.getElementById("prdec").value;

  // creat an opject

    var products = {
        name:prname,
        price:prpric,
        catagory:prcatg,
        description:prdec
    }

    productlist.push(products);

    add();

    clearinp();
}
//display prod
function add(){

    var temp = "";
    for(var i = 0 ; i < productlist.length ; i++){
        // console.log("sara");
        temp+= `
        
        <div class="product">
                  <img src="./2.jpg" alt="1">
                  <h2>`+productlist[i].name +`</h2>
                  <span>`+productlist[i].catagory +`</span>
                  <p class="pragg">`+productlist[i].description +`</p>
                  <div class="price"> `+productlist[i].price +`</div>
                  <button class="updatdtn" onclick="del(`+i+`);" > Delete</button> 
                  <button class="updatdtn" onclick=updat(`+i+`);> Update</button>
            </div>
        `
            // var prname = document.getElementById("prname").value="";
            // var prpric = document.getElementById("prpric").value="";
            // var prcatg = document.getElementById("prcatg").value="";
            // var prdec = document.getElementById("prdec").value="";

            clearinp();
    }

    document.getElementById("container2").innerHTML = temp;

}

// delete img in bottom

function del(i){
    productlist.splice(i , 1);
    add();
}


// update
function updat(ind){

 document.getElementById("prname").value = productlist[ind].name;
 document.getElementById("prpric").value =productlist[ind].price;
 document.getElementById("prcatg").value = productlist[ind].catagory; // لازم احط الي نفس الاوبجكتتتت
 document.getElementById("prdec").value= productlist[ind].description;

//  add();
//  clearinp();

 btn.style.display= "none";
 editbtn.style.display= "block";

 document.getElementById("ind").value = ind;

    // add();
}


//edit in potton 
editbtn.onclick= function edit(){
 var ind = document.getElementById("ind").value;

var prname = document.getElementById("prname").value;
var prpric = document.getElementById("prpric").value;
var prcatg = document.getElementById("prcatg").value;
var prdec = document.getElementById("prdec").value;

productlist[ind].name =prname ;
productlist[ind].price =prpric ;
productlist[ind].catagory =prcatg ;
productlist[ind].description =prdec ;

 
    add();
    clearinp();
    editbtn.style.display= "none";
     btn.style.display= "block";

}

// clear form
function clearinp(){
    for(var i = 0 ; i < inp.length ; i++){
         inp[i].value=" ";
    }

}