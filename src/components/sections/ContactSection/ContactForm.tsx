
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface FormData {
  name: string;
  phone: string;
  message: string;
  emailService: string;
}

const initialFormState: FormData = {
  name: "",
  phone: "",
  message: "",
  emailService: "mail.ru",
};

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, emailService: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const subject = encodeURIComponent(`Заявка с сайта от ${formData.name}`);
      const body = encodeURIComponent(
        `Имя: ${formData.name}\nТелефон: ${formData.phone}\nСообщение: ${formData.message}`
      );
      window.location.href = `mailto:Allsummers@yandex.ru?subject=${subject}&body=${body}`;
      
      toast({
        title: "Спасибо за заявку!",
        description: "Мы свяжемся с вами в ближайшее время.",
      });
      
      setFormData(initialFormState);
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
        
        <div>
          <label className="block mb-2 font-medium">
            Предпочитаемый почтовый сервис
          </label>
          <Select
            value={formData.emailService}
            onValueChange={handleSelectChange}
          >
            <SelectTrigger>
              <SelectValue placeholder="Выберите почтовый сервис" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mail.ru">Mail.ru</SelectItem>
              <SelectItem value="yandex.ru">Яндекс</SelectItem>
              <SelectItem value="gmail.com">Gmail</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Отправка..." : "Отправить заявку"}
        </Button>
        
        <p className="text-xs text-gray-500 text-center mt-2">
          Нажимая на кнопку, вы соглашаетесь с обработкой персональных данных
        </p>
      </form>
    </div>
  );
};
