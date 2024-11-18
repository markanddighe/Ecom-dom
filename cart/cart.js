let localUser = JSON.parse(localStorage.getItem("userName"))

let productList = JSON.parse(localStorage.getItem("productList"))



let cartArray = JSON.parse(localStorage.getItem("AddCartData")) || []

let inceArray = JSON.parse(localStorage.getItem("AddCartData")) || []

let total = 0



displayProduct()


let regisId = document.getElementById("registerId")
let logId = document.getElementById("loginId")
let userLogoId = document.getElementById("userId")
let cartId = document.getElementById("cartId")
cartId.href = "../cart/cart.html"




let navChildThree = document.getElementById("navChildThree")



if (localUser === null) {
    cartId.innerHTML = null
}


if (localUser !== null) {
    regisId.innerHTML = null
    logId.innerHTML = null
    cartId.innerText = "Total" + " =" + Math.floor(total)


    userLogoId.innerHTML = localUser                            //login user name show user icon logo ki jgh 


    let logout = document.createElement("button")

    logout.innerText = "Logout User"

    logout.addEventListener("click", outFun)

    function outFun() {
        // console.log("hello");
        localStorage.removeItem("userName")
        window.location.href = "../login/login.html"

    }

    navChildThree.append(logout)
}


let aryQun = []
function displayProduct() {

    let productMain = document.getElementById("productMain")



    cartArray.map((el, index) => {

        console.log(el);



        let div = document.createElement("div")
        div.setAttribute("class", "productChild")

        let image = document.createElement("img")
        image.src = el.image
        image.setAttribute("class", "productImage")

        let title = document.createElement("h1")
        title.innerText = el.title

        let price = document.createElement("p")
        price.innerText = el.price

        total = total + el.price

        let p= el.price

        


        let CheckOutCardButton = document.createElement("button")
        CheckOutCardButton.innerText = "CheckOut"

        let RemoveItem = document.createElement("button")
        RemoveItem.innerText = "RemoveItem"

        CheckOutCardButton.addEventListener("click", function () {
            CheckOutFun(el)
        })

        CheckOutCardButton.setAttribute("class", "addCartButton")
        RemoveItem.setAttribute("class", "addCartButton")
        RemoveItem.style.marginLeft = "70px"

        RemoveItem.addEventListener("click", function () {
            removeFun(index)
            window.location.href = "../cart/cart.html"
        })

        let increBtn = document.createElement("button")
        increBtn.innerText = "Increment"
        increBtn.setAttribute("class", "addCartButton")


        increBtn.addEventListener("click", function () {
            increFun(quantity, TotalQuantity, price, p)
        })

        let decBtn = document.createElement("button")
        decBtn.innerText = "Decrement"
        decBtn.setAttribute("class", "addCartButton")
        decBtn.style.marginLeft = "70px"

        decBtn.addEventListener("click", function () {
            decFun(quantity, TotalQuantity, price, p)
        })



        let quantity = document.createElement("h3")

        let TotalQuantity = 1

        quantity.innerText = TotalQuantity

    


        div.append(image, title, price, CheckOutCardButton, RemoveItem, increBtn, decBtn, quantity)
        productMain.append(div)
    })

}


function removeFun(indexData) {

    // console.log(indexData);
    cartArray.splice(indexData, 1)

    localStorage.setItem("AddCartData", JSON.stringify(cartArray))
}

function increFun(quantity, TotalQuantity, price, p) {

    TotalQuantity = quantity.innerText
    TotalQuantity++

    quantity.innerText = TotalQuantity

    price.innerText = Math.floor(p * TotalQuantity)


}

function decFun(quantity, TotalQuantity, price, p) {

    console.log(TotalQuantity, 11111111111);

    TotalQuantity = quantity.innerText
    TotalQuantity--

    quantity.innerText = TotalQuantity

    price.innerText = Math.floor(price.innerText - p)
}




function CheckOutFun () {

    window.location.href = "../cart/checkOut.html"
}