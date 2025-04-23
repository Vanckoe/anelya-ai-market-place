let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
      const productCard = e.target.closest('.bg-white');
      const product = {
        id: productCard.querySelector('h3').textContent.trim(),
        name: productCard.querySelector('h3').textContent.trim(),
        price: Number(productCard.querySelector('p').textContent.replace(/[^0-9]/g, '')),
        quantity: 1
      };
      addToCart(product);
    });
  });

  updateCartCounter(); 
});

function addToCart(product) {
  const existingProduct = cart.find(item => item.id === product.id);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push(product);
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCounter();
}

function updateCartCounter() {
  const cartCounter = document.getElementById('cart-counter');
  if (cartCounter) {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCounter.textContent = totalCount;
  }
}


document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('cart-items')) {
      renderCartItems();
    }
    updateCartCounter();
  });
  
  function renderCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    cartItemsContainer.innerHTML = cart.map(item => `
      <div class="bg-white rounded-xl shadow p-4">
        <h3 class="text-lg font-medium">${item.name}</h3>
        <p class="text-gray-600">Количество: ${item.quantity}</p>
        <p class="text-[#4AA3F3] font-bold">${(item.price * item.quantity).toLocaleString()}₸</p>
        <button class="text-red-500 hover:text-red-700 mt-2" onclick="removeFromCart('${item.id}')">Удалить</button>
      </div>
    `).join('');
  
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cartTotal.textContent = `${total.toLocaleString()}₸`;
  }
  
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCartItems();
    updateCartCounter();
  }
  
  function checkout() {
    if (cart.length === 0) {
      alert('Корзина пуста!');
      return;
    }
    alert('Заказ оформлен! Спасибо за покупку.');
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCartItems();
    updateCartCounter();
  }
  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".product-card");
  
    cards.forEach(card => {
      card.addEventListener("click", () => {
        const title = card.querySelector("h3").innerText;
        const price = card.querySelector("p").innerText;
        const image = card.querySelector("img").src;
        const description = card.dataset.description || "Описание недоступно.";
  
        document.getElementById("modal-title").innerText = title;
        document.getElementById("modal-price").innerText = price;
        document.getElementById("modal-image").src = image;
        document.getElementById("modal-description").innerText = description;
  
        document.getElementById("modal").classList.remove("hidden");
      });
    });
  
    document.getElementById("close-modal").addEventListener("click", () => {
      document.getElementById("modal").classList.add("hidden");
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".product-card");
  
    cards.forEach(card => {
      card.addEventListener("click", () => {
        const title = card.querySelector("h3").innerText;
        const price = card.querySelector("p").innerText;
        const image = card.querySelector("img").src;
        const description = card.dataset.description || "Описание недоступно.";
  
        document.getElementById("modal-title").innerText = title;
        document.getElementById("modal-price").innerText = price;
        document.getElementById("modal-image").src = image;
        document.getElementById("modal-description").innerText = description;
  
        document.getElementById("modal").classList.remove("hidden");
      });
    });
  
    document.getElementById("close-modal").addEventListener("click", () => {
      document.getElementById("modal").classList.add("hidden");
    });
  });
  
  