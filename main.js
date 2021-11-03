
// var delet = document.getElementById("delet");

var btn = document.getElementById("btn");

var productlist = [];

btn.onclick =  function(){

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
}


function add(){

    var temp = "";
    for(var i = 0 ; i < productlist.length ; i++){
        // console.log("sara");
        temp+=`
        
        <div class="product">
                  <img src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Two/images/shuffle-06.jpg" alt="1">
                  <h2>`+productlist[i].name +`</h2>
                  <span>`+productlist[i].catagory +`</span>
                  <p>`+productlist[i].description +`</p>
                  <div class="price"> `+productlist[i].price +`</div>
                  <button   onclick="del(`+i+`);"> delete</button>
                  <button> update</button>
            </div>
        `

            var prname = document.getElementById("prname").value="";
            var prpric = document.getElementById("prpric").value="";
            var prcatg = document.getElementById("prcatg").value="";
            var prdec = document.getElementById("prdec").value="";
    }

    document.getElementById("container2").innerHTML = temp;

}


function del(i){
    productlist.splice(i , 1);
    add();
}