/*
  Provides greetings in multiple languages based on the time of day.
*/

const greetings = {
  en: {
    morning: "Good morning",
    afternoon: "Good afternoon",
    evening: "Good evening",
  },
  fr: {
    morning: "Bonjour",
    afternoon: "Bon après-midi",
    evening: "Bonsoir",
  },
  es: {
    morning: "Buenos días",
    afternoon: "Buenas tardes",
    evening: "Buenas noches",
  },
  de: {
    morning: "Guten Morgen",
    afternoon: "Guten Tag",
    evening: "Guten Abend",
  },
  it: {
    morning: "Buongiorno",
    afternoon: "Buon pomeriggio",
    evening: "Buonasera",
  },
  pt: {
    morning: "Bom dia",
    afternoon: "Boa tarde",
    evening: "Boa noite",
  },
  nl: {
    morning: "Goedemorgen",
    afternoon: "Goedemiddag",
    evening: "Goedenavond",
  },
  sv: {
    morning: "God morgon",
    afternoon: "God eftermiddag",
    evening: "God kväll",
  },
  no: {
    morning: "God morgen",
    afternoon: "God ettermiddag",
    evening: "God kveld",
  },
  da: {
    morning: "God morgen",
    afternoon: "God eftermiddag",
    evening: "God aften",
  },
  fi: {
    morning: "Hyvää huomenta",
    afternoon: "Hyvää iltapäivää",
    evening: "Hyvää iltaa",
  },
  pl: {
    morning: "Dzień dobry",
    afternoon: "Dzień dobry",
    evening: "Dobry wieczór",
  },
  cs: {
    morning: "Dobré ráno",
    afternoon: "Dobré odpoledne",
    evening: "Dobrý večer",
  },
  sk: {
    morning: "Dobré ráno",
    afternoon: "Dobrý deň",
    evening: "Dobrý večer",
  },
  hu: {
    morning: "Jó reggelt",
    afternoon: "Jó napot",
    evening: "Jó estét",
  },
  ro: {
    morning: "Bună dimineața",
    afternoon: "Bună ziua",
    evening: "Bună seara",
  },
  bg: {
    morning: "Добро утро",
    afternoon: "Добър ден",
    evening: "Добър вечер",
  },
  ru: {
    morning: "Доброе утро",
    afternoon: "Добрый день",
    evening: "Добрый вечер",
  },
  uk: {
    morning: "Доброго ранку",
    afternoon: "Добрий день",
    evening: "Добрий вечір",
  },
  el: {
    morning: "Καλημέρα",
    afternoon: "Καλό απόγευμα",
    evening: "Καλησπέρα",
  },
  tr: {
    morning: "Günaydın",
    afternoon: "İyi günler",
    evening: "İyi akşamlar",
  },
  ar: {
    morning: "صباح الخير",
    afternoon: "مساء الخير",
    evening: "مساء الخير",
  },
  he: {
    morning: "בוקר טוב",
    afternoon: "אחר הצהריים טובים",
    evening: "ערב טוב",
  },
  fa: {
    morning: "صبح بخیر",
    afternoon: "ظهر بخیر",
    evening: "عصر بخیر",
  },
  hi: {
    morning: "सुप्रभात",
    afternoon: "नमस्ते",
    evening: "शुभ संध्या",
  },
  bn: {
    morning: "সুপ্রভাত",
    afternoon: "শুভ অপরাহ্ন",
    evening: "শুভ সন্ধ্যা",
  },
  zh: {
    morning: "早上好",
    afternoon: "下午好",
    evening: "晚上好",
  },
  ja: {
    morning: "おはようございます",
    afternoon: "こんにちは",
    evening: "こんばんは",
  },
  ko: {
    morning: "좋은 아침입니다",
    afternoon: "안녕하세요",
    evening: "좋은 저녁입니다",
  },
  th: {
    morning: "สวัสดีตอนเช้า",
    afternoon: "สวัสดีตอนบ่าย",
    evening: "สวัสดีตอนเย็น",
  },
  vi: {
    morning: "Chào buổi sáng",
    afternoon: "Chào buổi chiều",
    evening: "Chào buổi tối",
  },
  id: {
    morning: "Selamat pagi",
    afternoon: "Selamat siang",
    evening: "Selamat malam",
  },
  ms: {
    morning: "Selamat pagi",
    afternoon: "Selamat petang",
    evening: "Selamat malam",
  },
  sw: {
    morning: "Habari za asubuhi",
    afternoon: "Habari za mchana",
    evening: "Habari za jioni",
  },
  zu: {
    morning: "Sawubona ekuseni",
    afternoon: "Sawubona emini",
    evening: "Sawubona kusihlwa",
  },
};

function getGreeting(languageCode) {
  const hours = new Date().getHours();
  let timeOfDay;
  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours < 18) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "evening";
  }

  const greetingsForLanguage = greetings[languageCode] || greetings["en"];
  return greetingsForLanguage[timeOfDay];
}
