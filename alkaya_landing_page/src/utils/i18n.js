import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    resources: {
      en: {
        translation: {
          //Nav

          whoWeAre: "Who we are",
          ourProducts: "Our Products",
          whereToBuy: "Where to Buy",
          contacts: "Contacts",
          //Hero
          heroP:
            "We take the ordinary and make it extraordinary. Our smartphone accessories, perfectly priced, offer exceptional quality and a modern, eye-catching design.",
          learnMore: "Learn more",

          //Titles & subtitles

          subtitle1: "Our products by category",
          title1: "Discover alkaya.",

          //Product buttons

          prodButton: "Discover Our Products",

          //About

          aboutAlkaya: "About alkaya.",
          h2About: "We take the ordinary and make it extraordinary.",
          strong1:
            "Our smartphone accessories, perfectly priced, offer exceptional quality and a modern, eye-catching design. ",

          //Testimonials
          span1: "Purchased from Amazon",
          testimonial1:
            "I have many other powerbanks, but the alkaya. one went over my expectations. It's just so good not having to worry about carrying a cable for every device I want to charge and for charging the powerbank too. This powerbank has a USB C, lightning, a USB A cable and a wireless charging area all integrated. You can charge multiple devices at once without carrying cables with you. It also has extra ports if needed. The build quality is top notch and the price is well under other brands that offer the same quality. Really happy with my purchase!",
          span2: "Purchased from eBay",
          testimonial2:
            "The GPS tracker works perfectly and is very easy and quick to use. The seller is highly recommended without reservation. The delivery was quick as a flash.",
          span3: "Purchased from Amazon",
          testimonial3:
            "The Alkaya Powerbank with 10,000 mAh is an indispensable accessory for camping enthusiasts and anyone who needs their cell phone around the clock but doesn't always have the opportunity to charge it stationary. The charging speed is impressive and the versatile charging options make it an absolute lifesaver in emergency situations. Particularly noteworthy is the inductive charging surface, which offers an elegant solution for using the phone quickly and easily. No more constantly plugging and unplugging cables - an annoying task that often occurs with other devices. Highly recommended!",
          span4: "Purchased from Amazon",
          testimonial4:
            "The case is perfectly tailored to the phone and made from a very pleasant material. It feels very good.",
        },
      },
      de: {
        translation: {
          //Nav
          whoWeAre: "Über Uns",
          ourProducts: "Unsere Produkte",
          whereToBuy: "Wo kaufen",
          contacts: "Kontakte",

          //Hero
          heroP:
            "Wir nehmen das Gewöhnliche und machen es außergewöhnlich. Unser Smartphone-Zubehör zu einem perfekten Preis bietet außergewöhnliche Qualität und ein modernes, auffälliges Design.",
          learnMore: "Mehr erfahren",

          //Titles & subtitles

          subtitle1: "Unsere Produkte nach Kategorien",
          title1: "Entdecken Sie alkaya.",

          //Product buttons

          prodButton: "Entdecken Sie unsere Produkte",

          //About

          aboutAlkaya: "Über alkaya.",
          h2About: "Wir machen das Gewöhnliche zu etwas Außergewöhnlichem.",
          strong1:
            "Unser Smartphone-Zubehör zu einem perfekten Preis bietet außergewöhnliche Qualität und ein modernes, auffälliges Design. ",

          //Testimonials
          span1: "Gekauft bei Amazon",
          testimonial1:
            "Ich habe viele andere Powerbanks, aber die von alkaya. hat meine Erwartungen übertroffen. Es ist einfach so gut, dass ich nicht für jedes Gerät, das ich aufladen möchte, ein Kabel mitnehmen muss, und auch nicht für das Aufladen der Powerbank. Diese Powerbank hat ein USB-C-, ein Lightning- und ein USB-A-Kabel sowie einen kabellosen Ladebereich integriert. Sie können mehrere Geräte gleichzeitig aufladen, ohne Kabel mit sich führen zu müssen. Außerdem verfügt sie über zusätzliche Anschlüsse, falls erforderlich. Die Verarbeitungsqualität ist erstklassig und der Preis liegt weit unter dem anderer Marken, die die gleiche Qualität bieten. Ich bin sehr zufrieden mit meinem Kauf!",
          span2: "Gekauft bei eBay",
          testimonial2:
            "Der GPS Tracker funktioniert tadellos und ist sehr leicht und schnell einsatzbereit. Der Verkäufer ist vorbehaltlos sehr zu empfehlen. Die Lieferung kam schnell wie ein Blitz.",
          span3: "Gekauft bei Amazon",
          testimonial3:
            "Die Alkaya Powerbank mit 10.000 mAh ist ein unverzichtbares Zubehör für Campingliebhaber und alle, die ihr Handy rund um die Uhr benötigen, aber nicht immer die Möglichkeit haben, es stationär aufzuladen. Die Ladegeschwindigkeit ist beeindruckend und die vielseitigen Ladeoptionen machen sie in Notsituationen zum absoluten Retter. Besonders hervorzuheben ist die induktive Ladefläche, die eine elegante Lösung bietet, um das Handy schnell und unkompliziert zu verwenden. Kein ständiges Ein- und Ausstecken von Kabeln mehr – eine nervige Aufgabe, die bei anderen Geräten oft vorkommt. Sehr empfehlenswert!",
          span4: "Gekauft bei Kaufland",
          testimonial4:
            "Die Hülle ist sehr perfekt für das Handy zugeschnitten und in einem sehr angenehmen Material hergestellt worden. Es fühlt sich sehr gut an.",
        },
      },
    },
  });
