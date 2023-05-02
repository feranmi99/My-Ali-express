    let mycart = []
    if (localStorage.cart) {
        mycart = JSON.parse(localStorage.getItem("cart")) 
    }
    const addtocart = (product)=>{
        // let imaga = document.getElementById("images").innerHTML;
        // let name = document.getElementById("names").innerHTML;
        // let price = document.getElementById("prices").innerHTML;
        
        let imagess = product.image;
        let namss = product.name;
        let pricess = product.price

        let myitem = {
            image:imagess,
            name:namss,
            price:pricess
        }
        
        mycart.push(myitem)
        console.log(mycart)
        localStorage.setItem("cart", JSON.stringify(mycart));
        
    }
    const cart = ()=> {
        let alluser = JSON.parse(localStorage.getItem("cart")) 
        disp.innerHTML +=  alluser.map((value,index) =>{
            
            return `<div class="col-md-5 col-12 col-sm-6 py-1">
                        <div class="card">
                            <div class="d-inline d-lg-flex justify-content-between p-2 ">
                                <div class="text-center">
                                    <img alt="" class="img-fluid" width="160" src=${value.image} >
                                </div>
                                <div class="px-3 text-center">
                                    <p><span class="fw-bold">${value.name}</span> </p>
                                    <p><span class="fw-bold"> ${value.price}</p>
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
        // window.relaoad()
    }
    const cartt = ()=>{
        window.location.href ="cart.html"
    }
    const home = ()=>{
        window.location.href ="index.html"
    }
    const Delete = (e)=>{
        let alluser = JSON.parse(localStorage.getItem("cart")) 
        alluser.splice(e, 1);
        console.log(alluser);
        localStorage.setItem("cart", JSON.stringify(alluser));
        location.reload()
        mycart()
    }