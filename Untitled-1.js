
        // Navbar scroll efekti
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        
        // AOS animasyon başlatma
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
        
        // Basit galeri kontrolü
        document.querySelectorAll('.property-modal').forEach(modal => {
            modal.addEventListener('show.bs.modal', function() {
                const gallery = this.querySelector('.property-gallery');
                const images = [
                    gallery.querySelector('img').src,
                    'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w  =1350&q=80'
                ];
                
                let currentImageIndex = 0;
                const imageElement = gallery.querySelector('img');
                
                gallery.querySelector('.gallery-btn:last-child').addEventListener('click', function() {
                    currentImageIndex = (currentImageIndex + 1) % images.length;
                    imageElement.src = images[currentImageIndex];
                });
                
                gallery.querySelector('.gallery-btn:first-child').addEventListener('click', function() {
                    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
                    imageElement.src = images[currentImageIndex];
                });
            });
        });
