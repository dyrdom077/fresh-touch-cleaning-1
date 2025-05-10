
import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";
import { MapLocation } from "./MapLocation";

const ContactSection = () => {
  // Выносим URL карты в константу для легкого изменения в будущем
  const MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2819.5670449771865!2d38.9693055!3d45.0362801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f04f9a279c8e51%3A0xaec7ecb3a3de2e5f!2z0YPQuy4g0JDRjdGA0L7QtNGA0L7QvNC90LDRjywgMTMsINCa0YDQsNGB0L3QvtC00LDRgCwg0JrRgNCw0YHQvdC-0LTQsNGA0YHQutC40Lkg0LrRgNCw0LksINCg0L7RgdGB0LjRjywgMzUwMDAw!5e0!3m2!1sru!2s!4v1620034256214!5m2!1sru!2s";

  return (
    <section id="contacts" className="py-16 bg-light-gray">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-dark-gray max-w-2xl mx-auto">
            Оставьте заявку или позвоните нам, и мы ответим на все ваши вопросы
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Форма обратной связи */}
          <ContactForm />
          
          <div className="space-y-8">
            {/* Контактная информация */}
            <ContactInfo />
            
            {/* Блок с картой */}
            <MapLocation 
              title="Мы на карте" 
              embedUrl={MAP_EMBED_URL} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
