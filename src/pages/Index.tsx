import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const ageGroups = [
    {
      title: 'Младшая группа',
      age: '2-3 года',
      description: 'Адаптация к садику, развитие базовых навыков самообслуживания и социализация',
      icon: 'Baby',
      color: 'bg-kindergarten-pink'
    },
    {
      title: 'Средняя группа',
      age: '3-4 года',
      description: 'Развитие речи, творческих способностей и основы музыкального воспитания',
      icon: 'Palette',
      color: 'bg-kindergarten-yellow'
    },
    {
      title: 'Старшая группа',
      age: '5-6 лет',
      description: 'Подготовка к школе, развитие логики, чтения и математических навыков',
      icon: 'GraduationCap',
      color: 'bg-kindergarten-purple'
    }
  ];

  const teachers = [
    {
      name: 'Анна Петровна',
      role: 'Заведующая',
      experience: '15 лет опыта',
      description: 'Педагог высшей категории, кандидат педагогических наук'
    },
    {
      name: 'Мария Ивановна',
      role: 'Воспитатель',
      experience: '10 лет опыта',
      description: 'Специалист по раннему развитию, логопед'
    },
    {
      name: 'Елена Сергеевна',
      role: 'Музыкальный руководитель',
      experience: '8 лет опыта',
      description: 'Организатор детских праздников и утренников'
    }
  ];

  const news = [
    {
      date: '20 ноября 2025',
      title: 'День рождения детского сада',
      description: 'Наш садик отмечает 10-летие! Приглашаем всех родителей и детей на праздничный концерт.',
      tag: 'Праздник'
    },
    {
      date: '15 ноября 2025',
      title: 'Новый спортивный зал',
      description: 'Открылся современный спортивный зал с новым оборудованием для физического развития детей.',
      tag: 'Новости'
    },
    {
      date: '10 ноября 2025',
      title: 'Осенний утренник',
      description: 'Прошел замечательный осенний праздник с танцами, песнями и театральными постановками.',
      tag: 'Мероприятие'
    }
  ];

  const gallery = [
    {
      url: 'https://cdn.poehali.dev/projects/5d565361-6c4a-409c-b684-aaf5d03380a1/files/6ab3a051-ef9b-4755-9b98-6e163dc495e7.jpg',
      title: 'Наша игровая площадка'
    },
    {
      url: 'https://cdn.poehali.dev/projects/5d565361-6c4a-409c-b684-aaf5d03380a1/files/ce08d41f-0069-4ba3-8757-8218b3896456.jpg',
      title: 'Занятия с педагогом'
    },
    {
      url: 'https://cdn.poehali.dev/projects/5d565361-6c4a-409c-b684-aaf5d03380a1/files/f58f5c87-3b1c-4fc9-a300-fc6ca809ee63.jpg',
      title: 'Творческие занятия'
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-2xl">🌈</span>
              </div>
              <h1 className="text-2xl font-bold text-primary">Радуга</h1>
            </div>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">О садике</button>
              <button onClick={() => scrollToSection('gallery')} className="hover:text-primary transition-colors">Галерея</button>
              <button onClick={() => scrollToSection('news')} className="hover:text-primary transition-colors">Новости</button>
              <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">Контакты</button>
            </div>
            <Button className="hidden md:block">Записаться</Button>
            <Button size="icon" variant="ghost" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </nav>
      </header>

      <section id="home" className="py-20 bg-gradient-to-br from-kindergarten-purple via-kindergarten-yellow to-kindergarten-green">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                Добро пожаловать в детский сад <span className="text-primary">Радуга</span>
              </h1>
              <p className="text-xl mb-8 text-muted-foreground">
                Создаем счастливое детство для ваших малышей с 2012 года. Современные методики воспитания и развития.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="text-lg" onClick={() => scrollToSection('contacts')}>
                  <Icon name="Send" size={20} className="mr-2" />
                  Оставить заявку
                </Button>
                <Button size="lg" variant="outline" className="text-lg" onClick={() => scrollToSection('about')}>
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/5d565361-6c4a-409c-b684-aaf5d03380a1/files/6ab3a051-ef9b-4755-9b98-6e163dc495e7.jpg" 
                alt="Детский сад Радуга" 
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">250+</div>
              <p className="text-muted-foreground">Счастливых детей</p>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">25</div>
              <p className="text-muted-foreground">Опытных педагогов</p>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">10</div>
              <p className="text-muted-foreground">Лет работы</p>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Лицензированы</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-kindergarten-purple/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Возрастные группы</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Для каждого возраста разработана специальная программа развития
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {ageGroups.map((group, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className={`w-16 h-16 ${group.color} rounded-2xl flex items-center justify-center mb-4`}>
                    <Icon name={group.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{group.title}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary">{group.age}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{group.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Наши педагоги</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Команда профессионалов с любовью к детям
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-kindergarten-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={40} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{teacher.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">{teacher.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge className="mb-3">{teacher.experience}</Badge>
                  <p className="text-muted-foreground text-sm">{teacher.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-kindergarten-yellow/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Галерея</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Моменты из жизни нашего детского сада
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img 
                  src={image.url} 
                  alt={image.title} 
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="text-white text-xl font-semibold">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Новости</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Актуальные события и мероприятия
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{item.tag}</Badge>
                    <span className="text-sm text-muted-foreground">{item.date}</span>
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-kindergarten-green/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Свяжитесь с нами</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Адрес</h3>
                    <p className="text-muted-foreground">г. Москва, ул. Солнечная, д. 15</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@raduga-sad.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Режим работы</h3>
                    <p className="text-muted-foreground">Пн-Пт: 7:00 - 19:00</p>
                  </div>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Оставьте заявку</CardTitle>
                <CardDescription>Мы свяжемся с вами в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Input type="tel" placeholder="Телефон" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <Textarea placeholder="Ваше сообщение" rows={4} />
                  </div>
                  <Button className="w-full" size="lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl">🌈</span>
                </div>
                <h3 className="text-xl font-bold">Радуга</h3>
              </div>
              <p className="text-white/80">Детский сад полного дня для детей от 2 до 6 лет</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-white/80">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors">Главная</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">О садике</button></li>
                <li><button onClick={() => scrollToSection('gallery')} className="hover:text-white transition-colors">Галерея</button></li>
                <li><button onClick={() => scrollToSection('news')} className="hover:text-white transition-colors">Новости</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/80">
                <li>+7 (495) 123-45-67</li>
                <li>info@raduga-sad.ru</li>
                <li>г. Москва, ул. Солнечная, 15</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-3">
                <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                  <Icon name="Facebook" size={20} />
                </button>
                <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                  <Icon name="Instagram" size={20} />
                </button>
                <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                  <Icon name="Youtube" size={20} />
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>© 2025 Детский сад Радуга. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
