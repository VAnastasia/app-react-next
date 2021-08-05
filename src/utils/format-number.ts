const formatNumberCurrencyRub = (number: number): string  => {
  return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(number);
}

export {formatNumberCurrencyRub};
