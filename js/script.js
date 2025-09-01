         // Datos de los productos
        const products = [
            {
                id: 1,
                name: "Juego de Canillas hembra simple",
                category: "Canillas",
                description: "Set de canillas hembra universales para todo tipo de dispensers.",
                fullDescription: "Juego de canillas hembra simple de alta calidad, fabricadas en plástico resistente. Fáciles de instalar y de limpiar. Ideales para reemplazar canillas con fugas o rotas.",
                images: ["images/Juego de Canillas hembra simple_1.png", "images/Juego de Canillas hembra simple_2.png"]
            },
            {
                id: 2,
                name: "Juego de Canillas macho simple",
                category: "Canillas",
                description: "Set de canillas macho para un reemplazo rápido y sencillo.",
                fullDescription: "Juego de canillas macho simple para la mayoría de los dispensers. Material de alta durabilidad, no altera el sabor del agua. Mantiene un flujo constante y sin goteo.",
                images: ["images/Juego de Canillas macho simple_1.png", "images/Juego de Canillas macho simple_2.png"]
            },
            {
                id: 3,
                name: "Resistencia 90mm",
                category: "Resistencias",
                description: "Resistencia para dispensers de agua caliente.",
                fullDescription: "Resistencia de 90mm de diámetro, fabricada con materiales de alta conductividad térmica. Asegura un calentamiento rápido y eficiente del agua. Compatible con varios modelos de dispensers.",
                images: ["images/Resistencia 90mm_1.png", "images/Resistencia 90mm_2.png", "images/Resistencia 90mm_3.png"]
            },
            {
                id: 4,
                name: "Resistencia 100mm",
                category: "Resistencias",
                description: "Resistencia de 100mm para calentadores de dispensers.",
                fullDescription: "Resistencia de 100mm, ideal para reemplazar unidades defectuosas. Fabricada para una larga vida útil y un rendimiento óptimo. Fácil de instalar para técnicos especializados.",
                images: ["images/Resistencia 100mm_1.png", "images/Resistencia 100mm_2.png", "images/Resistencia 100mm_3.png"]
            },
            {
                id: 5,
                name: "Resistencia 115mm",
                category: "Resistencias",
                description: "Elemento calefactor de 115mm para una temperatura ideal.",
                fullDescription: "Resistencia de 115mm para mantener el agua caliente en tu dispenser. Diseñada para un rendimiento constante y seguro. No requiere mantenimiento frecuente.",
                images: ["images/Resistencia 115mm_1.png", "images/Resistencia 115mm_2.png", "images/Resistencia 115mm_3.png"]
            },
            {
                id: 6,
                name: "Resistencia 120mm",
                category: "Resistencias",
                description: "Resistencia de 120mm, compatible con modelos grandes.",
                fullDescription: "Resistencia de 120mm de diámetro, perfecta para dispensers de mayor tamaño. Garantiza un calentamiento uniforme y rápido del agua. Producto de alta durabilidad.",
                images: ["images/Resistencia 120mm_1.png", "images/Resistencia 120mm_2.png", "images/Resistencia 120mm_3.png"]
            },
            {
                id: 7,
                name: "Resistencia 130mm",
                category: "Resistencias",
                description: "Resistencia de 130mm para reemplazo en dispensers de alta capacidad.",
                fullDescription: "Resistencia de 130mm, ideal para dispensers de gran volumen. Fabricada para soportar altas temperaturas de manera eficiente. Proporciona una solución confiable para calentadores defectuosos.",
                images: ["images/Resistencia 130mm_1.png", "images/Resistencia 130mm_3.png"]
            },
            {
                id: 8,
                name: "Resistencia 140mm",
                category: "Resistencias",
                description: "Resistencia de 140mm para asegurar el calor en tu dispenser.",
                fullDescription: "Resistencia de 140mm de alto rendimiento, diseñada para una larga vida útil. Se instala fácilmente y proporciona un calentamiento rápido. Producto indispensable para el mantenimiento.",
                images: ["images/Resistencia 140mm_1.png", "images/Resistencia 140mm_2.png", "images/Resistencia 140mm_3.png"]
            },
            {
                id: 9,
                name: "Resistencia 160mm",
                category: "Resistencias",
                description: "Resistencia de 160mm, la más grande y potente.",
                fullDescription: "Resistencia de 160mm, la solución más potente para tus necesidades de calentamiento. Diseñada para un rendimiento superior y una durabilidad excepcional.",
                images: ["images/Resistencia 160mm_1.png", "images/Resistencia 160mm_2.png", "images/Resistencia 160mm_3.png"]
            }
        ];
        
        // UI Elements
        const productsContainer = document.getElementById('products-container');
        const productSearch = document.getElementById('product-search');
        const categoryFilter = document.getElementById('category-filter');
        const productModal = document.getElementById('product-modal');
        const modalName = document.getElementById('modal-name');
        const modalDescription = document.getElementById('modal-description');
        const modalFullDescription = document.getElementById('modal-full-description');
        const modalImage = document.getElementById('modal-image');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const addToCartBtn = document.getElementById('add-to-cart-btn');
        const quantityInput = document.getElementById('quantity-input');
        const whatsappFloatingBtn = document.getElementById('whatsapp-floating-btn');
        const cartCounter = document.getElementById('cart-counter');
        const cartModal = document.getElementById('cart-modal');
        const cartItemsContainer = document.getElementById('cart-items-container');
        const clearCartBtn = document.getElementById('clear-cart-btn');
        const sendWhatsappBtn = document.getElementById('send-whatsapp-btn');
        
        // "Antes y Después" Slider Elements
        const beforeAfterSlider = document.getElementById('before-after-slider');
        const afterImageContainer = document.getElementById('after-image-container');
        const sliderHandle = document.getElementById('slider-handle');
        
        // Estado
        let currentProduct = null;
        let currentImageIndex = 0;
        let cartItems = [];
        const WHATSAPP_NUMBER = '5491166082608';
        
        // Helper para renderizar las tarjetas de productos
        const renderProducts = (productsToRender) => {
            productsContainer.innerHTML = '';
            if (productsToRender.length === 0) {
                productsContainer.innerHTML = `<p class="text-center text-gray-500 col-span-full">No se encontraron productos con esa descripción o categoría.</p>`;
                return;
            }
        
            productsToRender.forEach(product => {
                const card = document.createElement('div');
                card.classList.add('bg-white', 'rounded-xl', 'shadow-lg', 'overflow-hidden', 'transform', 'hover:scale-105', 'transition-transform', 'duration-300', 'cursor-pointer', 'p-4', 'flex', 'flex-col', 'items-center', 'text-center');
                card.dataset.productId = product.id;
        
                const defaultImage = product.images[0] || 'https://placehold.co/800x600/F0F0F0/000000?text=Imagen+no+disponible';
        
                card.innerHTML = `
                    <img src="${defaultImage}" alt="${product.name}" class="w-full h-48 object-cover rounded-lg mb-4">
                    <h3 class="text-xl font-bold text-[#231f20] mb-2">${product.name}</h3>
                    <p class="text-gray-500 text-sm">${product.description}</p>
                `;
                productsContainer.appendChild(card);
            });
        };
        
        // Helper para renderizar los productos en el carrito
        const renderCartItems = () => {
            cartItemsContainer.innerHTML = '';
            if (cartItems.length === 0) {
                cartItemsContainer.innerHTML = `<p class="text-center text-gray-500">La lista está vacía.</p>`;
                return;
            }
            
            cartItems.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.classList.add('flex', 'items-center', 'justify-between', 'bg-gray-50', 'rounded-lg', 'p-3', 'mb-3', 'shadow-sm');
                cartItem.innerHTML = `
                    <div class="flex-1">
                        <h4 class="font-bold">${item.name}</h4>
                        <p class="text-sm text-gray-500">Cantidad: ${item.quantity}</p>
                    </div>
                    <button class="remove-from-cart-btn bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors duration-300" data-item-id="${item.id}">
                        <i class="fas fa-trash"></i>
                    </button>
                `;
                cartItemsContainer.appendChild(cartItem);
            });
        };
        
        // Inicialización de la página
        const init = () => {
            renderProducts(products);
            renderCartItems();
        
            // Llenar el filtro de categorías
            const categories = [...new Set(products.map(p => p.category))];
            categories.forEach(category => {
                const option = document.createElement('option');
                option.value = category;
                option.textContent = category;
                categoryFilter.appendChild(option);
            });
        };
        
        init();
        
        // Lógica de filtrado de productos
        const filterProducts = () => {
            const searchTerm = productSearch.value.toLowerCase();
            const selectedCategory = categoryFilter.value;
        
            const filteredProducts = products.filter(product => {
                const matchesSearch = product.name.toLowerCase().includes(searchTerm) || product.description.toLowerCase().includes(searchTerm);
                const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
                return matchesSearch && matchesCategory;
            });
            renderProducts(filteredProducts);
        };
        
        productSearch.addEventListener('keyup', filterProducts);
        categoryFilter.addEventListener('change', filterProducts);
        
        // Lógica del modal de productos
        productsContainer.addEventListener('click', (e) => {
            const card = e.target.closest('[data-product-id]');
            if (card) {
                const productId = parseInt(card.dataset.productId);
                currentProduct = products.find(p => p.id === productId);
                if (currentProduct) {
                    currentImageIndex = 0;
                    modalName.textContent = currentProduct.name;
                    modalDescription.textContent = currentProduct.description;
                    modalFullDescription.textContent = currentProduct.fullDescription;
                    modalImage.src = currentProduct.images[0];
                    quantityInput.value = 1; // Reset quantity to 1
                    productModal.classList.remove('hidden');
                }
            }
        });
        
        // Slider de imágenes en el modal
        prevBtn.addEventListener('click', () => {
            if (currentProduct) {
                currentImageIndex = (currentImageIndex - 1 + currentProduct.images.length) % currentProduct.images.length;
                modalImage.src = currentProduct.images[currentImageIndex];
            }
        });
        
        nextBtn.addEventListener('click', () => {
            if (currentProduct) {
                currentImageIndex = (currentImageIndex + 1) % currentProduct.images.length;
                modalImage.src = currentProduct.images[currentImageIndex];
            }
        });
        
        // Cerrar modal
        document.querySelector('.close-button').addEventListener('click', () => {
            productModal.classList.add('hidden');
        });
        
        // Lógica para agregar al carrito
        addToCartBtn.addEventListener('click', () => {
            if (currentProduct) {
                const quantity = parseInt(quantityInput.value, 10);
                if (quantity <= 0) {
                    // No do anything if quantity is not positive
                    return;
                }

                const existingItem = cartItems.find(item => item.id === currentProduct.id);
                if (existingItem) {
                    existingItem.quantity += quantity;
                } else {
                    cartItems.push({ ...currentProduct, quantity: quantity });
                }
                updateCartCounter();
                productModal.classList.add('hidden');
                // Agregar animación a la tarjeta del producto
                const card = document.querySelector(`[data-product-id='${currentProduct.id}']`);
                if (card) {
                    card.classList.add('card-added');
                    setTimeout(() => {
                        card.classList.remove('card-added');
                    }, 600); // Duración de la animación
                }
            }
        });
        
        // Actualizar el contador del carrito
        const updateCartCounter = () => {
            const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
            cartCounter.textContent = totalItems;
            if (totalItems > 0) {
                whatsappFloatingBtn.classList.remove('hidden');
            } else {
                whatsappFloatingBtn.classList.add('hidden');
            }
        };
        
        // Lógica del botón flotante de WhatsApp (abre el modal del carrito)
        whatsappFloatingBtn.addEventListener('click', () => {
            renderCartItems();
            cartModal.classList.remove('hidden');
        });
        
        // Cerrar modal del carrito
        document.querySelector('.cart-close-button').addEventListener('click', () => {
            cartModal.classList.add('hidden');
        });
        
        // Eliminar un elemento del carrito
        cartItemsContainer.addEventListener('click', (e) => {
            const removeBtn = e.target.closest('.remove-from-cart-btn');
            if (removeBtn) {
                const itemId = parseInt(removeBtn.dataset.itemId);
                cartItems = cartItems.filter(item => item.id !== itemId);
                renderCartItems();
                updateCartCounter();
            }
        });
        
        // Vaciar todo el carrito
        clearCartBtn.addEventListener('click', () => {
            cartItems = [];
            renderCartItems();
            updateCartCounter();
            cartModal.classList.add('hidden');
        });
        
        // Lógica para el enlace de WhatsApp (desde el modal del carrito)
        sendWhatsappBtn.addEventListener('click', () => {
            const message = "Hola, me gustaría solicitar los siguientes repuestos:\n\n" +
                cartItems.map(item => `- ${item.name} (${item.quantity})`).join('\n') +
                "\n\nMe gustaría coordinar una compra.";
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
            window.open(whatsappUrl, '_blank');
            cartItems = [];
            updateCartCounter();
            cartModal.classList.add('hidden');
        });
        
        // Lógica del slider "Antes y Después"
        let isDragging = false;
        
        const moveHandle = (clientX) => {
            const rect = beforeAfterSlider.getBoundingClientRect();
            let x = clientX - rect.left;
            if (x < 0) x = 0;
            if (x > rect.width) x = rect.width;
        
            sliderHandle.style.left = `${x}px`;
            afterImageContainer.style.width = `${x}px`;
        };
        
        sliderHandle.addEventListener('mousedown', (e) => {
            isDragging = true;
            beforeAfterSlider.classList.add('cursor-ew-resize');
        });
        
        beforeAfterSlider.addEventListener('mouseup', () => {
            isDragging = false;
            beforeAfterSlider.classList.remove('cursor-ew-resize');
        });
        
        beforeAfterSlider.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            moveHandle(e.clientX);
        });
        
        // Eventos táctiles para móviles
        sliderHandle.addEventListener('touchstart', (e) => {
            isDragging = true;
        }, { passive: true });
        
        beforeAfterSlider.addEventListener('touchend', () => {
            isDragging = false;
        });
        
        beforeAfterSlider.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            const touch = e.touches[0];
            moveHandle(touch.clientX);
        }, { passive: false });
        
        // Hacer que el slider se redimensione con la ventana
        window.addEventListener('resize', () => {
            moveHandle(beforeAfterSlider.getBoundingClientRect().width / 2);
        });
