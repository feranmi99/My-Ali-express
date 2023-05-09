    let mycart = []
    let doll= [];
    let mybalance = 0
    let storageData;
    if(localStorage.mybalance){
        storageData = JSON.parse(localStorage.getItem("mybalance"));
    }
    if(!localStorage.mybalance){
        localStorage.setItem("mybalance", JSON.stringify(mybalance));
    }

    if (localStorage.cart) {
        mycart = JSON.parse(localStorage.getItem("cart")) 
    }
    // const addtocart = (product)=>{
    //     console.log(storageData);
    //     // let imaga = document.getElementById("images").innerHTML;
    //     // let name = document.getElementById("names").innerHTML;
    //     // let price = document.getElementById("prices").innerHTML;
        
    //     let imagess = product.image;
    //     let names = product.name;
    //     let pricess = product.price
        
    //     let myitem = {
    //         image:imagess,
    //         name:names,
    //         price:pricess
    //     }
    //     mycart.push(myitem)
    //     localStorage.setItem("cart", JSON.stringify(mycart));

        
    //     if (localStorage.myhistory) {
    //         doll = JSON.parse(localStorage.getItem("mybalance")) 
            
    //     }
    //     if(!storageData){
    //         mybalance + myitem.price;
    //     }else{
    //         let totalBalace = storageData + myitem.price;
    //         console.log(totalBalace);
    //         localStorage.setItem("mybalance", JSON.stringify(totalBalace));
    //     }
        
        
        
    // }
        const addToCart = (e) =>{
            let imagess = e.image;
            let names = e.name;
            let pricess = e.price
            
            let myitem = {
                image:imagess,
                name:names,
                price:pricess
            }
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
        disp.innerHTML +=  alluser.map((value,index) =>{
            
            return `<div class="col-md-5 col-12 col-sm-6 py-1">
                        <div class="card">
                        <p><span class="fw-bold ">${index + 1}</span> </p>
                            <div class="d-inline d-lg-flex justify-content-between p-2 ">
                                <div class="text-center">
                                    <img alt="" class="img-fluid" width="160" src=${value.image} >
                                </div>
                                <div class="px-3 text-center">
                                    <p><span class="fw-bold">${value.name}</span> </p>
                                    <p><span class="fw-bold">₦ ${value.price}</p>
                                </div>
                                <div class="d-flex">
                                    <button class="btn btn-outline-danger float-end fw-bold">Payment Method</button>
                                    <button class="btn btn-outline-danger float-end fw-bold ms-2" onclick="Delete(${index})">Delete Item</button>
                                </div>
                            </div>
                        </div> 
                    </div>`
            
        })
        console.log(alluser)
        mytotal.innerHTML = JSON.parse(localStorage.getItem("totalBalance"))
    }
    const cartt = ()=>{
        window.location.href ="cart.html"
    }
    const home = ()=>{
        window.location.href ="index.html"
    }
    const deleteall = (e)=>{
        // window.location.href ="index.html"
        let allusers = JSON.parse(localStorage.getItem("cart")) 
        allusers.splice(e, allusers);
        console.log(allusers);
        localStorage.setItem("cart", JSON.stringify(allusers));
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