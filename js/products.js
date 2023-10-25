//arrow symbol 

const productsContainer = [...document.querySelectorAll('.products-container')];
const preBtn = [...document.querySelectorAll('.pre-btn')];
const nextBtn = [...document.querySelectorAll('.next-btn')];

productsContainer.forEach((item, i) => 
{
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    nextBtn[i].addEventListener('click', () =>
    {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => 
    {
        item.scrollLeft -= containerWidth;
    })
})

// const onSale_products = document.getElementById("on-sale");
// const highRank_products = document.getElementById("high-rank");
// const new_products = document.getElementById("new-ones");

const products = document.querySelector('.products');
const productsCard = document.querySelector('.products-card');
const productImage = document.querySelector('.product-image');
const productThumb = document.querySelector('product-thumb');

const productName = document.querySelector('.product-name');
const productDes = document.querySelector('.product-short-des');
const productPrice = document.querySelector('.price');

const productDetails = document.querySelector('.product-details');

const cartBtn = document.querySelector(".btn-cart");

// window.screen.addEventListener('load', () =>
// {
//     const proId = localStorage.getItem('local-product');
//     console.log(proId);
//     getProduct();
// })

// window.screen.addEventListener('load', (event) =>
// {
//     event.preventDefault();
// })

// window.onload
// (
//     localStorage.getItem('')
// )

document.addEventListener('DOMContentLoaded', () =>
{
    const proId = localStorage.getItem('localStorage-product');
    getProduct(proId);
})

function getProduct(proId)
{
    fetch(`https://fakestoreapi.com/products/${proId}`)
    .then(res => res.json())
    .then(pro =>  
    {
        productDetails.insertAdjacentHTML("beforeend",
        `
        <div class="image-slider">
            <img src="${pro.image}" class="active">
        </div>

        <div class="details">
            <h2 class="product-name">${pro.title}</h2>
            <p class="product-short-des">${pro.description}</p>
            <span class="product-price">${pro.price}$</span>

            <button class="btn-add cart-btn">add to cart</button>
            <button class="btn-add">add to wishlist</button>
        </div>
        ` )
    })  
}

function getAllProducts()
{
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data =>
        {
            products.innerHTML = '';

            let i = 7;
            while(i < 13)
            {
                products.insertAdjacentHTML("beforeend",
                `
                    <div class="section-title">
                        <h2>On Sale</h2>
                        <div class="underline"></div>
                    </div>
            
                    <button class="pre-btn"><img src="/assets/images/arrow.png" alt=""></button>
                    <button class="next-btn"><img src="/assets/images/arrow.png" alt=""></button>
            
                    <div class="products-container">
                        <a href="./product.html" class="product-link" data-product-id=${data[++i].id}>
                            <div class="product-card">
                                <div class="product-image">
                                    <span class="discount-tag">23% off</span>
                                    <img src="${data[i].image}" class="product-thumb" alt="">
                                    
                                    <button class="card-btn">add to whislist</button>
                                </div>
                                <div class="product-info">
                                    <h3 class="product-name">${data[i].title}</h3>
                                    <p class="product-short-des">${data[i].description}</p>
                                    <span class="price">${Math.floor((data[i].price * 77))/100}$</span><span class="actual-price">${data[i].price}$</span>
                                    <button class="btn-add-to-cart">Add to Cart</button>
                                </div>
                            </div>
                        </a>

                        <a href="./product.html" class="product-link" data-product-id=${data[i += 2].id}>
                            <div class="product-card">
                                <div class="product-image">
                                    <span class="discount-tag">20% off</span>
                                    <img src="${data[i].image}" class="product-thumb" alt="">
                                    <button class="card-btn">add to whislist</button>
                                </div>
                                <div class="product-info">
                                    <h3 class="product-name">${data[i].title}</h3>
                                    <p class="product-short-des">${data[i].description}</p>
                                    <span class="price">${Math.floor((data[i].price * 80))/100}$</span><span class="actual-price">${data[i].price}$</span>
                                    <button class="btn-add-to-cart">Add to Cart</button>
                                </div>
                            </div>
                        </a>

                        <a href="./product.html" class="product-link" data-product-id=${data[i += 2].id}>
                            <div class="product-card">
                                <div class="product-image">
                                    <span class="discount-tag">20% off</span>
                                    <img src="${data[i].image}" class="product-thumb" alt="">
                                    <button class="card-btn">add to whislist</button>
                                </div>
                                <div class="product-info">
                                    <h3 class="product-name">${data[i].title}</h3>
                                    <p class="product-short-des">${data[i].description}</p>
                                    <span class="price">${Math.floor((data[i].price * 80))/100}$</span><span class="actual-price">${data[i].price}$</span>
                                    <button class="btn-add-to-cart">Add to Cart</button>
                                </div>
                            </div>
                        </a>

                        <a href="./product.html" class="product-link" data-product-id=${data[i += 2].id}>
                            <div class="product-card">
                                <div class="product-image">
                                    <span class="discount-tag">30% off</span>
                                    <img src="${data[i].image}" class="product-thumb" alt="">
                                    <button class="card-btn">add to whislist</button>
                                </div>
                                <div class="product-info">
                                    <h3 class="product-name">${data[i].title}</h3>
                                    <p class="product-short-des">${data[i].description}</p>
                                    <span class="price">${Math.floor((data[i].price * 70))/100}$</span><span class="actual-price">${data[i].price}$</span>
                                    <button class="btn-add-to-cart">Add to Cart</button>
                                </div>
                            </div>
                        </a>

                        <a href="./product.html" class="product-link" data-product-id=${data[++i].id}>
                            <div class="product-card">
                                <div class="product-image">
                                    <span class="discount-tag">30% off</span>
                                    <img src="${data[i].image}" class="product-thumb" alt="">
                                    <button class="card-btn">add to whislist</button>
                                </div>
                                <div class="product-info">
                                    <h3 class="product-name">${data[i].title}</h3>
                                    <p class="product-short-des">${data[i].description}</p>
                                    <span class="price">${Math.floor((data[i].price * 70))/100}$</span><span class="actual-price">${data[i].price}$</span>
                                    <button class="btn-add-to-cart">Add to Cart</button>    
                                </div>
                            </div>
                        </a>
                    </div>` 
                )  
            }

            let highRank_products = [];
            function checkRank()
            {
                i = 0;
                let j = 0;
                data.map(product =>
                {
                    if(product.rating.rate > 4.1)
                    {
                        highRank_products[j++] = data[i];
                    }
                    i++;
                })

                // highRank_products.forEach(element => 
                // {
                //     console.log(element);    
                // });
            }
            checkRank();

            i = 0;
            while(i < highRank_products.length)
            {
                products.insertAdjacentHTML("beforeend",
                `
                    <div class="section-title">
                        <h2>Best Selling</h2>
                        <div class="underline"></div>
                    </div>
        
                    <button class="pre-btn"><img src="/assets/images/arrow.png" alt=""></button>
                    <button class="next-btn"><img src="/assets/images/arrow.png" alt=""></button>
            
                    <div class="products-container">
                        <a href="./product.html" class="product-link" data-product-id=${highRank_products[i].id}>
                            <div class="product-card">
                                <div class="product-image">
                                    <img src="${highRank_products[i].image}" class="product-thumb" alt="">
                                    <button class="card-btn">add to whislist</button>
                                </div>
                                <div class="product-info">
                                    <h3 class="product-name">${highRank_products[i].title}</h3>
                                    <p class="product-short-des">${highRank_products[i].description}</p>
                                    <span class="price">${highRank_products[i++].price}$</span>
                                    <button class="btn-add-to-cart">Add to Cart</button>        
                                </div>
                            </div>
                        </a>            

                        <a href="./product.html" class="product-link" data-product-id=${highRank_products[i].id}>
                            <div class="product-card">
                                <div class="product-image">
                                    <img src="${highRank_products[i].image}" class="product-thumb" alt="">
                                    <button class="card-btn">add to whislist</button>
                                </div>
                                <div class="product-info">
                                    <h3 class="product-name">${highRank_products[i].title}</h3>
                                    <p class="product-short-des">${highRank_products[i].description}</p>
                                    <span class="price">${highRank_products[i++].price}$</span>
                                    <button class="btn-add-to-cart">Add to Cart</button>        
                                </div>
                            </div>
                        </a>        

                        <a href="./product.html" class="product-link" data-product-id=${highRank_products[i].id}>
                            <div class="product-card">
                                <div class="product-image">
                                    <img src="${highRank_products[i].image}" class="product-thumb" alt="">
                                    <button class="card-btn">add to whislist</button>
                                </div>
                                <div class="product-info">
                                    <h3 class="product-name">${highRank_products[i].title}</h3>
                                    <p class="product-short-des">${highRank_products[i].description}</p>
                                    <span class="price">${highRank_products[i++].price}$</span>
                                    <button class="btn-add-to-cart">Add to Cart</button>        
                                </div>
                            </div>
                        </a>        

                        <a href="./product.html" class="product-link" data-product-id=${highRank_products[i].id}>
                            <div class="product-card">
                                <div class="product-image">
                                    <img src="${highRank_products[i].image}" class="product-thumb" alt="">
                                    <button class="card-btn">add to whislist</button>
                                </div>
                                <div class="product-info">
                                    <h3 class="product-name">${highRank_products[i].title}</h3>
                                    <p class="product-short-des">${highRank_products[i].description}</p>
                                    <span class="price">${highRank_products[i++].price}$</span>
                                    <button class="btn-add-to-cart">Add to Cart</button>        
                                </div>
                            </div>
                        </a>        

                        <a href="./product.html" class="product-link" data-product-id=${highRank_products[i].id}>
                            <div class="product-card">
                                <div class="product-image">
                                    <img src="${highRank_products[i].image}" class="product-thumb" alt="">
                                    <button class="card-btn">add to whislist</button>
                                </div>
                                <div class="product-info">
                                    <h3 class="product-name">${highRank_products[i].title}</h3>
                                    <p class="product-short-des">${highRank_products[i].description}</p>
                                    <span class="price">${highRank_products[i++].price}$</span>
                                    <button class="btn-add-to-cart">Add to Cart</button>        
                                </div>
                            </div>
                        </a>        

                        <a href="./product.html" class="product-link" data-product-id=${highRank_products[i].id}>
                            <div class="product-card">
                                <div class="product-image">
                                    <img src="${highRank_products[i].image}" class="product-thumb" alt="">
                                    <button class="card-btn">add to whislist</button>
                                </div>
                                <div class="product-info">
                                    <h3 class="product-name">${highRank_products[i].title}</h3>
                                    <p class="product-short-des">${highRank_products[i].description}</p>
                                    <span class="price">${highRank_products[i++].price}$</span>
                                    <button class="btn-add-to-cart">Add to Cart</button>        
                                </div>
                            </div>
                        </a>       
                    </div>`
                )
            }

            let new_products = [];
            function checkNew()
            {
                i = 0;
                let j = 0;
                data.map(product =>
                {
                    if(product.id === 2 || product.id === 4 || product.id === 6 || product.id === 7)
                    {
                        new_products[j++] = data[i];
                    }
                    i++;
                })

                // new_products.forEach(element => 
                // {
                //     console.log(element);    
                // });
            }
            checkNew();

            i = 0;
            while(i < new_products.length)
            {
                products.insertAdjacentHTML("beforeend",
                `
                    <div class="section-title">
                        <h2>What's New</h2>
                        <div class="underline"></div>
                    </div>
        
                    <button class="pre-btn"><img src="/assets/images/arrow.png" alt=""></button>
                    <button class="next-btn"><img src="/assets/images/arrow.png" alt=""></button>
            
                    <div class="products-container">
                        <a href="./product.html" class="product-link" data-product-id=${new_products[i].id}>
                            <div class="product-card">
                                <div class="product-image">
                                    <img src="${new_products[i].image}" class="product-thumb" alt="">
                                    <button class="card-btn">add to whislist</button>
                                </div>
                                <div class="product-info">
                                    <h3 class="product-name">${new_products[i].title}</h3>
                                    <p class="product-short-des">${new_products[i].description}</p>
                                    <span class="price">${new_products[i++].price}$</span>
                                    <button class="btn-add-to-cart">Add to Cart</button>   
                                </div>
                            </div>
                        </a>
                        
                        <a href="./product.html" class="product-link" data-product-id=${new_products[i].id}>
                            <div class="product-card">
                                <div class="product-image">
                                    <img src="${new_products[i].image}" class="product-thumb" alt="">
                                    <button class="card-btn">add to whislist</button>
                                </div>
                                <div class="product-info">
                                    <h3 class="product-name">${new_products[i].title}</h3>
                                    <p class="product-short-des">${new_products[i].description}</p>
                                    <span class="price">${new_products[i++].price}$</span>
                                    <button class="btn-add-to-cart">Add to Cart</button>   
                                </div>
                            </div>
                        </a>

                        <a href="./product.html" class="product-link" data-product-id=${new_products[i].id}>
                            <div class="product-card">
                                <div class="product-image">
                                    <img src="${new_products[i].image}" class="product-thumb" alt="">
                                    <button class="card-btn">add to whislist</button>
                                </div>
                                <div class="product-info">
                                    <h3 class="product-name">${new_products[i].title}</h3>
                                    <p class="product-short-des">${new_products[i].description}</p>
                                    <span class="price">${new_products[i++].price}$</span>
                                    <button class="btn-add-to-cart">Add to Cart</button>   
                                </div>
                            </div>
                        </a>

                        <a href="./product.html" class="product-link" data-product-id=${new_products[i].id}>
                            <div class="product-card">
                                <div class="product-image">
                                    <img src="${new_products[i].image}" class="product-thumb" alt="">
                                    <button class="card-btn">add to whislist</button>
                                </div>
                                <div class="product-info">
                                    <h3 class="product-name">${new_products[i].title}</h3>
                                    <p class="product-short-des">${new_products[i].description}</p>
                                    <span class="price">${new_products[i++].price}$</span>
                                    <button class="btn-add-to-cart">Add to Cart</button>   
                                </div>
                            </div>
                        </a>
                    </div>`
                )
            }

            const productLink = document.querySelectorAll('.product-link');
            
            productLink.forEach(item =>
            {
                item.addEventListener('click', function()
                {
                    const productId = this.getAttribute('data-product-id');
                    localStorage.setItem('localStorage-product',productId);
                    console.log(productId);
                }) 
            })
        })
}

