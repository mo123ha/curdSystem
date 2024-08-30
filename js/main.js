// get total
// create projuct
// save lovcal storage
// clear input
// read
// count
// delete
// update
// search 
// slean data

let title=document.getElementById("title");
let price=document.getElementById("price");
let tax=document.getElementById("tax");
let adv=document.getElementById("adv");
let discount=document.getElementById("Discount")
let total =document.getElementById("total")
let count=document.getElementById("count")
let categery=document.getElementById("categery")
let create=document.getElementById("create");
let bycategerybtn=document.getElementById("by categery");
let bytitlebtn=document.getElementById("by title");
let currentindex=0;
let mode='create'
productArray=[]
 if( localStorage.getItem("productinfo")!=null){
    productArray=JSON.parse(localStorage.getItem("productinfo"))
    diplay()
 
 }
 
price.addEventListener("keyup",gettotal)
tax.addEventListener("keyup",gettotal)
adv.addEventListener("keyup",gettotal)
discount.addEventListener("keyup",gettotal)
function gettotal(params) {
  if(price.value!=''){
    let result= (+price.value+ +tax.value+ +adv.value)- +discount.value
   total.innerHTML= (result)
total.style.background='#040'
  }else{
    total.style.background='#390053'
  }
}




//  add product 

create.addEventListener("click",addProduct)
function addProduct() {
    let product={
        title:title.value,
        price:price.value,
        tax:tax.value,
        adv:adv.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        categery:categery.value,
    }
    if (mode==='create') {
      if (product.count > 1) {
        for( let i=0;i < product.count;i++){
          productArray.push(product)
        }
        }
        else{
          productArray.push(product)
      }
    }else{
      productArray[currentindex]=product;
      mode='create'
      create.innerHTML='create'
      count.style.display="inline-block";
      diplay()
    }
    
    
    localStorage.setItem("productinfo",JSON.stringify(productArray))
    diplay()
clearData()
    
}


// diplay product



function diplay() {
    temp=''
    for(let i=0;i<productArray.length;i++){
        temp+=`<tr>
            <td>${[i]}</td>
            <td>${productArray[i].title}</td>
            <td>${productArray[i].price}</td>
            <td>${productArray[i].tax}</td>
            <td>${productArray[i].adv}</td>
                 <td>${productArray[i].discount}</td>
            <td>${productArray[i].total}</td>
            <td>${productArray[i].count}</td>
         <td>${productArray[i].categery}</td>
            <td><button id="update" onclick="updateproduct(${i})">update</button></td>
            <td><button id="delete" onclick="delElment(${i})">delete</button></td>
           </tr>`
    }
 
 
    document.getElementById("myData").innerHTML=temp;

}

// clear form
function clearData() {
    title.value='';
    price.value='';
    tax.value='';
    adv.value='';
    total.innerHTML='';
    count.value='';
    categery.value='';
}

function delElment(index) {
    productArray.splice(index,1)
    localStorage.setItem("productinfo",JSON.stringify(productArray))
    diplay()
    
}
// deletall.addEventListener("click",deletallproduct)
// function deletallproduct() {

//   localStorage.removeItem("productinfo")
//   diplay()
  
// }


// update product

function updateproduct(index){
  currentindex=index
  title.value=productArray[index].title;
  price.value=productArray[index].price;
  tax.value=productArray[index].tax;
  adv.value=productArray[index].adv;
 gettotal()
  count.style.display="none";
  categery.value=productArray[index].categery;
console.log(currentindex);
mode='update'
// document.getElementById("create").classList.add("d-none")
// document.getElementById("add Update").classList.replace("d-none","d-block")
create.innerHTML='update'

scroll({
  top:0,
   behavior:'smooth',
})
}


// let addUpdate=document.getElementById("add Update")
// addUpdate.addEventListener("click",addedit)
// function addedit() {
//   productArray[currentindex].title= title.value
//   productArray[currentindex].price= price.value
//   productArray[currentindex].tax= tax.value
//   productArray[currentindex].adv= adv.value
 
//   productArray[currentindex].categery= categery.value
//   count.style.display="inline-block";
//   document.getElementById("create").classList.remove("d-none")
// document.getElementById("add Update").classList.replace("d-block","d-none")
//   diplay()
//   clearData()

  

// }

// delete all product
 let deleteALL=document.getElementById("deleteALL");
deleteALL.addEventListener("click",Deletall)
function Deletall() {

 localStorage.clear()
 productArray.splice(0)
 diplay()
}





// search


let searchMood='title'

bytitlebtn.addEventListener("click",function(){
  search(this.id)
})
bycategerybtn.addEventListener("click",function(){
  search(this.id)
})

function search(id){
  let search=document.getElementById("search")
 if (id=='by title') {
  searchMood='title'
  search.placeholder='search By Title'
 }else{
searchMood='categery'
search.placeholder='search By categery'
 }
search.focus()
}


let searchInput=document.getElementById("search")
searchInput.addEventListener("keyup",function () {
  diplaySearch(this.value)
  
})
function  diplaySearch(val) {
  let value=val.toLowerCase()
  if (searchMood=='title' ) {
temp=''
    for(let i=0;i<productArray.length;i++){
    if (productArray[i].title.toLowerCase().includes(value)){
      temp+=`<tr>
            <td>${[i]}</td>
            <td>${productArray[i].title}</td>
            <td>${productArray[i].price}</td>
            <td>${productArray[i].tax}</td>
            <td>${productArray[i].adv}</td>
                 <td>${productArray[i].discount}</td>
            <td>${productArray[i].total}</td>
            <td>${productArray[i].count}</td>
         <td>${productArray[i].categery}</td>
            <td><button id="update" onclick="updateproduct(${i})">update</button></td>
            <td><button id="delete" onclick="delElment(${i})">delete</button></td>
           </tr>`
           console.log("noooo");
    }
  }
}
else{
  temp=''
  for(let i=0;i<productArray.length;i++){
    if (productArray[i].categery.toLowerCase().includes(value)){
      temp+=`<tr>
            <td>${[i]}</td>
            <td>${productArray[i].title}</td>
            <td>${productArray[i].price}</td>
            <td>${productArray[i].tax}</td>
            <td>${productArray[i].adv}</td>
                 <td>${productArray[i].discount}</td>
            <td>${productArray[i].total}</td>
            <td>${productArray[i].count}</td>
         <td>${productArray[i].categery}</td>
            <td><button id="update" onclick="updateproduct(${i})">update</button></td>
            <td><button id="delete" onclick="delElment(${i})">delete</button></td>
           </tr>`
           console.log("heloo");
    }
  }
  
  document.getElementById("myData").innerHTML=temp;

}
document.getElementById("myData").innerHTML=temp;
}