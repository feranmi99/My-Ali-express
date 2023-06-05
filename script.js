let mycart = []
// console.log(mycart.length);
let eachItems = {};
    let mybalance = 0;
    let storageData;
    if(localStorage.mybalance){
        storageData = JSON.parse(localStorage.getItem("mybalance"));
    }
    if(!localStorage.mybalance){
        localStorage.setItem("mybalance", JSON.stringify(mybalance));
    }

    if (localStorage.cart) {
        mycart = JSON.parse(localStorage.getItem("cart")) 
        console.log(mycart.length);
    }
    const laoded = ()=>{
        let alluser = JSON.parse(localStorage.getItem("cart")) 
        lenght.textContent = alluser.length;
        setInterval(displayTime, 1000);

    };

    const displayTime = ()=> {
        let currentTime = new Date();
        let hours = currentTime.getHours();
        let minutes = currentTime.getMinutes();
        let seconds = currentTime.getSeconds();
        minutes = (minutes < 10 ? "0" : "") + minutes;
        seconds = (seconds < 10 ? "0" : "") + seconds;
        let period = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        let timeString = hours + ":" + minutes + ":" + seconds + " " + period;
        document.getElementById("clock").innerHTML = timeString;
    };

    const addToCart = (e) =>{
      eachItems = e;
      console.log(eachItems);
        let images = e.image;
        let names = e.name;
        let prices = e.price
        
        let myitem = {
            image:images,
            name:names,
            price:prices
        }
        showimage.src = images;
        showname.innerHTML = names;
        showprice.innerHTML = `₦${prices}`

        

    }
const addCartItems = () =>{
    mycart.push(eachItems)
        localStorage.setItem("cart", JSON.stringify(mycart));

        let initialBalance = eachItems.price;
        if(!localStorage.totalBalance){
            // console.log(e);
            localStorage.setItem("totalBalance", JSON.stringify(initialBalance))
            JSON.parse(localStorage.getItem("totalBalance"));
        }else{
            initialBalance = JSON.parse(localStorage.getItem("totalBalance"))
            initialBalance = initialBalance + eachItems.price;
            console.log(initialBalance);
            localStorage.setItem("totalBalance", JSON.stringify(initialBalance))
            JSON.parse(localStorage.getItem("totalBalance"));
        }
        cart();
}

    const cart = () => {
  let alluser = JSON.parse(localStorage.getItem("cart"));
  lenght.textContent = alluser.length;
  disp.innerHTML = "";
  alluser.map((value, index) => {
    disp.innerHTML += `
      <div class="col-md-4 col-sm-6 col-6 px-0 py-1">
        <div class="card">
          <div class="d-inline d-lg-flex justify-content-between p-1 ">
            <div class="text-center">
              <img alt="" class="img-fluid rounded" width="400" src="${value.image}" >
            </div>
            <div class="px-3 tfw-medium text-center">
              <p><span class="">${value.name}</span></p>
              <p><span class="fw-bold">₦ ${value.price}</span></p>
            </div>
            <div class="d-flex">
              <button id="payButton${index}" style="background-color:orange;color:white" class="btn fw-bold">Pay Now</button>
              <button class="btn btn-danger fw-bold mx-1" onclick="Delete(${index})">Delete</button>
            </div>
          </div>
        </div>
      </div>`;
  });
  mytotal.innerHTML =`₦ `+ JSON.parse(localStorage.getItem("totalBalance"));

  // Attach event listeners to pay buttons
  alluser.forEach((value, index) => {
    let payButton = document.getElementById(`payButton${index}`);
    payButton.addEventListener('click', () => initiatePayment(index));
  });
};

// Handle the payment process
function initiatePayment(index) {
  let alluser = JSON.parse(localStorage.getItem("cart"));
  let value = alluser[index];

  // Call Paystack API to initialize payment
  let handler = PaystackPop.setup({
    key: 'pk_test_fb8e6ca8bf86aecccd78ba8772768e112d45e32a', // Replace with your Paystack public key
    email: 'customer@example.com', // Replace with customer's email address
    amount: 50000, // Replace with the payment amount in kobo (e.g., 50000 for ₦500)
    currency: 'NGN', // Replace with your desired currency code
    ref: 'YOUR_UNIQUE_REFERENCE', // Replace with your unique reference for the transaction
    callback: function(response) {
      // This function is called after a successful payment
      alert('Payment successful. Transaction reference: ' + response.reference);
    },
    onClose: function() {
      // This function is called if the payment popup is closed without completing the payment
      alert('Payment window closed.');
    }
  });

  // Open the payment popup
  handler.openIframe();
};

      

    const cartt = ()=>{
        window.location.href ="cart.html"
    }
    const home = ()=>{
        window.location.href ="dashboard.html"
    }
    const deleteall = ()=>{
        let bal = 0
        localStorage.setItem("totalBalance", JSON.stringify(bal));
        let allusers = JSON.parse(localStorage.getItem("cart")) 
        allusers.splice(allusers, allusers.length);
        console.log(allusers);
        localStorage.setItem("cart", JSON.stringify(allusers));
        cart()
    }
    const Delete = (e)=>{
      console.log(e);
        let alluser = JSON.parse(localStorage.getItem("cart")) 
        alluser.splice(e, 1);
        console.log(alluser);
        localStorage.setItem("cart", JSON.stringify(alluser));

        let initialBalance = alluser[e].price
        console.log(initialBalance);
        if(!localStorage.totalBalance){
            console.log(e);
            localStorage.setItem("totalBalance", JSON.stringify(initialBalance))
        }else{
            initialB = JSON.parse(localStorage.getItem("totalBalance"))
            initialBalances = initialB - initialBalance;
            console.log(initialBalances);
            localStorage.setItem("totalBalance", JSON.stringify(initialBalances))
        }
        cart()
    }
    const logout = ()=> {
        setTimeout(() => {
          window.location.href = "index.html"
        }, 3000);
    }
    const user = ()=> {
      window.location.href="user.html"

    }