import { useState, useCallback, useEffect } from "react";

export interface Currency {
  code: string;
  symbol: string;
  name: string;
  rate: number; // rate to KES
}

export const currencies: Currency[] = [
  { code: "KES", symbol: "KSh", name: "Kenyan Shilling", rate: 1 },
  { code: "USD", symbol: "$", name: "US Dollar", rate: 0.0077 },
  { code: "EUR", symbol: "\u20AC", name: "Euro", rate: 0.0071 },
  { code: "GBP", symbol: "\u00A3", name: "British Pound", rate: 0.0059 },
  { code: "TZS", symbol: "TSh", name: "Tanzanian Shilling", rate: 20.5 },
  { code: "UGX", symbol: "USh", name: "Ugandan Shilling", rate: 28.3 },
  { code: "RWF", symbol: "RF", name: "Rwandan Franc", rate: 10.8 },
  { code: "NGN", symbol: "\u20A6", name: "Nigerian Naira", rate: 12.1 },
  { code: "ZAR", symbol: "R", name: "South African Rand", rate: 0.14 },
  { code: "INR", symbol: "\u20B9", name: "Indian Rupee", rate: 0.65 },
];

const STORAGE_KEY = "nasi-preferred-currency";

export function useCurrency() {
  const [currencyCode, setCurrencyCode] = useState<string>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored || "KES";
    } catch {
      return "KES";
    }
  });

  const lastUpdated = new Date().toLocaleDateString();

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, currencyCode);
    } catch {
      // ignore
    }
  }, [currencyCode]);

  const currency = currencies.find((c) => c.code === currencyCode) || currencies[0];

  const convert = useCallback(
    (kesAmount: number): number => {
      return Math.round(kesAmount * currency.rate * 100) / 100;
    },
    [currency]
  );

  const formatPrice = useCallback(
    (kesAmount: number): string => {
      const converted = convert(kesAmount);
      if (currency.code === "KES" || currency.code === "TZS" || currency.code === "UGX" || currency.code === "RWF" || currency.code === "NGN") {
        return `${currency.symbol} ${converted.toLocaleString("en-US", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })}`;
      }
      return `${currency.symbol}${converted.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`;
    },
    [convert, currency]
  );

  return {
    currency,
    currencies,
    setCurrency: setCurrencyCode,
    convert,
    formatPrice,
    lastUpdated,
  };
}
