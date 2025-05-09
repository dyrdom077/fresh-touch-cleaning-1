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
              Профессиональная химчистка мебели и ковровых покрытий в
              Краснодаре. Вернем чистоту и свежесть вашему дому!
            </p>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://wa.me/qr/ZYIUXWAHTFPMK1"
                className="text-gray-300 hover:text-primary transition-colors"
                aria-label="WhatsApp"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="MessageSquare" size={20} />
              </a>
              <a
                href="https://vk.com/freshtouchkrasnodar"
                className="text-gray-300 hover:text-primary transition-colors"
                aria-label="Вконтакте"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <path d="M20.8511 16.1524C20.8511 16.1524 22.607 17.8773 23.0368 18.6947C23.0503 18.7141 23.0595 18.7354 23.0641 18.7575C23.2414 19.1165 23.2813 19.4015 23.1879 19.6179C23.0307 19.9724 22.4336 20.1661 22.2503 20.1798H19.1619C18.9321 20.1798 18.4437 20.1232 17.8465 19.7 C17.3798 19.3641 16.9178 18.8305 16.4668 18.3058C15.7895 17.5364 15.2043 16.8698 14.6139 16.8698C14.5354 16.8693 14.4575 16.8828 14.3837 16.9096C13.9495 17.0465 13.3896 17.6837 13.3896 19.2615C13.3896 19.7194 13.0354 20.1798 12.5149 20.1798H11.1692C10.7031 20.1798 8.20335 20.0344 5.99182 17.6795C3.32598 14.8335 0.931251 9.06398 0.885585 8.94271C0.701251 8.51764 1.09598 8.29126 1.52104 8.29126H4.64414C5.05145 8.29126 5.21645 8.59 5.33309 8.8848C5.46882 9.22037 5.98362 10.7114 6.8457 12.3546C8.20335 14.9908 9.07835 16.0109 9.79651 16.0109C9.91683 16.0119 10.035 15.9765 10.1365 15.909C10.8777 15.4806 10.7242 12.9958 10.6812 12.4109C10.6812 12.2887 10.6812 10.7749 10.1242 10.1094C9.71682 9.61603 9.07835 9.44191 8.71414 9.37707C8.82335 9.22313 9.07835 8.96812 9.40572 8.8262C10.0719 8.53798 11.2212 8.4962 12.3521 8.4962H12.8221C14.0509 8.51764 14.3271 8.58248 14.715 8.67876C15.5052 8.86199 15.5252 9.5017 15.4529 11.066C15.4298 11.5424 15.4069 12.0845 15.4069 12.7244C15.4069 12.8658 15.3981 13.0248 15.3981 13.1931C15.3751 14.0129 15.3465 14.9456 15.9758 15.3662C16.0584 15.4211 16.1551 15.4533 16.2546 15.4591C16.4379 15.4591 16.9963 15.4591 18.882 12.3899C19.7537 10.728 20.4471 8.90064 20.4912 8.77481C20.5219 8.70956 20.6186 8.53564 20.7378 8.45756C20.8225 8.40761 20.9194 8.38086 21.0177 8.3811H24.1409C24.5829 8.3811 24.8859 8.4962 24.9485 8.70956C25.0513 9.04603 24.9252 9.9426 22.8662 12.6935C22.4997 13.1775 22.1838 13.5964 21.9128 13.9483C20.0363 16.3641 20.0363 16.4671 20.8511 16.1524Z" />
                </svg>
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
