module.exports = function makeExchange(currency) {
    let changedCurrency = {};
    if (currency<1) return changedCurrency;
    if (currency>10000) 
    return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    letters='HQDNP';
    coins=[50,25,10,5,1];
    for (let i=0; i<5; i++) {
        if (currency/coins[i]>=1){
            changedCurrency[letters[i]] = Math.floor(currency/coins[i]);
            currency-=(coins[i]*changedCurrency[letters[i]]);
        }
    }
    return changedCurrency;
}
