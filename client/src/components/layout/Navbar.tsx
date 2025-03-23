import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/hooks/useCart";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const { toggleCart, cartItemsCount } = useCart();

  // Handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className={`text-2xl font-playfair font-bold ${isScrolled || location !== '/' ? 'text-primary' : 'text-white'}`}>
              CiptarasaNusantara
            </span>
          </Link>
          
          <div className="hidden md:flex space-x-8 font-medium">
            <NavLink href="/" isScrolled={isScrolled} currentPath={location}>Beranda</NavLink>
            <NavLink href="/menu" isScrolled={isScrolled} currentPath={location}>Menu</NavLink>
            <NavLink href="/about" isScrolled={isScrolled} currentPath={location}>Tentang</NavLink>
            <NavLink href="/contact" isScrolled={isScrolled} currentPath={location}>Kontak</NavLink>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              className={`relative cursor-pointer ${isScrolled || location !== '/' ? 'text-neutral-700' : 'text-white'}`}
              onClick={toggleCart}
              aria-label="Shopping cart"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
            
            <button 
              className={`md:hidden ${isScrolled || location !== '/' ? 'text-neutral-700' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-white shadow-lg absolute w-full"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
              <MobileNavLink href="/">Beranda</MobileNavLink>
              <MobileNavLink href="/menu">Menu</MobileNavLink>
              <MobileNavLink href="/about">Tentang</MobileNavLink>
              <MobileNavLink href="/contact">Kontak</MobileNavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function NavLink({ href, children, isScrolled, currentPath }: { href: string, children: React.ReactNode, isScrolled: boolean, currentPath: string }) {
  const isActive = href === currentPath || (href !== '/' && currentPath.startsWith(href));
  const isHome = currentPath === '/';
  
  return (
    <Link href={href} className={`relative transition duration-200 ${
      isActive 
        ? 'text-primary' 
        : isScrolled || !isHome 
        ? 'text-neutral-700 hover:text-primary' 
        : 'text-white hover:text-white/80'
    }`}>
      {children}
      {isActive && (
        <motion.span 
          className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"
          layoutId="navbar-underline"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </Link>
  );
}

function MobileNavLink({ href, children }: { href: string, children: React.ReactNode }) {
  const [location] = useLocation();
  const isActive = href === location || (href !== '/' && location.startsWith(href));
  
  return (
    <Link 
      href={href} 
      className={`py-2 border-b border-gray-100 ${isActive ? 'text-primary font-medium' : 'text-neutral-700 hover:text-primary'}`}
    >
      {children}
    </Link>
  );
}
