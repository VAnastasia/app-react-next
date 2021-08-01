const formatNumberCurrency = (number: number): string  => {
  return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(number);
}

export {formatNumberCurrency};
