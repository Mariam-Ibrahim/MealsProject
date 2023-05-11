let myMeals=[]
async function getmeals(mealName){
    let resp= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
    let data = await resp.json()
    myMeals=data.meals

    console.log(myMeals);
    displayOne()
}
getmeals("")

function displayOne(){
    let temp=""
    myMeals.forEach((el)=>{
        temp+=`
        <div class="col-md-3 col-sm-12 g-3 mycol" uniqueID=${el.idMeal}>
        <div class="item ">
          <img src=${el.strMealThumb} alt="meal-item" class="myImage">
          <div class="imgoverlayer">
            <h2 class="overlayertitle">${el.strMeal}</h2>
            
          </div>
        </div>

      </div>
        `
    })
    document.getElementById("myRow").innerHTML=temp
    // itemsPartTwo.style.display="none"
    document.getElementById("itemsPart").innerHTML=temp

  

    showMyOverlayer()
}





// selectors
let myoverlay=document.querySelector(".largeoverlayer")
let myImg=document.querySelector(".largeoverlayerImg")
let myTitle=document.querySelector(".myoverlaytitleID ")
let myPragraph=document.querySelector(".MyparagraphID")
let myArea=document.querySelector(".spanOne")
let myCategory=document.querySelector(".mySpanTwoID")

function showMyOverlayer(){
    let myItem = document.querySelectorAll(".mycol")
    myItem.forEach((el)=>{
        el.addEventListener("click",function(){
            console.log(el);
            // myoverlay.style.display="block"
let myID=el.getAttribute("uniqueID")
console.log(myID);
getMealsID(myID)


        })
    })
}

