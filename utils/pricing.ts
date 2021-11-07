export default (price) => {
  const newPrice = price.toString().slice(0, 3);
  var euroCurrency;
  return (euroCurrency =
    "\u20AC" + newPrice.toLocaleString("nl-NL", { minimumFractionDigits: 2 }));
};
