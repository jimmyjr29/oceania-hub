// Booking Options Function
function showBookingOptions() {
    alert('🎫 Paket Wisata Tersedia:\n\n' +
          '🏖️ Island Hopping (1 Hari) - Rp 350.000\n' +
          '🏝️ Belitung Explore (2H1M) - Rp 750.000\n' +
          '🌅 Sunset Tour (Half Day) - Rp 250.000\n' +
          '🍤 Kuliner Tour (1 Hari) - Rp 300.000\n\n' +
          'Hubungi WhatsApp untuk booking!');
}

// Gallery Function
function showGallery() {
    alert('📸 Galeri Destinasi:\n\n' +
          '🏖️ Pantai Tanjung Tinggi\n' +
          '🗿 Pantai Tanjung Kelayang\n' +
          '🏝️ Pulau Lengkuas\n' +
          '⛵ Pulau Kepayang\n' +
          '🌊 Pantai Burung Mandi\n' +
          '🥥 Pantai Nyiur Melambai\n\n' +
          'Lihat lebih lengkap di Instagram kami!');
}

// Reviews Function
function showReviews() {
    const reviews = [
        '⭐⭐⭐⭐⭐ "Pelayanan excellent, guide ramah!" - Sarah M.',
        '⭐⭐⭐⭐⭐ "Pantainya indah banget, recommended!" - Budi S.',
        '⭐⭐⭐⭐⭐ "Tour terbaik di Belitung!" - Rina P.',
        '⭐⭐⭐⭐⭐ "Harga worth it, fasilitas lengkap" - Ahmad R.'
    ];
    alert('💬 Review Terbaru:\n\n' + reviews.join('\n\n'));
}

// Click Animation Effect
document.addEventListener('DOMContentLoaded', function() {
    // Add click animation to all link items
    document.querySelectorAll('.link-item').forEach(item => {
        item.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // Add entrance animation delay for each link
    document.querySelectorAll('.link-item').forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.style.animation = `slideUp 0.6s ease-out forwards`;
        item.style.opacity = '0';
    });

    // Show links with stagger effect
    setTimeout(() => {
        document.querySelectorAll('.link-item').forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
            }, index * 100);
        });
    }, 300);
});

// Advanced Modal System (Alternative to alert)
function createModal(title, content) {
    // Remove existing modal if any
    const existingModal = document.querySelector('.modal-overlay');
    if (existingModal) {
        existingModal.remove();
    }

    // Create modal overlay
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        animation: fadeIn 0.3s ease-out;
    `;

    // Create modal content
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.cssText = `
        background: white;
        border-radius: 15px;
        padding: 25px;
        max-width: 90%;
        max-height: 80%;
        overflow-y: auto;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        animation: slideUp 0.3s ease-out;
    `;

    modal.innerHTML = `
        <h3 style="margin-bottom: 15px; color: #2c3e50; font-size: 18px;">${title}</h3>
        <div style="color: #34495e; line-height: 1.6; white-space: pre-line;">${content}</div>
        <button onclick="this.closest('.modal-overlay').remove()" 
                style="margin-top: 20px; padding: 10px 20px; background: linear-gradient(135deg, #667eea, #764ba2); 
                       color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 14px;">
            Tutup
        </button>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Close on overlay click
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            overlay.remove();
        }
    });

    // Add CSS for animations
    if (!document.querySelector('#modal-styles')) {
        const style = document.createElement('style');
        style.id = 'modal-styles';
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes slideUp {
                from { transform: translateY(30px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
}

// Enhanced Functions with Better UI
function showBookingOptionsModal() {
    const content = `🎫 PAKET WISATA TERSEDIA:

🏖️ Island Hopping (1 Hari)
   • Pantai Tanjung Tinggi & Kelayang
   • Pulau Lengkuas & Mercusuar
   • Snorkeling & Makan Siang
   • Harga: Rp 350.000/orang

🏝️ Belitung Explore (2H1M)
   • Semua destinasi utama
   • Menginap di resort pantai
   • 6 kali makan
   • Harga: Rp 750.000/orang

🌅 Sunset Tour (Half Day)
   • Pantai Burung Mandi
   • Sunset di Tanjung Kelayang
   • Welcome drink
   • Harga: Rp 250.000/orang

🍤 Kuliner Tour (1 Hari)
   • Wisata kuliner tradisional
   • Pasar Ikan Tanjung Pandan
   • Cooking class
   • Harga: Rp 300.000/orang

💡 Semua paket termasuk transportasi AC, guide berpengalaman, dan asuransi perjalanan.

📞 Hubungi WhatsApp untuk booking dan info detail!`;

    createModal('Paket Wisata Belitung', content);
}

// Smooth Scroll Effect
function addSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize smooth scrolling
addSmoothScrolling();

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Performance optimization: Intersection Observer for animations
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    });

    document.querySelectorAll('.link-item').forEach(item => {
        observer.observe(item);
    });
}