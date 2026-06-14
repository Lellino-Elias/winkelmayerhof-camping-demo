import type { CampsiteConfig } from "../types";

const IMG = "/campsites/winkelmayerhof";

const winkelmayerhof: CampsiteConfig = {
  name: "Winkelmayer Hof",
  shortName: "Winkelmayer",
  slug: "winkelmayerhof",
  ort: "St. Barbara im Mürztal",
  region: "Steiermark",
  brandKind: "Camping · Almleben · Bauernhof",
  regionLong: "Mürztal · Steiermark · Österreich",

  heroVariant: "center",

  claim: "Camping mitten im echten Bauernhofleben",
  claimEmphasis: "echten Bauernhofleben",
  emailDetail: "euer Bauernhof mit Pferden, Ziegen und sogar Emus",
  intro:
    "Bei Franzi und Sigi stellst du Wohnmobil oder Zelt zwischen Obstbäume und Weidetiere — XL-Stellplatz mit Strom, Lagerfeuer am Abend und frisches Brot aus dem Hittl gleich nebenan.",

  statement: {
    text: "Ein Hof, auf dem Mensch wieder Mensch und Tier noch Tier sein darf — und du einfach ankommst.",
    emphasis: "Mensch wieder Mensch",
  },

  pillars: [
    {
      title: "Mittendrin im Bauernhof",
      text: "Pferde, Ziegen, Hühner und sogar Emus leben auf dem Hof — artgerechte Tierhaltung liegt Franzi und Sigi am Herzen.",
      image: { src: `${IMG}/gallery-4fc94c051e.webp`, alt: "Haflinger-Pferde grasen vor den Hütten am Winkelmayer Hof" },
    },
    {
      title: "Zeltplatz unter Obstbäumen",
      text: "Idyllischer Zeltplatz zwischen Obstbäumen und Tieren — Lagerfeuer, Sanitärbereich und WLAN inklusive, Hunde willkommen.",
      image: { src: `${IMG}/gallery-ab38e37a4c.webp`, alt: "Schattiger Zeltplatz mit Tisch und Hängesessel zwischen Obstbäumen" },
    },
    {
      title: "s’Hittl — Tag und Nacht",
      text: "Die Selbstbedienungshütte hat rund um die Uhr offen: Brot der Bäuerin, Aufstriche, Honig und Eier der eigenen Hühner.",
      image: { src: `${IMG}/gallery-327893c5a2.webp`, alt: "Handgeschnitztes Holzschild s'Hittl am Winkelmayer Hof" },
    },
  ],

  usps: [
    "XL-Stellplatz mit Strom",
    "Lagerfeuer am Platz",
    "Hunde herzlich willkommen",
    "s’Hittl rund um die Uhr",
    "Pferde, Ziegen & Emus",
  ],

  trust: {
    heading: "Bei Franzi und Sigi bist du Gast, nicht Nummer",
    headingEmphasis: "Gast, nicht Nummer",
    intro:
      "Ein Familienbetrieb, der dem Trubel den Rücken kehrt: artgerechte Tierhaltung, ehrliche Hofprodukte und ein Platz, an dem du Ruhe, Natur und grenzenlose Freiheit findest.",
  },

  awards: [],

  hero: {
    aerial: { src: `${IMG}/gallery-f293002160.webp`, alt: "Stellplätze mit Wohnmobilen vor den bewaldeten Hügeln des Mürztals" },
  },

  breather: {
    image: { src: `${IMG}/gallery-b2770d88d4.webp`, alt: "Die Winkelmayer Hütte mit Terrasse im Abendlicht über dem Hof" },
    line: "Leben wie vor 100 Jahren — oben auf der Alm.",
  },

  camping: {
    heading: "Camping am Hof",
    intro:
      "Stellplatz in XL inklusive Strom und Wasser, Lagerfeuer, Sanitärbereich und WLAN — Camping für gesellige Naturliebhaber, die dem Trubel entfliehen wollen.",
    features: [],
  },

  anreise: {
    heading: "Dein Weg ins Mürztal",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die S6 Semmering Schnellstraße bis Kindberg/Mürzzuschlag, dann auf der B306 nach St. Barbara im Mürztal, Ortsteil Wartberg — Dorfstraße 60.",
      },
      {
        title: "Mit der Bahn",
        text: "Bahnhof Wartberg im Mürztal an der Südbahn (Wien – Bruck an der Mur – Graz), der Hof liegt nur wenige Minuten entfernt.",
      },
      {
        title: "Service-Stopp",
        text: "Camper auf der Durchreise entsorgen Grau- und Schwarzwasser und füllen Trinkwasser auf — ohne Übernachtung, pauschal € 10.",
      },
    ],
  },

  galerie: {
    heading: "Eindrücke vom Hof",
    headingEmphasis: "Hof",
    intro: "",
    tag: "",
    images: [],
  },

  booking: {
    heading: "Such dir deinen Platz am Hof",
    headingEmphasis: "am Hof",
    intro:
      "Wähle Zeitraum und Personen — Franzi und Sigi melden sich persönlich mit deiner Verfügbarkeit zurück.",
    pricesArePlaceholder: false,
    priceNote:
      "ab-Preise pro Nacht zzgl. € 9,50 pro Person ab 15 Jahren und € 2 Ortstaxe pro Person · Check-out bis 11 Uhr",
    highlight: {
      title: "Service-Stopp für Durchreisende",
      text: "Grau- und Schwarzwasser entsorgen, Trinkwasser auffüllen — pauschal € 10, ganz ohne Übernachtung.",
    },
    categories: [
      { id: "stellplatz", label: "Stellplatz", perNight: 19, perExtraGuest: 9.5 },
      { id: "zelt", label: "Zeltplatz", perNight: 10, perExtraGuest: 9.5 },
    ],
  },

  kontakt: {
    coords: { lat: 47.526052, lng: 15.496908 },
    tel: "+43 664 5028089",
    telHref: "tel:+436645028089",
    mail: "kontakt@winkelmayerhof.at",
    adresse: "Dorfstraße 60 · 8661 St. Barbara im Mürztal · Steiermark",
  },

  languages: ["DE", "EN"],

  nav: [
    { label: "Hof", href: "#" },
    { label: "Anreise", href: "#anreise" },
    { label: "Preise", href: "#booking" },
  ],
};

export default winkelmayerhof;
