// Purchase (non-enumerable) - This method takes a stock ticker symbol, a quantity, and a price as arguments
    // and adds them to portfolio as purchased transaction

elmoPoop.purchase("MMN", "56", "34")
elmoPoop.purchase("APPLE", "2", "200")
elmoPoop.purchase("GOOG", "5", "500")

// Sell (non-enumerable) - This method takes a stock ticker symbol, a quantity, and a price as arguments
    // and adds them to portfolio as sold transaction
elmoPoop.sell("MMN", "56", "20")
elmoPoop.sell("APPLE", "1", "500")

// See whats in financial advisor portfolio currently
console.log(elmoPoop.portfolio)

console.log(elmoPoop.worth())