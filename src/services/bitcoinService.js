import axios from 'axios';
// import { storageService } from './storageService';

export const bitcoinService = {
  getRate,
  getMarketPrice,
};

async function getRate(coins = 1) {
  try {
    const res = await axios.get(`
      https://blockchain.info/tobtc?currency=USD&value=${coins}
    `);
    const rate = res.data;
    return rate;
  } catch (err) {
    console.log('err', err);
    throw err;
  }
}

async function getMarketPrice() {
  try {
    let marketPrice = await axios.get(`
    https://api.blockchain.info/charts/market-price?format=json&cors=true`);
    return marketPrice.data;
  } catch (err) {
    console.log('err', err);
    throw err;
  }
}

// const { data } = await axios.get(`https://api.blockchain.info/charts/market-price`, {
//   params: {
//     timespan: '5months',
//     format: 'json',
//     cors: true,
//   },
// })

// return data
