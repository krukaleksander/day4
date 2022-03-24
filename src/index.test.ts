import fetch from "node-fetch";

test.skip("Eur/PLN", async () => {
  const response = await fetch(
    "http://api.nbp.pl/api/exchangerates/rates/a/eur/"
  );
  const data: ICurrencyResponse = await response.json();
  console.log(data);
});

test.skip("USD/PLN", async () => {
  const response = await fetch(
    "http://api.nbp.pl/api/exchangerates/rates/a/usd/"
  );
  const data: ICurrencyResponse = await response.json();
  console.log(data);
});

test("difference between today EUR/PLN rate and month before", async () => {
  const responseToday = await fetch(
    "http://api.nbp.pl/api/exchangerates/rates/a/eur/2022-03-23/"
  );
  const dataToday: ICurrencyResponse = await responseToday.json();

  console.log(dataToday);

  const responseMonthAgo = await fetch(
    "http://api.nbp.pl/api/exchangerates/rates/a/gbp/2022-02-23/"
  );
  const dataMonthAgo: ICurrencyResponse = await responseMonthAgo.json();

  console.log(dataMonthAgo);

  const difference: IDifferenceInRates = {
    todayRate: dataToday.rates[0].mid,
    agoRate: dataMonthAgo.rates[0].mid,
    difference: dataToday.rates[0].mid - dataMonthAgo.rates[0].mid,
  };
  console.log(difference);
});

interface ICurrencyResponse {
  table: string;
  currency: string;
  code: string;
  rates: IRatesArray[];
}

interface IRatesArray {
  no: string;
  effectiveDate: string;
  mid: number;
}

interface IDifferenceInRates {
  todayRate: number;
  agoRate: number;
  difference: number;
}
