    let mycart = []
    // console.log(mycart.length);
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
        // lenght.textContent = mycart.length
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

        mycart.push(myitem)
        localStorage.setItem("cart", JSON.stringify(mycart));

        let initialBalance = e.price;
        if(!localStorage.totalBalance){
            console.log(e);
            localStorage.setItem("totalBalance", JSON.stringify(initialBalance))
        }else{
            initialBalance = JSON.parse(localStorage.getItem("totalBalance"))
            initialBalance = initialBalance + e.price;
            console.log(initialBalance);
            localStorage.setItem("totalBalance", JSON.stringify(initialBalance))
        }
        let localData = JSON.parse(localStorage.getItem("totalBalance"))

    }
    const cart = ()=> {
        let alluser = JSON.parse(localStorage.getItem("cart")) 
        lenght.textContent = alluser.length;
        disp.innerHTML = "";
        alluser.map((value, index) => {
            disp.innerHTML +=`<div  data-bs-toggle="modal" data-bs-target="#exampleModal"  class="col-md-3 col-sm-6 col-6  py-1">
            <div class="card">
                <div class="d-inline d-lg-flex justify-content-between p-1 ">
                    <div class="text-center">
                        <img alt="" class="img-fluid rounded" width="400" src="${value.image}" >
                    </div>
                    <div class="px-3 text-center">
                        <p><span class="fw-bold">${value.name}</span> </p>
                        <p><span class="fw-bold">₦ ${value.price}</p>
                    </div>
                   
                </div>
            </div> 
        </div>`
        })
        // console.log(alluser)
        mytotal.innerHTML = JSON.parse(localStorage.getItem("totalBalance"))
    }
    const cartt = ()=>{
        window.location.href ="cart.html"
    }
    const home = ()=>{
        window.location.href ="index.html"
    }
    const deleteall = ()=>{
        // window.location.href ="index.html"
        let allusers = JSON.parse(localStorage.getItem("cart")) 
        allusers.splice(allusers, allusers.length);
        console.log(allusers);
        localStorage.setItem("cart", JSON.stringify(allusers));
        cart()
    }
    const Delete = (e)=>{
        let alluser = JSON.parse(localStorage.getItem("cart")) 
        alluser.splice(e, 1);
        console.log(alluser);
        localStorage.setItem("cart", JSON.stringify(alluser));

        // let initialBalance = e.price;
        // if(!localStorage.totalBalance){
        //     console.log(e);
        //     localStorage.setItem("totalBalance", JSON.stringify(initialBalance))
        // }else{
        //     initialBalance = JSON.parse(localStorage.getItem("totalBalance"))
        //     initialBalance = initialBalance - e.price;
        //     console.log(initialBalance);
        //     localStorage.setItem("totalBalance", JSON.stringify(initialBalance))
        // }

        location.reload()
        mycart()
    }