let mealsById={}
async function getMealsID(ID){
  let resp=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ID}`)
  let data =await resp.json()
  console.log(data);
  mealsById=data.meals[0]
  console.log("Thats My meals");
  console.log(mealsById);
  showSpecificDetails()
}
let ingredientsArray=[]
let sectionOne=document.querySelector(".sectionOne")
let mysourcrbtn=document.querySelector(".mysourcrbtn")
let myyoutubebtn =document.querySelector(".myyoutubebtn")
function showSpecificDetails(){

  // eb2y ems7y el function di w e3mli uncomment l line 251
  mybuttons()
  function mybuttons(){
     let temp=""
for(let i=1 ; i<=20 ; i++){
  // let temp=""
  let MyIngr=`strIngredient`+i
  console.log(MyIngr);
  if(mealsById.MyIngr != ""){
    console.log("msh b null")
    console.log(mealsById.MyIngr);
    console.log(mealsById);
    temp+=`  <div class="col-md-3  "><div class="rounded bg-warning pt-1 pb-1 text-center">${mealsById.MyIngr}</div></div>`
  }
  // document.querySelector(".recepeRow").innerHTML=temp
}
  }

//  for(let i=1 ; i<=20 ; i++){
//   console.log(`${mealsById.strIngredient+i}`);
//  }







  // let specialArray=[]
  // for(let i=1 ; i<=20 ; i++){
  //   if(mealsById.strIngredient (i) != ""){
  //     ingredientsArray.push(mealsById.strIngredient+i)
  //   }
  
  // }
  // console.log(ingredientsArray)
  if(mealsById.strIngredient1 != ""){
    console.log("yes true");
    ingredientsArray.push(mealsById.strIngredient1)
    console.log(ingredientsArray);

  }
  if(mealsById.strIngredient2 != ""){
    console.log("yes true");
    ingredientsArray.push(mealsById.strIngredient2)
    console.log(ingredientsArray);

  }
  if(mealsById.strIngredient3 != ""){
    console.log("yes true");
    ingredientsArray.push(mealsById.strIngredient3)
    console.log(ingredientsArray);

  }
  if(mealsById.strIngredient4 != ""){
    console.log("yes true");
    ingredientsArray.push(mealsById.strIngredient4)
    console.log(ingredientsArray);

  }
  if(mealsById.strIngredient5 != ""){
    console.log("yes true");
    ingredientsArray.push(mealsById.strIngredient5)
    console.log(ingredientsArray);

  }
  if(mealsById.strIngredient6 != ""){
    console.log("yes true");
    ingredientsArray.push(mealsById.strIngredient6)
    console.log(ingredientsArray);

  }
  if(mealsById.strIngredient7 != ""){
    console.log("yes true");
    ingredientsArray.push(mealsById.strIngredient7)
    console.log(ingredientsArray);

  }
  if(mealsById.strIngredient8 != ""){
    console.log("yes true");
    ingredientsArray.push(mealsById.strIngredient8)
    console.log(ingredientsArray);

  }
  if(mealsById.strIngredient9 != ""){
    console.log("yes true");
    ingredientsArray.push(mealsById.strIngredient9)
    console.log(ingredientsArray);

  }
  if(mealsById.strIngredient10 != ""){
    console.log("yes true");
    ingredientsArray.push(mealsById.strIngredient10)
    console.log(ingredientsArray);

  }
  if(mealsById.strIngredient11 != ""){
    console.log("yes true");
    ingredientsArray.push(mealsById.strIngredient11)
    console.log(ingredientsArray);

  }if(mealsById.strIngredient12 != ""){
    console.log("yes true");
    ingredientsArray.push(mealsById.strIngredient12)
    console.log(ingredientsArray);

  }if(mealsById.strIngredient13 != ""){
    console.log("yes true");
    ingredientsArray.push(mealsById.strIngredient13)
    console.log(ingredientsArray);

  }if(mealsById.strIngredient14 != ""){
    console.log("yes true");
    ingredientsArray.push(mealsById.strIngredient14)
    console.log(ingredientsArray);

  }if(mealsById.strIngredient15 != ""){
    console.log("yes true");
    ingredientsArray.push(mealsById.strIngredient15)
    console.log(ingredientsArray);

  }if(mealsById.strIngredient16 != ""){
    console.log("yes true");
    ingredientsArray.push(mealsById.strIngredient16)
    console.log(ingredientsArray);

  }if(mealsById.strIngredient16 != ""){
    console.log("yes true");
    ingredientsArray.push(mealsById.strIngredient17)
    console.log(ingredientsArray);

  }
  if(mealsById.strIngredient17 != ""){
    console.log("yes true");
    ingredientsArray.push(mealsById.strIngredient18)
    console.log(ingredientsArray);

  }
  if(mealsById.strIngredient18 != ""){
    console.log("yes true");
    ingredientsArray.push(mealsById.strIngredient19)
    console.log(ingredientsArray);

  }
  if(mealsById.strIngredient19 != ""){
    console.log("yes true");
    ingredientsArray.push(mealsById.strIngredient20)
    console.log(ingredientsArray);

  }
  if(mealsById.strIngredient20 != ""){
    console.log("yes true");
    ingredientsArray.push(mealsById.strIngredient14)
    console.log(ingredientsArray);

  }
console.log("that's my final array");
console.log(ingredientsArray);
displayRecipiesOnly()
function displayRecipiesOnly(){
  let temp=""
  for(let i=0 ;i<ingredientsArray.length;i++){
 
    temp+=`                  <div class="col-md-3  "><div class="rounded bg-info pt-1 pb-1 text-center">${ingredientsArray[i]}</div></div>
    `
  }
  // document.querySelector(".recepeRow").innerHTML=temp
  let myAccurateLength=ingredientsArray.length
  console.log(myAccurateLength);
  ingredientsArray.splice(0, myAccurateLength)
  // document.querySelector(".recepeRow").innerHTML=temp

}






  console.log(mealsById.strMealThumb);
  $(".myNavBar").animate({left:`-${myouterWidth}px`},500)
  $(".OurIcon").removeClass("fa-bars")
  $(".OurIcon").addClass("fa-xmark")

  sectionOne.style.display="none"
  searchSection.style.display="none"
  // eachCategRow.style.display="none"
  categorySection.style.display="none"
  areaSection.style.display="none"
  ingredientsSection.style.display="none"

  myoverlay.style.display="block"

  myImg.setAttribute("src", mealsById.strMealThumb)
  // overlayerImg.setAttribute("src" , dataTwo.thumbnail )
  myTitle.innerHTML=mealsById.strMeal
  myPragraph.innerHTML=mealsById.strInstructions
  myArea.innerHTML=mealsById.strArea
  myCategory.innerHTML=mealsById.strCategory
// let ingredientsArray=[]
// for(var i=1 ; i<=20; i++){
//   let MyIng=`${mealsById.strIngredient}+${i}`
//   console.log(MyIng);

// }
mysourcrbtn.addEventListener("click",function(){
  window.open(`${mealsById.strSource}`)
})
myyoutubebtn.addEventListener("click",function(){
  window.open(`${mealsById.strYoutube}`)
})

}
// $(".navinner").click(function () {
//   $(".navbar").animate({height:"0px"} ,500)
  
// })
let myouterWidth=$(".navinner").outerWidth()

$(".OurIcon").click(function(){
// let myouterWidth=$(".navinner").outerWidth()
console.log(myouterWidth);
if($(".myNavBar").css("left")== "0px"){
  $(".myNavBar").animate({left:`-${myouterWidth}px`},500)
  $(".OurIcon").removeClass("fa-bars")
  $(".OurIcon").addClass("fa-xmark")
  $("nav").animate({top:"100%"},500)



}else{
  $(".myNavBar").animate({left:`0px`},500)
  $(".OurIcon").removeClass("fa-xmark")
  $(".OurIcon").addClass("fa-bars")
  $("nav").animate({top:"0px"},500)

}

})
$(".myNavBar").css({left:`-${myouterWidth}px`},500)
$(".OurIcon").removeClass("fa-xmark")
$(".OurIcon").addClass("fa-bars")

let searchLink = document.getElementById("searchLink")
let searchSection = document.querySelector(".searchSection")
let itemsPart= document.querySelector(".itemsPart")
searchLink.addEventListener("click",function(){
  sectionOne.style.display="none"
  myoverlay.style.display="none"

  inputSection.style.display="none"
  categorySection.style.display="none"
  ingredientsSection.style.display="none"
  areaSection.style.display="none"


  searchSection.style.display="block"
  itemsPart.style.display="none"
  // itemsPart.style.display="none"

})
let mySearch=document.getElementById("byName")
mySearch.addEventListener("keyup" ,function(){

  console.log("Hello my search");
  let searchValue=mySearch.value
    console.log(searchValue);
  
  getmeals(searchValue)
  itemsPart.style.display="flex"

  


})



// search by letter 
let dataByLetters=[]
async function searchByLetter (letter){
  let resp = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
  let datatwo = await resp.json()
  console.log("my data two");
dataByLetters=datatwo.meals
console.log(dataByLetters);

displayByLetter()
}
// searchByLetter(`m`)
let letterInput =document.querySelector(".byLetter")
letterInput.addEventListener("keyup",function(){
  myLetter=letterInput.value
  console.log(myLetter);
  searchByLetter(myLetter)
 
})

let itemsPartOne=document.querySelector(".itemsPart")
let itemsPartTwo=document.querySelector(".itemsPartTwo")
function displayByLetter(){

  let temp=""
  dataByLetters.forEach((el)=>{
      temp+=`
      <div class="col-md-3 col-sm-12 g-3 mycol" uniqueID=${el.idMeal}>
      <div class="item ">
        <img src=${el.strMealThumb} alt="meal-item" class="myImage">
        <div class="imgoverlayer">
          <h2 class="overlayertitle">${el.strMeal}</h2>
          
        </div>
      </div>

    </div>
      `
  })
  itemsPartOne.style.display="none"
  // itemsPartTwo.style.display="block"
document.querySelector(".itemsPartTwo").innerHTML=temp
showMyOverlayer()

}


// --------------------------------myCategoriesSection-----------------------------
let CategoriesLink=document.querySelector(".CategoriesLink")
let categorySection= document.querySelector(".categorySection")
CategoriesLink.addEventListener("click",function(){
  // eachCategRow.style.display="none"
  sectionOne.style.display="none"
  searchSection.style.display="none"
  myoverlay.style.display="none"

  // eachCategRow.style.display="none"
  inputSection.style.display="none"
  ingredientsSection.style.display="none"
  areaSection.style.display="none"


  categorySection.style.display="block"
  categoryRow.style.display="flex"

  // eachCategRow.style.display="none"
  getCategory()
})



let myCategories=[]
async function getCategory(){
  let resp= await fetch ("https://www.themealdb.com/api/json/v1/1/categories.php")
  let data= await resp.json()
  console.log("that's my categories")
  myCategories=data.categories
  console.log(myCategories);
  displayCategories()

}

// getCategory()

function displayCategories(){
  let temp=''
  myCategories.forEach((el)=>{
    temp+=`
    <div class="col-md-3 myCatItem"  sendCategory=${el.strCategory}>
    <div class="itemtwo ">

      <img src=${el.strCategoryThumb} alt="category-item" class="categoryImg w-100 rounded-circle mx-auto">
      <div class="categoryoverlayer">
        <h2 class="categtitle text-center">${el.strCategory}</h2>
        <p class="categParagraph  text-center ">${el.strCategoryDescription}<p>
        
      </div>


    </div>
  </div>
    `
  })
  document.querySelector(".categoryRow").innerHTML=temp
  choosetheCategory()
}

let allDishes=[]
async function eachCategory(Name){
  let resp = await fetch (`https://www.themealdb.com/api/json/v1/1/filter.php?c=${Name}`)
  let data = await resp.json()
  allDishes=data.meals
  console.log("All these dishes");
  console.log(allDishes);
  displayAllCategories()
}
// eachCategory("Chicken")

