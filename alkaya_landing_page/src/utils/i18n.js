import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "de",
    resources: {
      en: {
        translation: {
          //Nav

          whoWeAre: "Who we are",
          ourProducts: "Our Products",
          whereToBuy: "Where to Buy",
          contacts: "Contact",
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
          edeka: "Visit Edeka",
          rewe: "Visit Rewe",
          teampoint: "Visit Teampoint",
          handysalon: "Visit Handy Salon",

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

          //Contacts
          contactTitle: "Contact Us",
          contactText:
            "Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to all our customers. ",
          contactCountry: "Germany",
          serviceHours: "Service Hours: Monday to Friday 09:00 – 18.00",

          //Form Contact
          formNameLab: "Your Name*",
          formNamePh: "Enter your name",
          formPhoneLab: "Phone Number",
          formb2bPhoneLab: "Phone Number*",
          formPhonePh: "Enter your mobile number",
          formEmailLab: "Your Email*",
          formEmailPh: "Enter your email",
          formMessageLab: "Write your message Here*",
          formMessagePh: "Enter your message",
          formSubmit: "Submit now",
          formCompanyLab: "Company Name*",
          formCompanyPh: "Enter your Company Name",

          //Impressum

          impressum: "Imprint",
          kaufman: "Commercial management",
          address: "Address:",
          phone: "Phone Number:",

          //B2B page
          b2bSubtitle:
            "Become a B2B partner now and benefit from many advantages!",
          h2B2bAbout:
            "Become part of our network and take advantage of the numerous advantages of a B2B partnership with us. Benefit from:",
          b2bStrong1: "Up to 60 day return policy ",
          b2bPart1:
            "= no risk! Whatever is left can be exchanged for new goods;",
          b2bStrong2:
            "Prioritized customer service for fast and efficient support;",
          b2bPart2: "",
          b2bStrong3:
            "Joint marketing campaigns to increase your visibility and reach;",
          b2bPart3: "",
          b2bStrong4:
            "Individual solutions tailored to your specific business needs;",
          b2bPart4: "",
          b2bStrong5: "Refill & maintenance service by our field service ",
          b2bPart5: "(stress-free package)",
          b2bStrong6: "Upgrading your shop through a uniform sales concept ",
          b2bPart6: "(furniture and sales displays)",
          b2bStrong7: "2 year guarantee on our products!",

          b2bStrong8: "Cash back programs",

          b2bStrong9: "Commission package on request ",
          b2bPart9: "no risk, no investment",
          b2bRegister:
            "Register today and start your successful partnership with us!",
        },
      },
      de: {
        translation: {
          //Nav
          whoWeAre: "Über Uns",
          ourProducts: "Unsere Produkte",
          whereToBuy: "Wo kaufen",
          contacts: "Kontakt",

          //Hero
          heroP:
            "Wir nehmen das Gewöhnliche und machen es außergewöhnlich. Unser Smartphone-Zubehör zu einem perfekten Preis bietet außergewöhnliche Qualität und ein modernes, auffälliges Design.",
          learnMore: "Mehr erfahren",

          //Titles & subtitles

          subtitle1: "Unsere Produkte nach Kategorien",
          title1: "Entdecken Sie alkaya.",
          subtitle2: "Kaufen Sie alkaya Produkte von einem unserer Partner",
          title2: "Wo Sie uns finden",
          subtitle3: "Was unsere Kunden sagen",
          title3: "Rezensionen",
          subtitle4: "",
          title4: "Stores, die Alkaya-Produkte verkaufen",
          subtitle5: "Kontaktieren Sie uns",
          title5: "",

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
          edeka: "Edeka besuchen",
          rewe: "Rewe besuchen",
          teampoint: "Teampoint besuchen",
          handysalon: "Handy Salon besuchen",

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

          //Contacts
          contactTitle: "Kontakt",
          contactText:
            "Bitte kontaktieren Sie uns über das Kontaktformular oder finden Sie unsere Informationen unten. Ihr Feedback, Ihre Fragen und Vorschläge sind uns sind uns wichtig, da wir uns bemühen, allen unseren Kunden einen außergewöhnlichen Kunden zu bieten. ",
          contactCountry: "Deutschland",
          serviceHours: "Servicezeiten: Montag bis Freitag 09:00 - 18.00 Uhr",

          //Form Contact
          formNameLab: "Ihr Name*",
          formNamePh: "Geben Sie Ihren Namen ein",
          formPhoneLab: "Telefonnummer",
          formb2bPhoneLab: "Telefonnummer*",
          formPhonePh: "Geben Sie Ihre Handynummer ein",
          formEmailLab: "Ihre E-Mail*",
          formEmailPh: "Geben Sie Ihre E-Mail ein",
          formMessageLab: "Schreiben Sie hier Ihre Nachricht*",
          formMessagePh: "Geben Sie Ihre Nachricht ein",
          formCompanyLab: "Name des Unternehmens*",
          formCompanyPh: "Geben Sie Ihren Firmennamen ein",

          formSubmit: "Jetzt einreichen",

          //Impressum
          impressum: "Impressum",
          kaufman: "Kaufmännische Leitung",
          address: "Lieferadresse:",
          phone: "Telefon:",

          //B2B page
          b2bSubtitle:
            "Jetzt B2B-Partner werden und von vielen Vorteilen profitieren!",
          h2B2bAbout:
            "Werden Sie Teil unseres Netzwerks und nutzen Sie die zahlreichen Vorteile einer B2B-Partnerschaft mit uns. Profitieren Sie von:",
          b2bStrong1: "60 Tage Rückgaberecht ",
          b2bPart1:
            "= Kein Risiko! Was übrig bleibt, kann gegen neue Ware umgetauscht werden;",
          b2bStrong2: "Priorisiertem Kundenservice ",
          b2bPart2: "für schnelle und effiziente Unterstützung",
          b2bStrong3: "Gemeinsamen Marketingaktionen ",
          b2bPart3: "zur Steigerung Ihrer Sichtbarkeit und Reichweite",
          b2bStrong4: "Individuellen Lösungen, ",
          b2bPart4:
            "die auf Ihre spezifischen Geschäftsanforderungen zugeschnitten sind;",
          b2bStrong5: "Auffüller & Pflege-Service durch unseren Außendienst",
          b2bPart5: " (Stressfree Paket);",
          b2bStrong6:
            "Aufwertung deines Shops, durchein einheitliches Verkaufskonzept",
          b2bPart6: " ( Möbel und Verkaufsdisplays);",
          b2bStrong7: "2 Jahre Garantie auf Unsere Produkte!",

          b2bStrong8: "Cash-Back Programme",

          b2bStrong9: "Kommissionspaket auf Wunsch ",
          b2bPart9: "= Kein Riskio, kein Investment.",
          b2bRegister:
            "Melden Sie sich noch heute an und starten Sie Ihre erfolgreiche Partnerschaft mit uns!",
        },
      },
    },
  });
