
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { title: "Главная", href: "#home" },
    { title: "Услуги", href: "#services" },
    { title: "Преимущества", href: "#advantages" },
    { title: "Контакты", href: "#contacts" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2">
          <img
            src="https://cdn.poehali.dev/files/cf28a42d-12c0-45b7-add0-5e43c92ae6c8.png"
            alt="FreshTouch Logo"
            className="h-10 md:h-12"
          />
          <span className="font-playfair font-bold text-xl md:text-2xl text-primary">
            FreshTouch
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="text-secondary hover:text-primary transition-colors font-medium"
            >
              {item.title}
            </a>
          ))}
          <a href="tel:+79773077071">
            <Button className="flex items-center gap-2">
              <Icon name="Phone" size={18} />
              <span>Позвонить</span>
            </Button>
          </a>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <a href="tel:+79773077071" className="mr-4">
            <Button size="sm" variant="outline" className="p-2">
              <Icon name="Phone" size={18} />
            </Button>
          </a>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="p-2">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col space-y-6 mt-10">
                {navItems.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="text-xl text-secondary hover:text-primary transition-colors py-2"
                  >
                    {item.title}
                  </a>
                ))}
                <a href="tel:+79773077071">
                  <Button className="w-full flex items-center justify-center gap-2">
                    <Icon name="Phone" size={18} />
                    <span>Позвонить</span>
                  </Button>
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
