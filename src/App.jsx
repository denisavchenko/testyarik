"use client";
import { useState, useEffect } from "react";

const publicUrl = (path) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

export default function TravelAgencyWebsite() {
  useEffect(() => {
  if (document.getElementById("tourvisor-script")) return;

  const script = document.createElement("script");

  script.src = "https://tourvisor.ru/module/init.js";
  script.async = true;
  script.defer = true;
  script.id = "tourvisor-script";

  document.body.appendChild(script);

}, []);
  const [openModal, setOpenModal] = useState(false);

  const tours = [
    {
      country: "Турция",
      price: "от 39.000₽",
      image:
        "https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=1200&auto=format&fit=crop",
    },

    {
      country: "Мальдивы",
      price: "от 89.000₽",
      image:
        "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200&auto=format&fit=crop",
    },

    {
      country: "Дубай",
      price: "от 47.000₽",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (

    <div className="min-h-screen bg-white text-gray-900">

      {/* HEADER */}

      <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">

          <div className="flex items-center gap-3 md:gap-4">

            <img
              src={publicUrl("favicon.png")}
              alt="SLAVA TRIPS"
              className="h-10 w-10 md:h-14 md:w-14 object-cover"
            />

            <div>

              <h1 className="text-xl md:text-2xl font-bold tracking-tight">
                SLAVA TRIPS
              </h1>

              <p className="hidden sm:block text-[10px] md:text-xs text-gray-500 uppercase tracking-[2px]">
                premium travel agency
              </p>

            </div>

          </div>

          <nav className="hidden md:flex gap-8 text-sm font-medium">

            <a href="#about" className="hover:text-blue-600 transition">
              О нас
            </a>

            <a href="#tours" className="hover:text-blue-600 transition">
              Туры
            </a>

            <a href="#search" className="hover:text-blue-600 transition">
              Поиск
            </a>

            <a href="#contacts" className="hover:text-blue-600 transition">
              Контакты
            </a>

          </nav>

          <a href="#search">

            <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-4 md:px-6 py-2 md:py-3 rounded-2xl text-sm shadow-lg font-semibold">
              Подобрать тур
            </button>

          </a>

        </div>

      </header>

      {/* HERO */}

      <section
        className="relative min-h-screen pt-28 md:pt-0 flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 px-6 max-w-5xl text-white">

          <p className="uppercase tracking-[6px] md:tracking-[8px] text-xs md:text-sm mb-6 opacity-90">
            PREMIUM TRAVEL EXPERIENCE
          </p>

          <h2 className="text-4xl md:text-7xl font-bold leading-tight mb-8">
            Путешествия,
            <br />
            которые хочется повторить
          </h2>

          <p className="text-base md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto">
            Подберём лучшие туры, премиальные отели
            и выгодные предложения —
            быстро, удобно и без стресса.
          </p>

          <div className="flex flex-col md:flex-row gap-5 justify-center">

            <a href="#search">

              <button className="bg-blue-600 hover:bg-blue-700 px-8 md:px-10 py-4 md:py-5 rounded-2xl text-base md:text-lg font-semibold transition shadow-2xl">
                Подобрать тур
              </button>

            </a>

            <button
  onClick={() => setOpenModal(true)}
  className="bg-black/30 backdrop-blur-md border border-white/20 hover:bg-blue-600 px-8 md:px-10 py-4 md:py-5 rounded-2xl text-base md:text-lg font-semibold transition"
>
  Связаться
</button>

          </div>

        </div>

      </section>

      {/* SEARCH */}

<section
  id="search"
  className="py-20 md:py-24 bg-gray-50 px-4 md:px-6"
>

  <div className="max-w-6xl mx-auto">

    <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">

      <p className="uppercase tracking-[4px] text-sm opacity-80 mb-4">
        TOUR SEARCH MODULE
      </p>

      <h3 className="text-4xl md:text-5xl font-bold mb-6">
        Онлайн поиск туров
      </h3>

      <p className="max-w-2xl mx-auto text-base md:text-lg opacity-90 mb-10">
        Найдите лучшие предложения.
      </p>

      <div className="bg-white rounded-3xl overflow-hidden shadow-2xl p-2 md:p-4">

        <div
          className="tv-search-form tv-moduleid-9977548"
        ></div>

      </div>

    </div>

  </div>

</section>

      {/* TOURS */}

      <section id="tours" className="py-20 md:py-24 px-4 md:px-6 bg-white">

        <div className="max-w-7xl mx-auto">

          <div className="mb-14">

            <p className="text-blue-600 font-semibold mb-2">
              ПОПУЛЯРНЫЕ НАПРАВЛЕНИЯ
            </p>

            <h3 className="text-4xl md:text-5xl font-bold">
              Индивидуальные туры
            </h3>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {tours.map((tour, index) => (

              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 border border-gray-100 w-full"
              >

                <div className="h-72 md:h-80 overflow-hidden relative">

                  <img
                    src={tour.image}
                    alt={tour.country}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-black/20"></div>

                </div>

                <div className="p-7">

                  <div className="flex justify-between items-center mb-5">

                    <h4 className="text-2xl md:text-3xl font-bold">
                      {tour.country}
                    </h4>

                    <span className="text-blue-600 font-bold text-base md:text-lg">
                      {tour.price}
                    </span>

                  </div>

                  <p className="text-gray-600 mb-7 leading-relaxed text-base">
                    Премиальные отели, перелёт, трансферы
                    и поддержка 24/7 включены.
                  </p>

<button
  onClick={() => setOpenModal(true)}
  className="w-full bg-gray-900 hover:bg-blue-600 text-white py-4 rounded-2xl transition font-semibold"
>
  Смотреть предложения
</button>
                  
                </div>

              </div>

            ))}

          </div>

        </div>

      </section>
      {/* CUSTOM TOURS */}

<section className="py-20 md:py-24 px-4 md:px-6 bg-gray-50">

  <div className="max-w-7xl mx-auto">

    <div className="mb-14">

      <p className="text-blue-600 font-semibold mb-2">
        ИНТЕРЕСНЫЕ НАПРАВЛЕНИЯ
      </p>

      <h3 className="text-4xl md:text-5xl font-bold leading-tight">
        Индивидуальные путешествия
      </h3>

    </div>

    <div className="grid md:grid-cols-3 gap-8">

      {/* EUROPE */}

      <div className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 border border-gray-100">

        <div className="h-72 md:h-80 overflow-hidden relative">

          <img
            src="https://images.unsplash.com/photo-1491557345352-5929e343eb89?q=80&w=1200&auto=format&fit=crop"
            alt="Europe"
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />

          <div className="absolute inset-0 bg-black/20"></div>

        </div>

        <div className="p-7 flex flex-col min-h-[260px]">

          <div className="flex justify-between items-center mb-5 gap-4">

            <h4 className="text-2xl md:text-3xl font-bold">
              Европа
            </h4>

            <span className="text-blue-600 font-bold text-base md:text-lg whitespace-nowrap">
              от 120.000₽
            </span>

          </div>

          <p className="text-gray-600 mb-7 leading-relaxed">
            Италия, Франция, Швейцария и лучшие маршруты Европы.
          </p>

         <button
  onClick={() => setOpenModal(true)}
  className="w-full bg-gray-900 hover:bg-blue-600 text-white py-4 rounded-2xl transition font-semibold"
>
  Смотреть предложения
</button>

        </div>

      </div>

      {/* OCEANIA */}

      <div className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 border border-gray-100">

        <div className="h-72 md:h-80 overflow-hidden relative">

          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
            alt="Oceania"
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />

          <div className="absolute inset-0 bg-black/20"></div>

        </div>

        <div className="p-7 flex flex-col min-h-[260px]">

          <div className="flex justify-between items-center mb-5 gap-4">

            <h4 className="text-2xl md:text-3xl font-bold">
              Океания
            </h4>

            <span className="text-blue-600 font-bold text-base md:text-lg whitespace-nowrap">
              от 180.000₽
            </span>

          </div>

          <p className="text-gray-600 mb-7 leading-relaxed">
            Бали, Фиджи и райские острова Тихого океана.
          </p>

          <button
  onClick={() => setOpenModal(true)}
  className="w-full bg-gray-900 hover:bg-blue-600 text-white py-4 rounded-2xl transition font-semibold"
>
  Смотреть предложения
</button>

        </div>

      </div>

      {/* CHINA */}

      <div className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 border border-gray-100">

        <div className="h-72 md:h-80 overflow-hidden relative">

          <img
            src="https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1200&auto=format&fit=crop"
            alt="China"
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />

          <div className="absolute inset-0 bg-black/20"></div>

        </div>

        <div className="p-7 flex flex-col min-h-[260px]">

          <div className="flex justify-between items-center mb-5 gap-4">

            <h4 className="text-2xl md:text-3xl font-bold">
              Китай
            </h4>

            <span className="text-blue-600 font-bold text-base md:text-lg whitespace-nowrap">
              от 95.000₽
            </span>

          </div>

          <p className="text-gray-600 mb-7 leading-relaxed">
            Шанхай, Пекин и эксклюзивные маршруты по Азии.
          </p>

          <button
  onClick={() => setOpenModal(true)}
  className="w-full bg-gray-900 hover:bg-blue-600 text-white py-4 rounded-2xl transition font-semibold"
>
  Смотреть предложения
</button>

        </div>

      </div>

    </div>

  </div>

</section>

{/* ABOUT */}

<section id="about" className="py-20 md:py-24 px-4 md:px-6 bg-gray-50">

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

    <div>

      <img
        src="https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=1200&auto=format&fit=crop"
        alt="travel"
        className="rounded-3xl shadow-2xl h-[400px] md:h-[600px] object-cover w-full"
      />

    </div>

    <div>

      <p className="text-blue-600 font-semibold mb-3">
        WHY US
      </p>

      <h3 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
        Путешествуйте
        <br />
        легко и красиво
      </h3>

      <p className="text-gray-600 text-lg md:text-xl mb-10 leading-relaxed">
        Мы подбираем лучшие туры, выгодные предложения
        и комфортный отдых по всему миру.
      </p>

      <div className="space-y-6">

        <div className="bg-white p-6 rounded-3xl shadow-md">

          <h4 className="font-bold text-xl mb-2">
            Лучшие цены
          </h4>

          <p className="text-gray-600">
            Находим самые выгодные предложения среди туроператоров.
          </p>

        </div>

        <div className="bg-white p-6 rounded-3xl shadow-md">

          <h4 className="font-bold text-xl mb-2">
            Поддержка 24/7
          </h4>

          <p className="text-gray-600">
            Всегда на связи во время вашего путешествия.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

{/* FOOTER */}

<footer
  id="contacts"
  className="bg-black text-white py-16 px-4 md:px-6"
>

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

    <div>

      <div className="flex items-center gap-3 mb-5">

        <img
          src={publicUrl("favicon.png")}
          alt="SLAVA TRIPS"
          className="h-14 w-14 object-cover"
        />

        <div>

          <h4 className="text-2xl font-bold">
            SLAVA TRIPS
          </h4>

          <p className="text-gray-500 text-sm">
            premium travel agency
          </p>

        </div>

      </div>

      <p className="text-gray-400 leading-relaxed max-w-md">
        Современное турагентство с подбором лучших туров,
        премиальных отелей и поддержкой 24/7.
      </p>

    </div>

    <div>

      <h5 className="font-semibold mb-5 text-3xl md:text-lg">
        Контакты
      </h5>

      <div className="flex gap-6 mt-6">

        {/* MAX */}

        <a
          href="https://max.ru/u/f9LHodD0cOJnM8N8YPxJckfustxtnJExipYZYwNx6Ovve1t9hTY3GYMyXkE"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 rounded-full bg-[#071B4A] hover:bg-blue-600 transition flex items-center justify-center overflow-hidden"
        >

          <img
            src={publicUrl("Max_logo_2026.png")}
            alt="MAX"
            className="w-10 h-10 object-contain"
          />

        </a>

        {/* TELEGRAM */}

        <a
          href="https://t.me/slavatrips"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 rounded-full bg-[#071B4A] hover:bg-blue-600 transition flex items-center justify-center overflow-hidden"
        >

          <img
            src={publicUrl("Telegram_Messenger.png")}
            alt="Telegram"
            className="w-11 h-11 object-contain"
          />

        </a>

        {/* INSTAGRAM */}

        <a
          href="https://www.instagram.com/slava.trips?igsh=MWZ6eG1yZmJqMTRwdA%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 rounded-full bg-[#071B4A] hover:bg-pink-600 transition flex items-center justify-center overflow-hidden"
        >

          <img
            src={publicUrl("Instagram_icon.png")}
            alt="Instagram"
            className="w-11 h-11 object-contain"
          />

        </a>

      </div>

    </div>

  </div>

  <div className="border-t border-white/10 mt-14 pt-8 text-center text-gray-500 text-sm">
    © 2026 SLAVA TRIPS. Все права защищены.
  </div>

</footer>
{/* CONTACT MODAL */}

{openModal && (

  <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center px-6">

    <div className="bg-white rounded-3xl p-8 max-w-sm w-full relative shadow-2xl">

      <button
        onClick={() => setOpenModal(false)}
        className="absolute top-4 right-5 text-2xl text-gray-500 hover:text-black"
      >
        ×
      </button>

      <h3 className="text-3xl font-bold mb-8 text-center">
        Связаться с нами
      </h3>

      <div className="flex flex-col gap-4">

        <a
          href="https://t.me/slavatrips"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#229ED9] hover:opacity-90 text-white py-4 rounded-2xl text-center font-semibold transition"
        >
          Telegram
        </a>

        <a
          href="https://www.instagram.com/slava.trips?igsh=MWZ6eG1yZmJqMTRwdA%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-pink-500 to-orange-400 text-white py-4 rounded-2xl text-center font-semibold transition"
        >
          Instagram
        </a>

        <a
          href="https://max.ru/u/f9LHodD0cOJnM8N8YPxJckfustxtnJExipYZYwNx6Ovve1t9hTY3GYMyXkE"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#071B4A] text-white py-4 rounded-2xl text-center font-semibold transition"
        >
          MAX
        </a>

      </div>

    </div>

  </div>

)}
    </div>
  );
}
