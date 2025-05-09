import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const services = [
  {
    id: 1,
    title: "Химчистка диванов",
    price: "от 2 000 ₽",
    description:
      "Глубокая чистка всех типов диванов, включая угловые и раскладные модели",
    icon: "Sofa",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: 2,
    title: "Химчистка ковров",
    price: "от 150 ₽/м²",
    description:
      "Профессиональная чистка ковров и ковровых покрытий любой сложности",
    icon: "Brush",
    image:
      "https://cdn.poehali.dev/files/38c946d5-9ed6-4dac-956d-cbaef5de8444.png",
  },
  {
    id: 3,
    title: "Химчистка кресел",
    price: "от 1 000 ₽",
    description:
      "Тщательная чистка кресел любых форм и материалов изготовления",
    icon: "Armchair",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: 4,
    title: "Химчистка матрасов",
    price: "от 1 500 ₽",
    description: "Удаление пятен, аллергенов и неприятных запахов из матрасов",
    icon: "Bed",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: 5,
    title: "Химчистка стульев",
    price: "от 250 ₽",
    description:
      "Профессиональная чистка обивки стульев различных типов и материалов",
    icon: "Armchair",
    image:
      "https://cdn.poehali.dev/files/00eece92-9400-4288-a22d-2c59eec8ba85.png",
  },
  {
    id: 6,
    title: "Удаление запахов",
    price: "от 1 000 ₽",
    description:
      "Эффективное устранение неприятных запахов с любых поверхностей",
    icon: "Wind",
    image:
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
];

const ServicesSection = () => {
  const [showPhoneDialog, setShowPhoneDialog] = useState(false);

  return (
    <section id="services" className="py-16 bg-light-gray">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
          <p className="text-dark-gray max-w-2xl mx-auto">
            Мы предлагаем полный спектр услуг по профессиональной химчистке
            мебели, ковров и других поверхностей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.id}
              className="service-card overflow-hidden h-full border-none shadow-lg"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader className="pt-6">
                <CardTitle className="flex items-center justify-between">
                  <span>{service.title}</span>
                  <span className="text-primary font-medium">
                    {service.price}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() =>
                    window.open("https://wa.me/qr/ZYIUXWAHTFPMK1", "_blank")
                  }
                >
                  <Icon name="Calendar" className="mr-2" size={16} />
                  Заказать
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Не нашли нужную услугу? Мы выполняем и другие виды работ по чистке
            мебели и ковров
          </p>
          <Button
            size="lg"
            onClick={() => {
              if (/Android|iPhone/i.test(navigator.userAgent)) {
                window.location.href = "tel:+79773077071";
              } else {
                setShowPhoneDialog(true);
              }
            }}
          >
            <Icon name="PhoneCall" className="mr-2" size={18} />
            Уточнить стоимость
          </Button>
        </div>
      </div>

      {/* Диалог с телефоном для ПК-версии */}
      <Dialog open={showPhoneDialog} onOpenChange={setShowPhoneDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-xl text-center">
              Позвоните нам
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col items-center justify-center">
              <a
                href="tel:+79773077071"
                className="text-2xl font-bold text-primary hover:underline"
              >
                +7 (977) 307-70-71
              </a>
              <p className="text-muted-foreground mt-2 text-center">
                Мы работаем ежедневно с 8:00 до 20:00
              </p>
              <Button
                onClick={() =>
                  window.open("https://wa.me/qr/ZYIUXWAHTFPMK1", "_blank")
                }
                className="mt-4 w-full"
              >
                <Icon name="MessageSquare" className="mr-2" size={16} />
                Написать в WhatsApp
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ServicesSection;
