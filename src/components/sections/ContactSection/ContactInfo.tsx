
import Icon from "@/components/ui/icon";

export interface ContactInfoItem {
  icon: string;
  title: string;
  content: React.ReactNode;
}

const contactItems: ContactInfoItem[] = [
  {
    icon: "Phone",
    title: "Телефон:",
    content: (
      <a href="tel:+79773077071" className="text-primary hover:underline">
        +7 (977) 307-70-71
      </a>
    ),
  },
  {
    icon: "Mail",
    title: "Email:",
    content: (
      <a href="mailto:Allsummers@yandex.ru" className="text-primary hover:underline">
        Allsummers@yandex.ru
      </a>
    ),
  },
  {
    icon: "MapPin",
    title: "Адрес:",
    content: <p className="text-gray-600">г. Краснодар, ул. Аэродромная д. 13</p>,
  },
  {
    icon: "Clock",
    title: "Режим работы:",
    content: (
      <>
        <p className="text-gray-600">Пн-Пт: с 8:00 до 20:00</p>
        <p className="text-gray-600">Сб-Вс: с 9:00 до 19:00</p>
      </>
    ),
  },
];

export const ContactInfo = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
      <ul className="space-y-4">
        {contactItems.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="bg-primary/10 p-3 rounded-full mt-1">
              <Icon name={item.icon} className="text-primary" size={20} />
            </div>
            <div>
              <p className="font-medium text-gray-700">{item.title}</p>
              {item.content}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
