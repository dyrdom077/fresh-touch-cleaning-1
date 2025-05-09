import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-b from-light-gray to-white"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Профессиональная химчистка
              <span className="text-primary"> мебели и ковров</span>
            </h1>
            <p className="text-dark-gray text-lg md:text-xl mb-8 max-w-xl">
              Вернем чистоту и свежесть вашей мебели и коврам с помощью
              современного оборудования и экологичных средств
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="text-base font-medium"
                onClick={() =>
                  window.open("https://wa.me/qr/ZYIUXWAHTFPMK1", "_blank")
                }
              >
                <Icon name="CalendarPlus" className="mr-2" size={20} />
                Заказать чистку
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base font-medium border-primary text-primary hover:bg-primary/10"
                onClick={() => (window.location.href = "tel:+79773077071")}
              >
                <Icon name="PhoneCall" className="mr-2" size={20} />
                Позвонить нам
              </Button>
            </div>

            <div className="flex flex-wrap mt-10 gap-8">
              <div className="flex items-center gap-2">
                <div className="bg-primary/20 p-2 rounded-full">
                  <Icon name="CheckCircle" className="text-primary" size={24} />
                </div>
                <span className="font-medium">Экологичные средства</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-primary/20 p-2 rounded-full">
                  <Icon name="Clock" className="text-primary" size={24} />
                </div>
                <span className="font-medium">Выезд в день обращения</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-primary/20 p-2 rounded-full">
                  <Icon name="Shield" className="text-primary" size={24} />
                </div>
                <span className="font-medium">Гарантия качества</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10">
              <img
                src="https://cdn.poehali.dev/files/38c946d5-9ed6-4dac-956d-cbaef5de8444.png"
                alt="Химчистка дивана"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg animate-float hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Icon
                      name="Sparkles"
                      className="text-green-600"
                      size={24}
                    />
                  </div>
                  <div>
                    <p className="font-bold text-secondary">100%</p>
                    <p className="text-sm text-gray-600">Довольных клиентов</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full bg-primary/20 -z-10"></div>
            <div className="absolute top-1/3 left-1/3 w-20 h-20 rounded-full bg-primary/30 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
