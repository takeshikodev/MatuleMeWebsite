'use client';

import { motion } from 'framer-motion';
import Header from '../components/layout/Header';

export default function Terms() {
  const sections = [
    {
      title: "Общие положения",
      content: "Настоящие Условия использования регулируют отношения между компанией Matule Me (далее — «Компания», «мы», «нас» или «наш») и пользователями (далее — «Пользователь», «вы», «ваш») нашего веб-сайта и мобильного приложения (далее — «Сервис»). Используя наш Сервис, вы соглашаетесь с настоящими Условиями использования. Если вы не согласны с каким-либо из положений, пожалуйста, не используйте наш Сервис."
    },
    {
      title: "Регистрация и учетная запись",
      content: "Для использования некоторых функций нашего Сервиса вам может потребоваться создать учетную запись. Вы несете ответственность за сохранение конфиденциальности вашей учетной записи и пароля, а также за ограничение доступа к вашему компьютеру или устройству. Вы соглашаетесь принять ответственность за все действия, которые происходят под вашей учетной записью или паролем. Компания оставляет за собой право отказать в обслуживании, удалить или изменить контент или отменить учетные записи по своему усмотрению."
    },
    {
      title: "Интеллектуальная собственность",
      content: "Сервис и его оригинальный контент (за исключением контента, предоставленного пользователями), функции и функциональность принадлежат Компании и защищены международными законами об авторском праве, товарных знаках, патентах, коммерческой тайне и другими законами об интеллектуальной собственности или правах собственности. Вы не можете копировать, модифицировать, создавать производные работы, публично отображать, публично исполнять, переиздавать, загружать, хранить или передавать любые материалы с нашего Сервиса без письменного разрешения Компании."
    },
    {
      title: "Пользовательский контент",
      content: "Наш Сервис может позволять вам публиковать, ссылаться, хранить, обмениваться или иным образом делать доступной определенную информацию, тексты, графики, видео или другие материалы («Контент»). Вы несете ответственность за Контент, который вы публикуете на нашем Сервисе, включая его законность, надежность и уместность. Публикуя Контент на нашем Сервисе, вы предоставляете нам право использовать, модифицировать, публично исполнять, публично отображать, воспроизводить и распространять такой Контент на и через Сервис."
    },
    {
      title: "Запрещенное использование",
      content: "Вы соглашаетесь не использовать Сервис: (a) любым способом, который нарушает любое применимое государственное, федеральное, провинциальное или международное законодательство или регламент; (б) для эксплуатации, вреда или попытки эксплуатации или причинения вреда несовершеннолетним путем воздействия на них вредоносным контентом, запрашивания личной информации или иным образом; (в) для передачи или обеспечения отправки любого рекламного или рекламного материала без нашего предварительного письменного согласия; (г) для выдачи себя за Компанию, сотрудника Компании, другого пользователя или любое другое лицо или организацию; (д) любым способом, который нарушает права других или каким-либо образом является незаконным, угрожающим, мошенническим или вредным."
    },
    {
      title: "Ссылки на другие веб-сайты",
      content: "Наш Сервис может содержать ссылки на сторонние веб-сайты или услуги, которые не принадлежат и не контролируются Компанией. Компания не имеет контроля и не несет ответственности за содержание, политику конфиденциальности или практику любых сторонних веб-сайтов или услуг. Вы также признаете и соглашаетесь с тем, что Компания не несет ответственности, прямо или косвенно, за любой ущерб или убытки, вызванные или предположительно вызванные использованием или доверием к любому такому контенту, товарам или услугам, доступным на или через любые такие веб-сайты или услуги."
    },
    {
      title: "Отказ от ответственности",
      content: "Ваше использование Сервиса осуществляется на ваш страх и риск. Сервис предоставляется «как есть» и «как доступно». Компания прямо отказывается от всех гарантий любого рода, явных или подразумеваемых, включая, но не ограничиваясь, подразумеваемые гарантии коммерческой пригодности, пригодности для определенной цели и ненарушения прав."
    },
    {
      title: "Ограничение ответственности",
      content: "Компания, ее директора, сотрудники, партнеры, агенты, поставщики или аффилированные лица ни в коем случае не несут ответственности за любые косвенные, случайные, особые, последующие или штрафные убытки, включая, без ограничений, потерю прибыли, данных, использования, репутации или других нематериальных потерь, возникающих в результате (i) вашего доступа к Сервису или его использования или невозможности доступа к нему или использования; (ii) любого поведения или контента любой третьей стороны на Сервисе; (iii) любого контента, полученного с Сервиса; и (iv) несанкционированного доступа, использования или изменения ваших передач или контента."
    },
    {
      title: "Изменения условий",
      content: "Мы оставляем за собой право по нашему усмотрению изменять или заменять эти Условия в любое время. Если пересмотр является существенным, мы постараемся уведомить вас не менее чем за 30 дней до вступления в силу новых условий. Определение того, что является существенным изменением, будет производиться по нашему усмотрению. Продолжая пользоваться нашим Сервисом после вступления в силу этих изменений, вы соглашаетесь с новыми условиями."
    },
    {
      title: "Контактная информация",
      content: "Если у вас есть какие-либо вопросы об этих Условиях, пожалуйста, свяжитесь с нами по адресу электронной почты: support@matuleme.ru."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.05,
        duration: 0.3
      }
    }
  };

  const childVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 150
      }
    }
  };

  return (
    <motion.div 
      initial="hidden" 
      animate="visible"
      variants={containerVariants}
    >
      <Header />
      <main className="pt-24 pb-20 overflow-hidden">
        <section className="py-12 bg-gradient-to-b from-[#f8fafc] to-white">
          <div className="container mx-auto px-4">
            <motion.div variants={childVariants} className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Условия использования</h1>
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#48B2E7] to-[#0076B1] mx-auto mb-6 rounded-full"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Пожалуйста, внимательно прочитайте следующие условия перед использованием нашего сервиса
              </p>
            </motion.div>

            <motion.div 
              variants={childVariants}
              className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="p-8">
                <motion.p 
                  variants={childVariants}
                  className="text-gray-600 mb-8"
                >
                  Последнее обновление: 21 марта 2025 г.
                </motion.p>

                {sections.map((section, index) => (
                  <motion.div 
                    key={index}
                    variants={childVariants}
                    className="mb-8"
                    custom={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <h2 className="text-2xl font-bold mb-3 text-gray-800">{section.title}</h2>
                    <p className="text-gray-600 leading-relaxed">{section.content}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </motion.div>
  );
} 