function choosetheCategory(){
let myCatItem =document.querySelectorAll(".myCatItem")
myCatItem.forEach((el)=>{
el.addEventListener("click",function(){
  let categName=el.getAttribute("sendCategory")
  console.log(categName);
  eachCategory(categName)


})
})
}
let categoryRow=document.querySelector(".categoryRow")
let eachCategRow=document.querySelector(".eachCategRow")
function   displayAllCategories(){
  categoryRow.style.display="none"
  let temp=""
  allDishes.forEach((el)=>{
    temp+=`        <div class="col-md-3 col-sm-12 g-3 mycol" uniqueID=${el.idMeal}>
    <div class="item ">
      <img src=${el.strMealThumb} alt="meal-item" class="myImage">
      <div class="imgoverlayer">
        <h2 class="overlayertitle">${el.strMeal}</h2>
        
      </div>
    </div>

  </div>
    `
  })
  document.querySelector(".eachCategRow").innerHTML=temp
  showMyOverlayer()

}


// ---------------------------AreaSection-------------------------
let AreaLink = document.querySelector(".AreaLink")
let areaSection = document.querySelector(".areaSection")
AreaLink.addEventListener("click",function(){
  inputSection.style.display="none"
  sectionOne.style.display="none"
  myoverlay.style.display="none"
  categorySection.style.display="none"
  searchSection.style.display="none"

  ingredientsSection.style.display="none"

  areaSection.style.display="block"
  areaRow.style.display="flex"

  AreaName()
})
// AreaName()


