
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Колонка с логотипом и описанием */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://cdn.poehali.dev/files/cf28a42d-12c0-45b7-add0-5e43c92ae6c8.png"
                alt="FreshTouch Logo"
                className="h-10 bg-white rounded-full p-1"
              />
              <span className="font-playfair font-bold text-xl text-white">
                FreshTouch
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              Профессиональная химчистка мебели и ковровых покрытий в Краснодаре.
              Вернем чистоту и свежесть вашему дому!
            </p>
            <div className="flex space-x-4 mt-2">
              <a
                href="#"
                className="text-gray-300 hover:text-primary transition-colors"
                aria-label="Вконтакте"
              >
                <Icon name="Facebook" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-primary transition-colors"
                aria-label="Telegram"
              >
                <Icon name="Send" size={20} />
              </a>
            </div>
          </div>

          {/* Колонка с контактами */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={18} className="text-primary" />
                <a
                  href="tel:+79773077071"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +7 (977) 307-70-71
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={18} className="text-primary" />
                <a
                  href="mailto:Allsummers@yandex.ru"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Allsummers@yandex.ru
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="MapPin" size={18} className="text-primary mt-1" />
                <span className="text-gray-300">
                  г. Краснодар, ул. Аэродромная д. 13
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Clock" size={18} className="text-primary mt-1" />
                <div className="text-gray-300">
                  <p>Пн-Пт: с 8:00 до 20:00</p>
                  <p>Сб-Вс: с 9:00 до 19:00</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Колонка с навигацией */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Главная
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Услуги
                </a>
              </li>
              <li>
                <a
                  href="#advantages"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Преимущества
                </a>
              </li>
              <li>
                <a
                  href="#contacts"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} FreshTouch. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
