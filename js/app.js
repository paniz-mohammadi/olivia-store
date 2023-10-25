const navbar = document.querySelector(".navbar");
const navBtn = document.getElementById("nav-btn");
const navLinks = document.getElementById("nav-links");

const sidebar = document.querySelector(".sidebar");
// const sidebarBtn = document.getElementById("sidebar-btn");
const sideLinks = document.getElementById("sidebar-links"); 

const closeBtn = document.querySelector("close-btn");

// add event listener
navBtn.addEventListener("click", () => 
{
    navLinks.classList.toggle("show-links");
});

// closeBtn.addEventListener('click', () =>
// {
    // navbar.classList.remove("show-links");
//     navbar.classList.toggle("close");
// })


prodcuctsLink.addEventListener('click', () =>
{
    products.innerHTML = '';

    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data =>
        {
            data.map(item =>
            {
                products.insertAdjacentHTML("beforeend",
                `
                <div class="products-container">
                    <a href="./product.html" class="product-link" data-product-id=${item.id}>
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
                    </a>
                </div>` )
            })
        })    
})

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(link => 
{
    link.addEventListener("click", e => 
    {
        e.preventDefault();
        navLinks.classList.remove("show-links");

        const id = e.target.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        let position = element.offsetTop - 62;

        window.scrollTo(
        {
            left: 0,
            top: position,
            behavior: "smooth"
        });
    });
});

function showSigninPage()
{
    window.location.href= "./sign-in.html";
} 

function showSignupPage()
{
    window.location.href= "./sign-up.html";
}