let ourAreas=[]
async function AreaName(){
  let resp = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
  let data= await resp.json()
  ourAreas=data.meals
  console.log("Here're our areas");
  console.log(ourAreas);
  areaDisplay()
}

 

 function areaDisplay(){
  let temp=""
  ourAreas.forEach((el)=>{
    temp+=`
    <div class="col-md-3 text-center pb-4 AreaItem" myArea=${el.strArea}>
    <i class="fa-solid fa-house-laptop text-white areaIcon"></i>
    <h3 class="text-white">${el.strArea}</h3>
  </div>
        `
  })
  document.querySelector(".areaRow").innerHTML=temp
  getAreaName()
 }
 function   getAreaName(){
  let AreaItem=document.querySelectorAll(".AreaItem")
  AreaItem.forEach((el)=>{
    el.addEventListener("click" , function(){
      let myAreaName=el.getAttribute("myArea")
      console.log(myAreaName);
      AreaMeals(myAreaName)
    })
  })
 }
let areaDish=[]
 async function AreaMeals(AreaName){
  let resp=await fetch (`https://www.themealdb.com/api/json/v1/1/filter.php?a=${AreaName}`)
  let data= await resp.json()
  areaDish=data.meals
  console.log("All my dishes in this country")
  console.log(areaDish);
  displayAreaDish()

 }
 let areaRow =document.querySelector(".areaRow")
 
 function   displayAreaDish(){
  areaRow.style.display="none"
  let temp=""
  areaDish.forEach((el)=>{
    temp+=`
    <div class="col-md-3 col-sm-12 g-3 mycol" uniqueID=${el.idMeal}>
    <div class="item ">
      <img src=${el.strMealThumb} alt="meal-item" class="myImage">
      <div class="imgoverlayer">
        <h2 class="overlayertitle">${el.strMeal}</h2>
        
      </div>
    </div>

  </div>
    `
  })
  document.querySelector(".areaDish").innerHTML=temp
  showMyOverlayer()

 }



