import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-6">CiptarasaNusantara</h3>
            <p className="text-gray-300 mb-6">
              Menghadirkan cita rasa Indonesia yang otentik ke meja makan Anda sejak 2010. Misi kami adalah melestarikan resep tradisional
              sambil menjadikannya dapat diakses oleh semua orang.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon="facebook" />
              <SocialLink href="#" icon="instagram" />
              <SocialLink href="#" icon="twitter" />
              <SocialLink href="#" icon="tiktok" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Tautan Cepat</h3>
            <ul className="space-y-3">
              <li><FooterLink href="/">Beranda</FooterLink></li>
              <li><FooterLink href="/menu">Menu</FooterLink></li>
              <li><FooterLink href="/about">Tentang Kami</FooterLink></li>
              <li><FooterLink href="/contact">Kontak</FooterLink></li>
            </ul>
          </div>
          
          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Jam Buka</h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-gray-300">Senin - Jumat</span>
                <span className="text-amber-400">10:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Sabtu</span>
                <span className="text-amber-400">09:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Minggu</span>
                <span className="text-amber-400">09:00 - 21:00</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Buletin</h3>
            <p className="text-gray-300 mb-4">
              Berlangganan untuk menerima pembaruan, akses ke penawaran eksklusif, dan lainnya.
            </p>
            <form className="flex mb-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Alamat email Anda"
                className="px-4 py-2 rounded-l-lg w-full focus:outline-none text-neutral-800"
                aria-label="Alamat email"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary/90 transition text-white px-4 py-2 rounded-r-lg"
                aria-label="Berlangganan"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
            <p className="text-sm text-gray-400">Dengan berlangganan, Anda menyetujui Kebijakan Privasi kami.</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} CiptarasaNusantara. Hak Cipta Dilindungi.</p>
          <div className="flex justify-center space-x-6 mt-4 text-sm">
            <a href="#" className="hover:text-amber-400 transition">Kebijakan Privasi</a>
            <a href="#" className="hover:text-amber-400 transition">Syarat Layanan</a>
            <a href="#" className="hover:text-amber-400 transition">Kebijakan Cookie</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <Link href={href} className="text-gray-300 hover:text-amber-400 transition">
      {children}
    </Link>
  );
}

function SocialLink({ href, icon }: { href: string, icon: string }) {
  const getIcon = () => {
    switch (icon) {
      case 'facebook':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
          </svg>
        );
      case 'instagram':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
          </svg>
        );
      case 'twitter':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
          </svg>
        );
      case 'tiktok':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-tiktok" viewBox="0 0 16 16">
            <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <a 
      href={href}
      className="text-gray-300 hover:text-amber-400 transition"
      aria-label={`Ikuti kami di ${icon}`}
    >
      {getIcon()}
    </a>
  );
}
