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
          subtitle2: "Buy alkaya products from one of our Partners",
          title2: "Where to buy",
          subtitle3: "What customers says",
          title3: "Testimonials",
          subtitle4: "Stores selling alkaya products",
          title4: "Where to find out products",
          subtitle5: "Contact Us",
          title5: "Get In Touch",

          //Product buttons
          prodButton: "Discover Our Products",

          //About
          aboutAlkaya: "About alkaya.",
          h2About: "We take the ordinary and make it extraordinary.",
          strong1:
            "Our smartphone accessories, perfectly priced, offer exceptional quality and a modern, eye-catching design. ",
          part1:
            "We are not just a brand; we are a vibe. We are the solution maker for those who value both function and design. Our mission is simple - ",
          part2:
            "We care so our clients can enjoy and rely on us, we deliver what they need, nothing less, just on the dot! ",
          break1: "The Problem.",
          strong2:
            "The world of smartphone accessories has become an overwhelming monotonous sea of uninspired choices, offered by countless manufacturers, packaged in varying sizes and presentations, leaving consumers feeling overwhelmed. ",
          part3:
            "Unfortunately, these products are often poorly displayed in many retail spaces, making them appear extremely unappealing and ultimately causing customers to refrain from making purchases. ",

          break2: "Our Solution.",
          strong3:
            "We have made it our mission to permeate the world of smartphone accessories with energy and style. ",
          part4:
            "We simplify things for our audience by delivering high-quality products at a reasonable price. Furthermore, our eye-catching product displays not only enhance the shopping experience but also accentuate the aesthetics of retail spaces, resulting in higher sales and satisfied customers! ",

          //online shops buttons
          otto: "Buy on Otto",
          ebay: "Buy on ebay",
          amazon: "Buy on amazon",
          kaufland: "Buy on Kaufland",
          etsy: "Buy on Etsy",

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
          subtitle2: "Kaufen Sie alkaya Produkte von einem unserer Partner",
          title2: "Wo zu kaufen",
          subtitle3: "Was die Kunden sagen",
          title3: "Testimonials",
          subtitle4: "Läden, die Alkaya-Produkte verkaufen",
          title4: "Wo finde ich die Produkte?",
          subtitle5: "Kontaktieren Sie uns",
          title5: "Kontakt aufnehmen",

          //Product buttons

          prodButton: "Entdecken Sie unsere Produkte",

          //About

          aboutAlkaya: "Über alkaya.",
          h2About: "Wir machen das Gewöhnliche zu etwas Außergewöhnlichem.",
          strong1:
            "Unser Smartphone-Zubehör zu einem perfekten Preis bietet außergewöhnliche Qualität und ein modernes, auffälliges Design. ",
          part1:
            "Wir sind nicht nur eine Marke, wir sind ein Lebensgefühl. Wir sind der Lösungsanbieter für alle, die sowohl auf Funktion als auch auf Design Wert legen. Unser Auftrag ist einfach - ",
          part2:
            "Wir sorgen dafür, dass unsere Kunden genießen und sich auf uns verlassen können, liefern wir das, was sie brauchen, nicht weniger, genau auf den Punkt! ",
          break1: "Das Problem.",
          strong2:
            "Die Welt des Smartphone-Zubehörs ist zu einem überwältigenden, eintönigen Meer von uninspirierten Angeboten geworden, die von unzähligen zahllosen Herstellern in unterschiedlichen Größen und Aufmachungen. Verbraucher überfordert. ",
          part3:
            "Leider werden diese Produkte in vielen Einzelhandelsgeschäften oft schlecht präsentiert, so dass sie äußerst unattraktiv wirken und die Kunden letztendlich von einem Kauf absehen. ",
          break2: "Unsere Lösung.",
          strong3:
            "Wir haben es uns zur Aufgabe gemacht, die Welt des Smartphone-Zubehör mit Energie und Stil zu durchdringen. ",
          part4:
            "Wir vereinfachen die Dinge für unsere Kunden, indem wir ihnen hochwertige Produkte zu einem vernünftigen Preis. Außerdem verbessern unsere auffälligen Produkt nicht nur das Einkaufserlebnis, sondern heben auch die Ästhetik der die Ästhetik der Verkaufsräume, was zu höheren Umsätzen und zufriedene Kunden! ",

          //online shops buttons
          otto: "Bei Otto kaufen",
          ebay: "Bei ebay kaufen",
          amazon: "Auf amazon kaufen",
          kaufland: "Bei Kaufland kaufen",
          etsy: "Auf Etsy kaufen",

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
