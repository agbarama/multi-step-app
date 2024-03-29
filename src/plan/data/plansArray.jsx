import arcade from "../assets/icons/icon-arcade.svg";
import advanced from "../assets/icons/icon-advanced.svg";
import pro from "../assets/icons/icon-pro.svg";

export let mPlans = [
  {
    icon: arcade,
    name: "Arcade",
    duration: "Monthly",
    price: 9,
    priceDuration: "mo",
    sumDuration: "month",
    toggled: false,
  },

  {
    icon: advanced,
    name: "Advanced",
    duration: "Monthly",
    price: 12,
    priceDuration: "mo",
    sumDuration: "month",
    toggled: false,
  },

  {
    icon: pro,
    name: "Pro",
    duration: "Monthly",
    price: 15,
    priceDuration: "mo",
    sumDuration: "month",
    toggled: false,
  },
];

export let yPlans = [
  {
    icon: arcade,
    name: "Arcade",
    duration: "Yearly",
    price: 90,
    priceDuration: "yr",
    bonus: "2 months free",
    sumDuration: "year",
    toggled: false,
  },

  {
    icon: advanced,
    name: "Advanced",
    duration: "Yearly",
    price: 120,
    priceDuration: "yr",
    bonus: "2 months free",
    sumDuration: "year",
    toggled: false,
  },

  {
    icon: pro,
    name: "Pro",
    duration: "Yearly",
    price: 150,
    priceDuration: "yr",
    bonus: "2 months free",
    sumDuration: "year",
    toggled: false,
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
