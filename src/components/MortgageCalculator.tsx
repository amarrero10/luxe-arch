"use client";

import { useMemo, useState } from "react";
import { formatPrice } from "@/lib/properties";

const PROPERTY_TAX_RATE = 0.011;
const INSURANCE_RATE = 0.0035;

function round(value: number): number {
  return Math.round(value);
}

export default function MortgageCalculator({ homePrice }: { homePrice: number }) {
  const [price, setPrice] = useState(homePrice);
  const [downPayment, setDownPayment] = useState(round(homePrice * 0.2));
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTermYears, setLoanTermYears] = useState(30);

  const { monthlyPI, monthlyTax, monthlyInsurance, totalMonthly } = useMemo(() => {
    const principal = Math.max(price - downPayment, 0);
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTermYears * 12;

    const pi =
      monthlyRate === 0 || numPayments === 0
        ? principal / Math.max(numPayments, 1)
        : (principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
          (Math.pow(1 + monthlyRate, numPayments) - 1);

    const tax = (price * PROPERTY_TAX_RATE) / 12;
    const insurance = (price * INSURANCE_RATE) / 12;

    return {
      monthlyPI: round(pi),
      monthlyTax: round(tax),
      monthlyInsurance: round(insurance),
      totalMonthly: round(pi + tax + insurance),
    };
  }, [price, downPayment, interestRate, loanTermYears]);

  return (
    <div className="mt-stack-lg bg-surface-container-lowest rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.04)] border border-outline-variant/20 p-gutter flex flex-col gap-stack-md">
      <h3 className="text-headline-md font-semibold text-primary">Mortgage Calculator</h3>

      <div className="py-stack-md border-b border-outline-variant/30">
        <div className="text-on-surface-variant text-label-md mb-1">
          Estimated Monthly Payment
        </div>
        <div className="text-price-display font-bold text-primary">
          {formatPrice(totalMonthly)} <span className="text-body-md font-normal">/ mo</span>
        </div>
      </div>

      <div className="flex flex-col gap-stack-sm">
        <div className="space-y-1">
          <label className="text-label-md font-semibold text-on-surface-variant">
            Home Price
          </label>
          <input
            type="number"
            min={0}
            step={1000}
            value={price}
            onChange={(e) => setPrice(Number(e.target.value) || 0)}
            className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-body-md focus:outline-none focus:border-tertiary-container focus:ring-1 focus:ring-tertiary-container transition-colors"
          />
        </div>
        <div className="space-y-1">
          <label className="text-label-md font-semibold text-on-surface-variant">
            Down Payment ($)
          </label>
          <input
            type="number"
            min={0}
            step={1000}
            value={downPayment}
            onChange={(e) => setDownPayment(Number(e.target.value) || 0)}
            className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-body-md focus:outline-none focus:border-tertiary-container focus:ring-1 focus:ring-tertiary-container transition-colors"
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-1">
            <label className="text-label-md font-semibold text-on-surface-variant">
              Interest Rate (%)
            </label>
            <input
              type="number"
              min={0}
              step={0.1}
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value) || 0)}
              className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-body-md focus:outline-none focus:border-tertiary-container focus:ring-1 focus:ring-tertiary-container transition-colors"
            />
          </div>
          <div className="space-y-1">
            <label className="text-label-md font-semibold text-on-surface-variant">
              Loan Term (Yrs)
            </label>
            <input
              type="number"
              min={1}
              step={1}
              value={loanTermYears}
              onChange={(e) => setLoanTermYears(Number(e.target.value) || 1)}
              className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-body-md focus:outline-none focus:border-tertiary-container focus:ring-1 focus:ring-tertiary-container transition-colors"
            />
          </div>
        </div>

        <div className="mt-2 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-on-surface-variant">Principal &amp; Interest</span>
            <span className="font-bold">{formatPrice(monthlyPI)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-on-surface-variant">Property Taxes</span>
            <span className="font-bold">{formatPrice(monthlyTax)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-on-surface-variant">Home Insurance</span>
            <span className="font-bold">{formatPrice(monthlyInsurance)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
