export let mPlans = [
  {
    icon: "../img/icons/icon-pro.svg",
    name: "Arcade",
    duration: "Monthly",
    price: 9,
    priceDuration: "mo",
    sumDuration: "month",
  },

  {
    icon: "../img/icons/icon-advanced.svg",
    name: "Advanced",
    duration: "Monthly",
    price: 12,
    priceDuration: "mo",
    sumDuration: "month",
  },

  {
    icon: "../img/icons/icon-pro.svg",
    name: "Pro",
    duration: "Monthly",
    price: 15,
    priceDuration: "mo",
    sumDuration: "month",
  },
];

export let yPlans = [
  {
    icon: "../img/icons/icon-pro.svg",
    name: "Arcade",
    duration: "Yearly",
    price: 90,
    priceDuration: "yr",
    bonus: "2 months free",
    sumDuration: "year",
  },

  {
    icon: "../img/icons/icon-advanced.svg",
    name: "Advanced",
    duration: "Yearly",
    price: 120,
    priceDuration: "yr",
    bonus: "2 months free",
    sumDuration: "year",
  },

  {
    icon: "../img/icons/icon-pro.svg",
    name: "Pro",
    duration: "Yearly",
    price: 150,
    priceDuration: "yr",
    bonus: "2 months free",
    sumDuration: "year",
  },
];

export let selectedP = mPlans;
export function togglePlanSelect() {
  if (selectedP === mPlans) {
    selectedP = yPlans;
  } else {
    selectedP = mPlans;
  }

  genHtml(selectedP);
}
