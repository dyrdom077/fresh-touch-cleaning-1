
import Icon from "@/components/ui/icon";

const advantages = [
  {
    id: 1,
    title: "Современное оборудование",
    description: "Используем профессиональное оборудование ведущих производителей",
    icon: "Cog"
  },
  {
    id: 2,
    title: "Экологичность",
    description: "Работаем только с безопасными моющими средствами без запаха",
    icon: "Leaf"
  },
  {
    id: 3,
    title: "Быстрое высыхание",
    description: "Используем технологии, обеспечивающие быстрое высыхание поверхностей",
    icon: "Clock"
  },
  {
    id: 4,
    title: "Выезд на дом",
    description: "Бесплатный выезд специалиста в любой район города",
    icon: "Car"
  },
  {
    id: 5,
    title: "Гарантия качества",
    description: "Даем гарантию на все виды выполненных работ",
    icon: "Shield"
  },
  {
    id: 6,
    title: "Опытные мастера",
    description: "Наши специалисты имеют многолетний опыт работы",
    icon: "UserCheck"
  }
];

const AdvantagesSection = () => {
  return (
    <section id="advantages" className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают нас</h2>
          <p className="text-dark-gray max-w-2xl mx-auto">
            Мы предоставляем услуги высочайшего качества и заботимся о каждом клиенте
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage) => (
            <div key={advantage.id} className="advantage-card group">
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon 
                  name={advantage.icon} 
                  size={32} 
                  className="text-primary" 
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-light-gray rounded-lg p-8 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Наш подход к работе</h3>
              <p className="text-gray-600 mb-4">
                В FreshTouch мы следуем строгому протоколу чистки, который обеспечивает идеальный результат:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="bg-primary/20 p-1 rounded-full mt-1">
                    <Icon name="CheckCircle" size={16} className="text-primary" />
                  </span>
                  <span>Предварительная оценка и консультация</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-primary/20 p-1 rounded-full mt-1">
                    <Icon name="CheckCircle" size={16} className="text-primary" />
                  </span>
                  <span>Подбор специализированных чистящих средств</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-primary/20 p-1 rounded-full mt-1">
                    <Icon name="CheckCircle" size={16} className="text-primary" />
                  </span>
                  <span>Тщательная глубокая очистка всех поверхностей</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-primary/20 p-1 rounded-full mt-1">
                    <Icon name="CheckCircle" size={16} className="text-primary" />
                  </span>
                  <span>Удаление стойких пятен специальными составами</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-primary/20 p-1 rounded-full mt-1">
                    <Icon name="CheckCircle" size={16} className="text-primary" />
                  </span>
                  <span>Нейтрализация запахов и дезинфекция</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
                alt="Процесс химчистки" 
                className="rounded-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-md hidden md:block">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Icon name="ThumbsUp" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-bold">7+ лет</p>
                    <p className="text-xs text-gray-600">на рынке</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
