import React, { useEffect, useState } from 'react';

const FINNHUB_API_KEY = 'd2fj2g9r01qkv5nda8cgd2fj2g9r01qkv5nda8d0';
const SYMBOLS = ['AAPL', 'GOOGL', 'AMZN', 'TSLA', 'NVDA', 'MSFT'];

const StocksTable = () => {
  const [stocks, setStocks] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchFinnhubStock = async (symbol) => {
      const [quoteRes, profileRes] = await Promise.all([
        fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${FINNHUB_API_KEY}`),
        fetch(`https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${FINNHUB_API_KEY}`),
      ]);

      if (!quoteRes.ok || !profileRes.ok) throw new Error(`Failed to fetch data for ${symbol}`);

      const quoteData = await quoteRes.json();
      const profileData = await profileRes.json();

      return {
        symbol,
        name: profileData.name || 'N/A',
        currentPrice: quoteData.c,
        openPrice: quoteData.o,
        dailyChangePercent: ((quoteData.c - quoteData.o) / quoteData.o) * 100,
      };
    };

    const fetchStocks = async () => {
      try {
        const data = await Promise.all(SYMBOLS.map(fetchFinnhubStock));
        setStocks(data);
      } catch (err) {
        console.error(err);
        setError('Unable to fetch stock data.');
      }
    };

    fetchStocks();
  }, []);

  const renderTable = () => (
    <div className="w-full">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">International Stocks</h2>
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">Symbol</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
            <th className="border border-gray-300 px-4 py-2 text-right">Current Price ($)</th>
            <th className="border border-gray-300 px-4 py-2 text-right">Open Price ($)</th>
            <th className="border border-gray-300 px-4 py-2 text-right">Daily % Change</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map(({ symbol, name, currentPrice, openPrice, dailyChangePercent }) => (
            <tr key={symbol} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2 font-semibold text-blue-600">{symbol}</td>
              <td className="border border-gray-300 px-4 py-2">{name}</td>
              <td className="border border-gray-300 px-4 py-2 text-right">${currentPrice.toFixed(2)}</td>
              <td className="border border-gray-300 px-4 py-2 text-right">${openPrice.toFixed(2)}</td>
              <td
                className={`border border-gray-300 px-4 py-2 text-right font-semibold ${
                  dailyChangePercent >= 0 ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {dailyChangePercent.toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  if (error) {
    return (
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white border border-red-300 rounded-lg shadow-md text-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <main>
      {/* Top Boxes */}
      <div className="grid grid-cols-12 gap-6 mb-10">
        <div className="border border-gray-200 rounded-xl bg-white col-span-4 h-40 p-2">box 1</div>
        <div className="border border-gray-200 rounded-xl bg-white col-span-4 h-40 p-2">box 2</div>
      </div>

      {/* Stock Table */}
      <div className="max-w-6xl mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-md">
        {stocks.length === 0 ? (
          <p className="text-center text-gray-500">Loading stock data...</p>
        ) : (
          renderTable()
        )}
      </div>
    </main>
  );
};

export default StocksTable;
