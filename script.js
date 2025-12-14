const menuData = {
    coffee: [
        { id: 1, name: "Эспрессо", description: "Классический крепкий кофе", price: 150, image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" },
        { id: 2, name: "Капучино", description: "С молочной пенкой и рисунком", price: 200, image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" },
        { id: 3, name: "Латте", description: "Нежный кофе с молоком", price: 220, image: "https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" }
    ],
    desserts: [
        { id: 4, name: "Чизкейк Нью-Йорк", description: "Классический чизкейк с ягодным соусом", price: 280, image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" },
        { id: 5, name: "Тирамису", description: "Итальянский десерт с кофейным вкусом", price: 250, image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" },
        { id: 6, name: "Круассан с миндалём", description: "Свежая выпечка с миндальной начинкой", price: 180, image: "https://images.unsplash.com/photo-1555507036-ab794f27d2e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" }
    ],
    breakfasts: [
        { id: 7, name: "Английский завтрак", description: "Яичница, бекон, сосиски, фасоль, грибы", price: 350, image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" },
        { id: 8, name: "Блины с кленовым сиропом", description: "Три пышных блина с сиропом и ягодами", price: 220, image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" },
        { id: 9, name: "Овсянка с фруктами", description: "Полезная овсяная каша с сезонными фруктами", price: 180, image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" }
    ]
};

const burgerMenu = document.querySelector('.burger-menu');
const navList = document.querySelector('.nav-list');
const tabs = document.querySelectorAll('.tab');
const menuContainers = document.querySelectorAll('.menu-items');
const reservationForm = document.querySelector('.reservation-form');
const successModal = document.getElementById('successModal');
const closeModal = document.querySelector('.close-modal');

function loadMenuItems(category, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    menuData[category].forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-card';
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-card-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="price">${item.price} ₽</div>
            </div>
        `;
        container.appendChild(menuItem);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadMenuItems('coffee', 'coffee');
    loadMenuItems('desserts', 'desserts');
    loadMenuItems('breakfasts', 'breakfasts');
    
    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
        navList.classList.toggle('active');
    });
    
    document.querySelectorAll('.nav-list a').forEach(link => {
        link.addEventListener('click', () => {
            burgerMenu.classList.remove('active');
            navList.classList.remove('active');
        });
    });
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            menuContainers.forEach(container => {
                container.classList.remove('active');
            });
            const category = tab.getAttribute('data-category');
            document.getElementById(category).classList.add('active');
        });
    });
    
    reservationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        reservationForm.reset();
        successModal.style.display = 'flex';
    });
    
    closeModal.addEventListener('click', () => {
        successModal.style.display = 'none';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === successModal) {
            successModal.style.display = 'none';
        }
    });
    
    const heroSection = document.querySelector('.hero');
    const heroImages = [
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1516733968668-dbdce39c4651?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
    ];
    
    let currentImageIndex = 0;
    
    function changeHeroBackground() {
        currentImageIndex = (currentImageIndex + 1) % heroImages.length;
        heroSection.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${heroImages[currentImageIndex]}')`;
    }
    
    setInterval(changeHeroBackground, 5000);
});