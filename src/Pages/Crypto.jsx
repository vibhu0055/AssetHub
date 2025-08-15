import React, { useEffect, useState } from 'react';
import { FaArrowUp, FaArrowDown } from "react-icons/fa";



const Crypto = () => {
    const [cryptoData, setCryptoData] = useState([]);

    useEffect(() => {
        const apik = "CG-S5ugYjDfocz9tMv7RcGWjtha";
        const params = new URLSearchParams({
            vs_currency: 'usd',
            ids: 'bitcoin,ethereum,tether,cardano,solana,ripple,polkadot,chainlink,litecoin,dogecoin,tron',
        });

        const cryptocall = async () => {
            try {
                const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?${params}`, {
                    headers: {
                        "x-cg-demo-api-key": apik
                    }
                });
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await res.json();
                console.log(data);
                setCryptoData(data);  // Update state with the fetched data
            } catch (error) {
                console.error("Error fetching data: ", error);
                // Optionally set an error state to show a user-friendly message
            }
        };

        cryptocall();

    }, []);

    return (
        <main>
            <div className="grid grid-cols-12 gap-6">
                <div className="border border-gray-200 rounded-xl bg-white col-span-4 h-40 p-2">box 1</div>
                <div className="border border-gray-200 rounded-xl bg-white col-span-4 h-40 p-2">box 2</div>
                <div className="p-2 pt-5 pb-0 col-span-12 h-12 rounded-xl flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-black">Market Data</h2>
                </div>

                <div className="border border-gray-200 rounded-xl bg-white col-span-12 h-auto pt-2 overflow-auto">
                    <table className="min-w-full table-fixed text-left">
    <thead>
        <tr className="bg-white text-gray-900">
            <th className="px-5 py-5">Assets</th>
            <th className="px-5 py-5">Current Price</th>
            <th className="px-5 py-5">24hr Change</th>
        </tr>
    </thead>
    <tbody className="text-gray-900">
        {cryptoData.length > 0 ? (
            cryptoData.map((crypto, index) => (
                <tr className="border-t border-gray-300 hover:bg-gray-100 h-16" key={index}>
                    <td className="px-4">
                        <div className="flex items-center gap-x-2">
                            <img
                                src={crypto.image || 'https://via.placeholder.com/20'}
                                className="w-5 h-5"
                                alt={`${crypto.name} logo`}
                            />
                            <span>
                                {crypto.name} <span className="text-xs text-gray-600">{crypto.symbol.toUpperCase()}</span>
                            </span>
                        </div>
                    </td>

                    <td className={`px-4 ${crypto.price_change_percentage_24h > 0 ? 'text-green-400' : 'text-red-500'}`}>
                        ${crypto.current_price}
                    </td>

                    <td className={`px-4 ${crypto.price_change_percentage_24h > 0 ? 'text-green-400' : 'text-red-500'}`}>
                        <div className="flex items-center space-x-1">
                            {crypto.price_change_percentage_24h > 0 ? (
                                <FaArrowUp className="mr-1" />
                            ) : (
                                <FaArrowDown className="mr-1" />
                            )}
                            <span>{crypto.price_change_percentage_24h.toFixed(2)}%</span>
                        </div>
                    </td>
                </tr>
            ))
        ) : (
            <tr>
                <td colSpan="3" className="text-center p-4">Loading...</td>
            </tr>
        )}
    </tbody>
</table>



                </div>
            </div>
        </main>
    );
};

export default Crypto;