getAllProducts();

// cartBtn.addEventListener('click' , () =>
// {
//     console.log('clicked');
//     window.location.href = "./cart.html";  
// })

const bgImages = [
    "D:\Codes\Projects\Online-Shop\assets\images\bg\premium_photo-2.png",
    "D:\Codes\Projects\Online-Shop\assets\images\bg\premium_photo.png",
    "D:\Codes\Projects\Online-Shop\assets\images\bg\susan-wilkinson-unsplash.jpg"
];

const node = document.querySelector(".banner");
const cycleImages = (images, container, step) =>
{
    images.forEach((image, index) => (
        setTimeout(() => 
        {
            container.style.backgroundImage = `url(${image})`
        }, step * (index + 1))
    ))
    setTimeout(() => cycleImages(images, container, step))
}

cycleImages(bgImages, node, 1000);

// const collection = document.querySelector("");

const electronics = [];
const jewelleries = [];
const menClothes = [];
const womenClothes = [];

function checkCategory(data)
{
    console.log('check Category');

    let i = 0;
    let j = 0;
    let k = 0;
    let l = 0;
    let p = 0;

    data.map(product =>
    {
        if(product.category === 'electronics')
        {
            electronics[j++] = data[i];
            // console.log('Electronics');
            // console.log(i);
            // console.log(j);
        }

        else if(product.category === 'jewelery')
        {
            jewelleries[k++] = data[i];
            // console.log('Jewelery');
            // console.log(i);
            // console.log(k);
        }

        else if(product.category === "men's clothing")
        {
            menClothes[l++] = data[i];
            // console.log("Men's clothing");    
            // console.log(i);
            // console.log(l);
        }
        
        else if(product.category === "women's clothing")
        {
            womenClothes[p++] = data[i];
            //console.log("Women's clothing");
            // console.log(i);
            // console.log(p);
        }
        i++;
    })
}