// ----------------------------Ingredients-------------------------------
let ingredientLink=document.querySelector(".ingredientLink")
let ingredientsSection =document.querySelector(".ingredientsSection")
let eachIngredientRow=document.querySelector(".eachIngredientRow")
//  let allIngredientsRow=document.querySelector(".allIngredientsRow")
ingredientLink.addEventListener("click" , function () {
  inputSection.style.display="none"
  searchSection.style.display="none"
  sectionOne.style.display="none"
  myoverlay.style.display="none"
  areaSection.style.display="none"
  categorySection.style.display="none"

  allIngredientsRow.style.display="flex"
  eachIngredientRow.style.display="none"
  ingredientsSection.style.display="block"
  getIngredients()

})
let ingredientsList=[]
async function getIngredients(){
  let resp = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
  let data = await resp.json()
  ingredientsList=data.meals
  console.log("these are my ingredients");
  console.log(ingredientsList);
  displayIngredients()
}

// getIngredients()

function displayIngredients(){
  let temp=""
  for(let i=0 ; i<=20;i++){
    temp+=`
    <div class="col-md-3 text-center text-white myIngItems" IngredientName=${ingredientsList[i].strIngredient}>
  <i class="fa-solid fa-drumstick-bite ingredientsIcon"></i>
  <h3>${ingredientsList[i].strIngredient}</h3>
  <p class="shortparagraph">${ingredientsList[i].strDescription}</p>
  </div>
    `
  }
  document.querySelector(".allIngredientsRow").innerHTML=temp
getIngredientName()
}
function getIngredientName(){
  let myIngItems =document.querySelectorAll(".myIngItems")
  myIngItems.forEach((el)=>{
    el.addEventListener("click" , function(){
      let GetThisName=el.getAttribute("IngredientName")
      eachIngredientRow.style.display="flex"

      console.log(GetThisName)
      getOneIngredient(GetThisName)

    })
  })
}
let myOneIngredient=[]
async function getOneIngredient(IngName){
  let resp =await fetch (`https://www.themealdb.com/api/json/v1/1/filter.php?i=${IngName}`)
  let data= await resp.json()
  myOneIngredient=data.meals
  console.log("The one ingredient")
  console.log(myOneIngredient)
  displayOneIngredient()

}
let allIngredientsRow=document.querySelector(".allIngredientsRow")
function displayOneIngredient(){
  let temp = ""
  myOneIngredient.forEach((el)=>{
    temp+=`    <div class="col-md-3 col-sm-12 g-3 mycol" uniqueID=${el.idMeal}>
    <div class="item ">
      <img src=${el.strMealThumb} alt="meal-item" class="myImage">
      <div class="imgoverlayer">
        <h2 class="overlayertitle">${el.strMeal}</h2>
        
      </div>
    </div>

  </div>
    `
  })
  allIngredientsRow.style.display="none"
  document.querySelector(".eachIngredientRow").innerHTML=temp
  showMyOverlayer()

}

