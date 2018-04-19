// Your job is to create an object that represents a financial advisor and has the following properties and methods.

const financialAdvisor = ({}, {

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
    // Portfolio (non-enumerable) - Should display the stocks the advisor currently holds
    portfolio: {
        value: ["MMH", "EBUI", "NSSI"],
        enumerable: false
    },
    // Worth (enumerable, read-only)
    worth: {
        value: "$500,000.50",
        enumerable: true,
    },
    // Purchase (non-enumerable) - This method takes a stock ticker symbol, a quantity, and a price as arguments
    
    // Sell (non-enumerable) - This method takes a stock ticker symbol, a quantity, and a price as arguments
    // When sell() or purchase() are invoked, then the stock portfolio should be modified accordingly. Consider making the portfolio an object itself (if you are feeling brave, try your hand at a Map())
    
})
