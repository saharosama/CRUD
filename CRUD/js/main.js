
var productName=document.getElementById("p_name");
var productPrice=document.getElementById("p_price");
var productcat=document.getElementById("p_cat");
var productDescrption=document.getElementById("p_descrption");
var addBtn=document.getElementById("addBtn");
var updateBtn=document.getElementById("updateBtn");
var currentI;
let products=[]
if(localStorage.getItem('products')!=null){
    products=JSON.parse(localStorage.getItem('products'))
    display(products)
}
function addProduct(){
    let product =
    {
        name:productName.value,
        price:productPrice.value,
        cat:productcat.value,
        desc:productDescrption.value
    }
products.push(product)
updateLocalStorage();
   clearForm() 
}
function clearForm() {
    productName.value="" 
    productPrice.value="" 
    productcat.value="tv" 
    productDescrption.value="" 
}
function search(searchkey){
    var matchedProducts =[]
    for(let i=0;i<products.length;i++){
if(products[i].name.toLowerCase().includes(searchkey.toLowerCase())===true){
    matchedProducts.push(products[i])
    
}
    }
   
     display(matchedProducts)
}

function display(arr){
    temp=''
    for (let index = 0; index < arr.length; index++) {
       temp+=`<tr>
       <td scope="col">${index+1}</td>
       <td scope="col">${arr[index].name}</td>
       <td scope="col">${arr[index].price}</td>
       <td scope="col">${arr[index].cat}</td>
       <td scope="col">${arr[index].desc}</td>
       <td scope="col"><button class="btn btn-warning me-2 "onclick="updateList(${index})" > update</button></td>
       <td scope="col"><button class="btn btn-danger me-2 " onclick="deleteElment(${index})"> delete</button></td>
     </tr>`
        
    }
    document.getElementById('t-body').innerHTML=temp;
}
function deleteElment(indexNum) {
    products.splice(indexNum,1)
   updateLocalStorage();
}
function updateLocalStorage() {
    localStorage.setItem("products",JSON.stringify(products))
    display(products);
}

function updateList(index) {
    addBtn.classList.replace("d-block","d-none")
    updateBtn.classList.replace("d-none","d-block")
currentI=index;
    productName.value=products[index].name 
    productPrice.value=products[index].price  
    productcat.value=products[index].cat 
    productDescrption.value=products[index].desc 
}
function addupdate() {

    products[currentI].name =productName.value
    products[currentI].price =productPrice.value
    products[currentI].cat =productcat.value
    products[currentI].desc =productDescrption.value
    updateLocalStorage();
    clearForm();
    updateBtn.classList.replace("d-block","d-none")
    addBtn.classList.replace("d-none","d-block")
}