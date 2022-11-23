const priceAdjuster = (days, hours, minutes, type) => {
  let price = 0;
  if (type == "mobil") {
    if (days && days > 0) price += days * 8000;

    if (hours && hours > 0) price += hours * 5000;

    if (minutes && minutes > 0) price += 5000;
  } else if (type == "motor") {
    if (days && days > 0) price += 4000;

    if (hours && hours > 0) price += hours * 2000;

    if (minutes && minutes > 0) price += 2000;
  }
  return price;
};

module.exports = priceAdjuster;
