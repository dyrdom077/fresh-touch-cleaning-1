import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { toast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const subject = encodeURIComponent(`Заявка с сайта от ${formData.name}`);
      const body = encodeURIComponent(
        `Имя: ${formData.name}\nТелефон: ${formData.phone}\nСообщение: ${formData.message}`,
      );
      window.location.href = `mailto:Allsummers@yandex.ru?subject=${subject}&body=${body}`;
      toast({
        title: "Спасибо за заявку!",
        description: "Мы свяжемся с вами в ближайшее время.",
      });
      setFormData({ name: "", phone: "", message: "" });
    } catch (error) {
      toast({
        title: "Ошибка отправки",
        description:
          "Пожалуйста, позвоните нам по телефону или напишите на WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Оставить заявку</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Ваше имя
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Введите ваше имя"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2 font-medium">
                  Телефон
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+7 (___) ___-__-__"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Сообщение
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Опишите, что нужно почистить..."
                  rows={4}
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Отправка..." : "Отправить заявку"}
              </Button>
              <p className="text-xs text-gray-500 text-center mt-2">
                Нажимая на кнопку, вы соглашаетесь с обработкой персональных
                данных
              </p>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon name="Phone" className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Телефон:</p>
                    <a
                      href="tel:+79773077071"
                      className="text-primary hover:underline"
                    >
                      +7 (977) 307-70-71
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon name="Mail" className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Email:</p>
                    <a
                      href="mailto:Allsummers@yandex.ru"
                      className="text-primary hover:underline"
                    >
                      Allsummers@yandex.ru
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-3 rounded-full mt-1">
                    <Icon name="MapPin" className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Адрес:</p>
                    <p className="text-gray-600">
                      г. Краснодар, ул. Аэродромная д. 13
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-3 rounded-full mt-1">
                    <Icon name="Clock" className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Режим работы:</p>
                    <p className="text-gray-600">Пн-Пт: с 8:00 до 20:00</p>
                    <p className="text-gray-600">Сб-Вс: с 9:00 до 19:00</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Мы на карте</h3>
              <div className="h-[300px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2819.5670449771865!2d38.9693055!3d45.0362801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f04f9a279c8e51%3A0xaec7ecb3a3de2e5f!2z0YPQuy4g0JDRjdGA0L7QtNGA0L7QvNC90LDRjywgMTMsINCa0YDQsNGB0L3QvtC00LDRgCwg0JrRgNCw0YHQvdC-0LTQsNGA0YHQutC40Lkg0LrRgNCw0LksINCg0L7RgdGB0LjRjywgMzUwMDAw!5e0!3m2!1sru!2s!4v1620034256214!5m2!1sru!2s"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Карта с нашим расположением"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
