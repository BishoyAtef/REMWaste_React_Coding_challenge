// utils/skipPricingService.js

const calculateSkipPrice = (
  priceBeforeVat,
  vat
) => {
  return priceBeforeVat + vat;
};

export default calculateSkipPrice
