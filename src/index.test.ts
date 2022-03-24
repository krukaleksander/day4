import fetch from "node-fetch";

test("Eur/PLN", async () => {
  const response = await fetch(
    "http://api.nbp.pl/api/exchangerates/rates/a/eur/"
  );
  const data: ICurrencyResponse = await response.json();
  console.log(data);
});

test("USD/PLN", async () => {
  const response = await fetch(
    "http://api.nbp.pl/api/exchangerates/rates/a/usd/"
  );
  const data: ICurrencyResponse = await response.json();
  console.log(data);
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