// -----------------------inputSection------------------
let nameInput=document.querySelector(".nameInput")
let emailInput=document.querySelector(".emailInput")
let phoneInput =document.querySelector(".phoneInput")
let ageInput=document.querySelector(".ageInput")
let passwordInput=document.querySelector(".passwordInput")
let RepasswordInput=document.querySelector(".RepasswordInput")
let alertOne=document.querySelector(".alertOne")
let alertTwo=document.querySelector(".alertTwo")
let alertThree=document.querySelector(".alertThree")
let alertfour=document.querySelector(".alertfour")
let alertFive=document.querySelector(".alertFive")
let alertsix=document.querySelector(".alertsix")
let ContactLink=document.querySelector(".ContactLink")
let inputSection=document.querySelector(".inputSection")


ContactLink.addEventListener("click",function(){
  inputSection.style.display="block"
})




nameInput.addEventListener("keyup" ,function(){
  // let myNameInput=nameInput.value
let reg =/^[A-Za-z ]{3,10}[A-Za-z]{3,10}$/
if(reg.test(nameInput.value)==true){
  alertOne.classList.replace("d-block","d-none")
}
else{
  alertOne.classList.replace("d-none","d-block")

}
})
emailInput.addEventListener("keyup" ,function(){
  // let myNameInput=nameInput.value
let reg =/^[a-zA-Z][a-zA-Z0-9_]{5,20}@[a-zA-z]{3,10}\.(com)$/
if(reg.test(emailInput.value)==true){
  alertTwo.classList.replace("d-block","d-none")
}
else{
  alertTwo.classList.replace("d-none","d-block")

}
})

phoneInput.addEventListener("keyup" ,function(){
  // let myNameInput=nameInput.value
let reg =/^(010|011|012|015)[0-9]{8}$/
if(reg.test(phoneInput.value)==true){
  alertThree.classList.replace("d-block","d-none")
}
else{
  alertThree.classList.replace("d-none","d-block")

}
})

ageInput.addEventListener("keyup" ,function(){
  // let myNameInput=nameInput.value
let reg =/^[1-9][0-9]$/
if(reg.test(ageInput.value)==true){
  alertfour.classList.replace("d-block","d-none")
}
else{
  alertfour.classList.replace("d-none","d-block")

}
})

passwordInput.addEventListener("keyup" ,function(){
  // let myNameInput=nameInput.value
let reg =/^[a-zA-Z0-9_]{8,20}$/
if(reg.test(passwordInput.value)==true){
  alertFive.classList.replace("d-block","d-none")
}
else{
  alertFive.classList.replace("d-none","d-block")

}
})
RepasswordInput.addEventListener("keyup" ,function(){
  // let myNameInput=nameInput.value
// let reg =/^[a-zA-Z0-9_]{8,20}$/
if(RepasswordInput.value == passwordInput.value){
  alertsix.classList.replace("d-block","d-none")
}
else{
  alertsix.classList.replace("d-none","d-block")

}
})

$(document).ready(function(){
  $(".loadingPage").fadeOut(2000)
})




// let i =1
// console.log(`ingredient${i}`)
// for(let i=1 ; i<=20 ; i++){
//   console.log(`ingredient${i}`)

// }
let specialArray=[]
for(let i=1 ; i<=20 ; i++){
  if(allDishes.strIngredient+i != ""){
    specialArray.push("hello")
  }

}
console.log(specialArray)