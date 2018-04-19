// Your job is to create an object that represents a financial advisor and has the following properties and methods.

const elmoPoop = Object.create({}, {

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
    // Portfolio (non-enumerable) - Should display the stocks the advisor currently holds, and what has been sold
    portfolio: {
            value: [],
            enumerable: false,
            writable: true
    },
   // Worth (enumerable, read-only)
   worth: {
    value: function(){           
        let purchased = elmoPoop.portfolio.filter(transType => transType.trans === "purchase")
            for (let i = 0; i < purchased.length; i ++) {
                const itemsOfPurchased = purchased[i]
                 const qtyOfPurchase = itemsOfPurchased.qty 
                
                
                
                 
            }
        let stockSold = elmoPoop.portfolio.filter(transType => transType.trans === "sold")
        
        
        let totalWorth = 0
        // for purchases mutliply qty by price$
        
    },
    enumerable: false,
    // Purchase (non-enumerable) - This method takes a stock ticker symbol, a quantity, and a price as arguments 
    // and adds purchased stocks to the portfolio
    purchase: {
        value: function (stock, quantity, price){
            // creates object for inputs inside of a new array
           let stockPurchase =  {
                        name:  stock,
                        qty: quantity,
                        price$: price,
                        trans: "purchase"
                    }
        // pushes them to portfolio value
        elmoPoop.portfolio.push(stockPurchase)
        },
        enumerable: false
    },
    // Sell (non-enumerable) - This method takes a stock ticker symbol, a quantity, and a price as arguments
    // and adds sold stocks to the portfolio
    sell: {
        value: function (stock, quantity, price){
        // creates object for inputs inside of a new array
                        let stockSell=  {
                            name:  stock,
                            qty: quantity,
                            price$: price,
                            trans: "sold"
                        }
                // pushes them to portfolio value
                elmoPoop.portfolio.push(stockSell)
                },
        enumerable: false
            }

    })
    // When sell() or purchase() are invoked, then the stock portfolio should be modified accordingly. Consider making the portfolio an object itself (if you are feeling brave, try your hand at a Map())
    

