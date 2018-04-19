// Your job is to create an object that represents a financial advisor and has the following properties and methods.

const financialAdvisor = Object.create({}, {

    // Company (enumerable, writable)
    company: {
        value: "Ramsey Solutions",
        enumerable: true,
        writable: true
    },
    // Specialty (enumerable, writable)
    speciality: {
        value: "Stock Market Trading",
        enumerable: true,
        writable: true
    },
    // Name (enumerable)
    firstName: {
        value: "Elmo",
        enumerable: true
    },
    lastName: {
        value: "McPooperton",
        enumerable: true
    },
    // Portfolio (non-enumerable) - Should display the stocks the advisor currently holds
    portfolio: {
            value: [],
            enumerable: false,
            writable: true
    },
    // Worth (enumerable, read-only)
    worth: {
        value: [],
        enumerable: true,
        writable: true
    },
    // Purchase (non-enumerable) - This method takes a stock ticker symbol, a quantity, and a price as arguments
    purchase: {
        value: function (stock, quantity, price){
            // creates object for inputs inside of a new array
           let stockPurchase =  {
                        name:  stock,
                        qty: quantity,
                        price$: price,
                    }
        // pushes them to portfolio value
        financialAdvisor.portfolio.push(stockPurchase)
        }
    },
    // Sell (non-enumerable) - This method takes a stock ticker symbol, a quantity, and a price as arguments
    
    // When sell() or purchase() are invoked, then the stock portfolio should be modified accordingly. Consider making the portfolio an object itself (if you are feeling brave, try your hand at a Map())
    
})

financialAdvisor.purchase("MMN", "56", "34")
financialAdvisor.purchase("APPLE", "2", "200")

console.log(financialAdvisor.portfolio)