function showSelectedCategory(key)
{
    console.log('showSelectedCategory');
    products.innerHTML = '';
    // collection.innerHTML = '';

    if(key === 1)
    {
        // electronics.forEach(item =>
        // {
        //     console.log(item);
        // })

        electronics.map(item =>
        {
            products.insertAdjacentHTML("beforeend",
                `<div class="products-container">
                    <div class="product-card">
                        <div class="product-image">
                            <img src="${item.image}" class="product-thumb" alt="">
                            <button class="card-btn">add to whislist</button>
                        </div>
                        <div class="product-info">
                            <h3 class="product-name">${item.title}</h3>
                            <p class="product-short-des">${item.description}</p>
                            <span class="price">${item.price}</span>
                            <button class="btn-cart">Add to Cart</button>   
                        </div>
                    </div>
                </div>`
            )
        })
    }

    if(key === 2)
    {
        // jewelleries.forEach(item =>
        // {
        //     console.log(item);
        // })

        jewelleries.map(item =>
        {
            products.insertAdjacentHTML("beforeend",
                `<div class="products-container">
                    <div class="product-card">
                        <div class="product-image">
                            <img src="${item.image}" class="product-thumb" alt="">
                            <button class="card-btn">add to whislist</button>
                        </div>
                        <div class="product-info">
                            <h3 class="product-name">${item.title}</h3>
                            <p class="product-short-des">${item.description}</p>
                            <span class="price">${item.price}</span>
                            <button class="btn-cart">Add to Cart</button>   
                        </div>
                    </div>
                </div>`
            )
        })
    }
    
    if(key === 3)
    {
        // menClothes.forEach(item =>
        // {
        //     console.log(item);
        // })   

        menClothes.map(item =>
        {
            products.insertAdjacentHTML("beforeend",
                `<div class="products-container">
                    <div class="product-card">
                        <div class="product-image">
                            <img src="${item.image}" class="product-thumb" alt="">
                            <button class="card-btn">add to whislist</button>
                        </div>
                        <div class="product-info">
                            <h3 class="product-name">${item.title}</h3>
                            <p class="product-short-des">${item.description}</p>
                            <span class="price">${item.price}</span>
                            <button class="btn-cart">Add to Cart</button>   
                        </div>
                    </div>
                </div>`
            )
        })
    }
    
    if(key === 4)
    {
        // womenClothes.forEach(item =>
        // {
        //     console.log(item);
        // })

        womenClothes.map(item =>
        {
            products.insertAdjacentHTML("beforeend",
                `<div class="products-container">
                    <div class="product-card">
                        <div class="product-image">
                            <img src="${item.image}" class="product-thumb" alt="">
                            <button class="card-btn">add to whislist</button>
                        </div>
                        <div class="product-info">
                            <h3 class="product-name">${item.title}</h3>
                            <p class="product-short-des">${item.description}</p>
                            <span class="price">${item.price}</span>
                            <button class="btn-cart">Add to Cart</button>   
                        </div>
                    </div>
                </div>`
            )
        })
    }
}

