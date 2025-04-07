// Shopping cart functionality
let cart = [];

// Update cart count in the header
function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    cartCount.textContent = cart.length;
}

// Add to cart functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('p').textContent;
        
        // Add product to cart
        cart.push({
            name: productName,
            price: productPrice
        });
        
        // Update cart count
        updateCartCount();
        
        // Show success message
        alert(`${productName} adicionado ao carrinho!`);
    });
});

// Cart icon click handler
document.querySelector('.cart-icon').addEventListener('click', function() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
    } else {
        let cartContent = 'Seu Carrinho:\n\n';
        cart.forEach(item => {
            cartContent += `${item.name} - ${item.price}\n`;
        });
        alert(cartContent);
    }
});

// Contact form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    // Here you would typically send this data to your server
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    this.reset();
}); 