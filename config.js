// Configuration file for Belitung Explorer Travel
const CONFIG = {
    // Company Information
    company: {
        name: "Belitung Explorer",
        tagline: "Jelajahi Keindahan Pulau Belitung Bersama Kami",
        description: "🌊 Pantai Eksotis • 🗿 Batu Granit Unik • 🍤 Kuliner Lezat",
        logo: "🏝️",
        established: "2020",
        // license: "Lisensi Resmi Kementerian Pariwisata"
    },

    // Contact Information
    contact: {
        whatsapp: "628123456789", // Ganti dengan nomor asli
        instagram: "oceania.id", // Ganti dengan username asli
        // youtube: "belitungexplorer", // Ganti dengan channel asli
        website: "https://oceania.co.id", // Ganti dengan domain asli
        email: "oceaniaid@gmail.com",
        phone: "+62 719 123456",
        address: "Jl. Pantai Tanjung Pendam No. 123, Tanjung Pandan, Belitung"
    },

    // Social Media Links
    socialMedia: {
        instagram: "https://instagram.com/oceania.id",
        // youtube: "https://youtube.com/oceania.id",
        // facebook: "https://facebook.com/oceania.id",
        tiktok: "https://tiktok.com/@oceania.id",
    },

    // Tour Packages
    // packages: [
    //     {
    //         id: 1,
    //         name: "Island Hopping",
    //         duration: "1 Hari",
    //         price: 350000,
    //         currency: "Rp",
    //         description: "Pantai Tanjung Tinggi & Kelayang, Pulau Lengkuas & Mercusuar, Snorkeling & Makan Siang",
    //         includes: ["Transportasi AC", "Guide berpengalaman", "Makan siang", "Snorkeling gear", "Tiket masuk"],
    //         icon: "🏖️"
    //     },
    //     {
    //         id: 2,
    //         name: "Belitung Explore",
    //         duration: "2H1M",
    //         price: 750000,
    //         currency: "Rp",
    //         description: "Semua destinasi utama, Menginap di resort pantai, 6 kali makan",
    //         includes: ["Hotel bintang 4", "All meals", "Transportasi", "Guide", "Asuransi"],
    //         icon: "🏝️"
    //     },
    //     {
    //         id: 3,
    //         name: "Sunset Tour",
    //         duration: "Half Day",
    //         price: 250000,
    //         currency: "Rp",
    //         description: "Pantai Burung Mandi, Sunset di Tanjung Kelayang, Welcome drink",
    //         includes: ["Transportasi", "Guide", "Welcome drink", "Foto unlimited"],
    //         icon: "🌅"
    //     },
    //     {
    //         id: 4,
    //         name: "Kuliner Tour",
    //         duration: "1 Hari",
    //         price: 300000,
    //         currency: "Rp",
    //         description: "Wisata kuliner tradisional, Pasar Ikan Tanjung Pandan, Cooking class",
    //         includes: ["Transportasi", "Guide kuliner", "Cooking class", "Tasting menu"],
    //         icon: "🍤"
    //     }
    // ],

    // Destinations
    // destinations: [
    //     { name: "Pantai Tanjung Tinggi", icon: "🏖️", description: "Pantai dengan batu granit raksasa" },
    //     { name: "Pantai Tanjung Kelayang", icon: "🗿", description: "Spot sunset terbaik" },
    //     { name: "Pulau Lengkuas", icon: "🏝️", description: "Mercusuar bersejarah" },
    //     { name: "Pulau Kepayang", icon: "⛵", description: "Snorkeling paradise" },
    //     { name: "Pantai Burung Mandi", icon: "🌊", description: "Hidden gem Belitung" },
    //     { name: "Pantai Nyiur Melambai", icon: "🥥", description: "Pantai kelapa yang indah" }
    // ],

    // Customer Reviews
    // reviews: [
    //     {
    //         name: "Sarah M.",
    //         rating: 5,
    //         comment: "Pelayanan excellent, guide ramah!",
    //         date: "2025-01-15"
    //     },
    //     {
    //         name: "Budi S.",
    //         rating: 5,
    //         comment: "Pantainya indah banget, recommended!",
    //         date: "2025-01-10"
    //     },
    //     {
    //         name: "Rina P.",
    //         rating: 5,
    //         comment: "Tour terbaik di Belitung!",
    //         date: "2025-01-08"
    //     },
    //     {
    //         name: "Ahmad R.",
    //         rating: 5,
    //         comment: "Harga worth it, fasilitas lengkap",
    //         date: "2025-01-05"
    //     }
    // ],

    // Settings
    // settings: {
    //     currency: "IDR",
    //     language: "id",
    //     timezone: "Asia/Jakarta",
    //     googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY", // Tambahkan API key jika diperlukan
    //     analytics: {
    //         googleAnalytics: "GA_MEASUREMENT_ID", // Tambahkan GA4 ID
    //         facebookPixel: "FB_PIXEL_ID" // Tambahkan Facebook Pixel ID
    //     }
    // },

    // Theme Colors
    colors: {
        primary: "#667eea",
        secondary: "#764ba2",
        accent: "#78dce2",
        warning: "#ffce54",
        success: "#2ecc71",
        danger: "#e74c3c",
        white: "#ffffff",
        dark: "#2c3e50"
    }
};

// Export config for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}