const categories = document.querySelector('.categories');
const category = document.querySelector('.category');

const electronic = document.querySelector('.category-1');
const jewellery = document.querySelector('.category-2');
const menClothing = document.querySelector('.category-3');
const womenClothing = document.querySelector('.category-4');

category.addEventListener('click', (event) =>
{
    event.preventDefault();

    console.log('event category');

    // fetch('https://fakestoreapi.com/products')
    // .then(res => res.json())
    // .then(data => 
    // {        
    //     checkCategory(data);
    // })   
})

electronic.addEventListener('click', () =>
{   
    // if(electronics.length != 0)
    // {
    //     showSelectedCategory(1);
    // }

    if(electronics.length === 0 || jewelleries.length === 0 || menClothes.length === 0 || womenClothes.length === 0)
    {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => 
        {        
            checkCategory(data);
        })
    }
    else
    {
        console.log('else'); 
    }   

    showSelectedCategory(1);
    // products.innerHTML = '';
})

jewellery.addEventListener('click', () =>
{
    if(electronics.length === 0 || jewelleries.length === 0 || menClothes.length === 0 || womenClothes.length === 0)
    {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => 
        {        
            checkCategory(data);
        })
    }
    else
    {
        console.log('else'); 
    }   
     
    // fetch('https://fakestoreapi.com/products/jewelery')
    //     .then(data =>
    //     {
    //         console.log(data);
    //     }) 

    showSelectedCategory(2);
    // products.innerHTML = '';
})

menClothing.addEventListener('click', () =>
{
    if(electronics.length === 0 || jewelleries.length === 0 || menClothes.length === 0 || womenClothes.length === 0)
    {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => 
        {        
            checkCategory(data);
        })
    }
    else
    {
        console.log('else'); 
    }   

    showSelectedCategory(3);
    // products.innerHTML = '';
})

womenClothing.addEventListener('click', () =>
{   
    if(electronics.length === 0 || jewelleries.length === 0 || menClothes.length === 0 || womenClothes.length === 0)
    {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => 
        {        
            checkCategory(data);
        })
    }
    else
    {
        console.log('else'); 
    }   

    showSelectedCategory(4);
    // products.innerHTML = '';
})