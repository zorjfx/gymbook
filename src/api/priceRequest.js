export default async function getPrice(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data.price;
}

