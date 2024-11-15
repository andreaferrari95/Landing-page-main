import { useTranslation } from "react-i18next";
import { NavbarProducts } from "../Navbar-Products/NavbarProducts";

import Footer from "../../components/Footer/Footer";

import "../../components/Manuals/Manuals.css";

import BH30001 from "/forgreenworld/BH-30001-2.pdf";
import BH30003 from "/forgreenworld/BH-30003.pdf";
import BH30004 from "/forgreenworld/BH-30004-5.pdf";
import BH30006 from "/forgreenworld/BH-30006-7.pdf";
import CR50009 from "/forgreenworld/CR-50009.pdf";
import CR50010 from "/forgreenworld/CR-50010.pdf";
import GT80001 from "/forgreenworld/GT-80001-2.pdf";
import GT80007 from "/forgreenworld/GT-80007-8.pdf";
import GT80009 from "/forgreenworld/GT-80009-10.pdf";
import PB40002 from "/forgreenworld/PB-40002-3.pdf";
import PB40004 from "/forgreenworld/PB-40004-5.pdf";

import BH30001img from "../../assets/img/manual-img/BH-30001-2.jpg";
import BH30003img from "../../assets/img/manual-img/BH-30003.jpg";
import BH30004img from "../../assets/img/manual-img/BH-30004-5.jpg";
import BH30006img from "../../assets/img/manual-img/BH-30006-7.jpg";
import CR50009img from "../../assets/img/manual-img/CR-50009.jpg";
import CR50010img from "../../assets/img/manual-img/CR-50010.jpg";
import GT80001img from "../../assets/img/manual-img/GT-80001-2.jpg";
import GT80007img from "../../assets/img/manual-img/GT-80007-8.jpg";
import GT80009img from "../../assets/img/manual-img/GT-80009-10.jpg";
import PB40002img from "../../assets/img/manual-img/PB-40002-3.jpg";
import PB40004img from "../../assets/img/manual-img/PB-40004-5.jpg";

const MANUALS = [
  {
    id: "BH30001",
    name: "BH-30001-2",
    pdfLink: BH30001,
    imgSrc: BH30001img,
  },
  {
    id: "BH30003",
    name: "BH-30003",
    pdfLink: BH30003,
    imgSrc: BH30003img,
  },
  {
    id: "BH30004",
    name: "BH-30004-5",
    pdfLink: BH30004,
    imgSrc: BH30004img,
  },
  {
    id: "BH30006",
    name: "BH-30006-7",
    pdfLink: BH30006,
    imgSrc: BH30006img,
  },
  {
    id: "CR50009",
    name: "CR-50009",
    pdfLink: CR50009,
    imgSrc: CR50009img,
  },
  {
    id: "CR50010",
    name: "CR-50010",
    pdfLink: CR50010,
    imgSrc: CR50010img,
  },
  {
    id: "GT80001",
    name: "GT-80001-2",
    pdfLink: GT80001,
    imgSrc: GT80001img,
  },
  {
    id: "GT80007",
    name: "GT-80007-8",
    pdfLink: GT80007,
    imgSrc: GT80007img,
  },
  {
    id: "GT80009",
    name: "GT-80009-10",
    pdfLink: GT80009,
    imgSrc: GT80009img,
  },
  {
    id: "PB40002",
    name: "PB-40002-3",
    pdfLink: PB40002,
    imgSrc: PB40002img,
  },
  {
    id: "PB40004",
    name: "PB-40004-5",
    pdfLink: PB40004,
    imgSrc: PB40004img,
  },
];

const Manuals = () => {
  const { t } = useTranslation();

  return (
    <div>
      <NavbarProducts />
      <div>
        <h2 className="title-downloads">{t("h2TitleDownload")}</h2>
      </div>
      <div className="manual-category" id="products">
        {MANUALS.map((manual) => (
          <div key={manual.id} className="manual-cat">
            <img src={manual.imgSrc} alt={manual.name} />
            <div className="caption">
              <a
                href={manual.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                {manual.name}
              </a>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Manuals;
