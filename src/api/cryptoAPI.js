async function makeAPIRequest(url) {
    const response = await fetch(url);
    return await response.json();
}


export async function getPrice(ticker) {
    const data = await makeAPIRequest(`https://api.binance.com/api/v3/ticker/price?symbol=${ticker}`);
    return data.price;
}

export async function getCryptoPairs() {
    return await makeAPIRequest('https://api.binance.com/api/v3/ticker/price');
}