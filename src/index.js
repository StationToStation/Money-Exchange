module.exports = function makeExchange(currency) {
        let changedCurrency = {};
    if (currency<1) return changedCurrency;
    if (currency>10000) 
    return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    if(Math.floor(currency/50)!=0){
        changedCurrency.H = Math.floor(currency/50);
        currency-=(50*changedCurrency.H);
    }
    if (Math.floor(currency/25)!=0){
        changedCurrency.Q = Math.floor(currency/25);
        currency-=(25*changedCurrency.Q);
    }
    if (Math.floor(currency/10)!=0){
        changedCurrency.D = Math.floor(currency/10);
        currency-=(10*changedCurrency.D);
    }
    if (Math.floor(currency/5)!=0){
        changedCurrency.N = Math.floor(currency/5);
        currency-=(5*changedCurrency.N);
    }
    if (currency!=0){
    changedCurrency.P=currency;
    }
    return changedCurrency;
}
