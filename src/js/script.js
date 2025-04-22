window.onload = function() {
    const menuMobile = document.querySelector(".menu-mobile");
    const menu = document.querySelector(".menu ul");
    
    menuMobile.addEventListener("click", function() {
        if(menu.style.display === 'none') {
            menu.style.display = 'flex';  
        } else {
            menu.style.display = 'none';  
        }
    });

    const menuItems = document.querySelectorAll(".menu ul");
    menuItems.forEach(item => {
        item.addEventListener("click", function() {
            menu.style.display = 'none'; 
        });
    });
};

