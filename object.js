// Your job is to create an object that represents a financial advisor and has the following properties and methods.

const elmoPoop = Object.create({}, {

    // Company (enumerable, writable)
    company: {
        value: "Sesame Poop Holdings",
        enumerable: true,
        writable: true
    },
    // Specialty (enumerable, writable)
    speciality: {
        value: "Poops and Giggles",
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
    // Worth (enumerable, read-only), looks at portfolio and if it is a purchase adds to total worth
    // looks at solds and decreases from total worth - returns current worth
    worth: {
        value: function(){           
            let totalWorth = 0

            this.portfolio.forEach(transaction => {
                if(transaction.purchase){
                    totalWorth += transaction.quantity * transaction.price
                } else {
                    totalWorth -= transaction.quantity * transaction.price
                }
            })

            // old unnecessary code that used a for loop instead of forEach
            // let purchased = this.portfolio.filter(transType => transType.purchase === true)
            //     for(let i = 0; i < purchased.length; i ++) {
            //         const itemsOfPurchased = purchased[i]
            //         // for purchases mutliply qty by price$
            //          const qtyOfPurchase = itemsOfPurchased.quantity * itemsOfPurchased.price
            //          totalWorth += qtyOfPurchase 
            //         }
            // let stockSold = this.portfolio.filter(transType => transType.purchase === false)
            //     for(let i =0; i< stockSold.length; i ++) {
            //         const itemsOfSold = stockSold[i]
            //         // for sold mutliply qty by price$
            //         const qtyOfSold = itemsOfSold.quantity * itemsOfSold.price
            //         totalWorth -= qtyOfSold
            //     }
                    return totalWorth
            
        },
        enumerable: false,
        
    },
    // Purchase (non-enumerable) - This method takes a stock ticker symbol, a quantity, and a price as arguments 
    // and adds purchased stocks to the portfolio
    purchase: {
        value: function (stock, quantity, price){
            // creates object for inputs inside of a new array
           let stockPurchase =  {
                        stock,
                        quantity,
                        price,
                        purchase: true
                    }
        // pushes them to portfolio value
        this.portfolio.push(stockPurchase)
        },
        enumerable: false
    },
    // Sell (non-enumerable) - This method takes a stock ticker symbol, a quantity, and a price as arguments
    // and adds sold stocks to the portfolio
    sell: {
        value: function (stock, quantity, price){
        // creates object for inputs inside of a new array
                        let stockSell=  {
                            stock,
                            quantity,
                            price,
                            purchase: false
                        }
                // pushes them to portfolio value
                this.portfolio.push(stockSell)
                },
        enumerable: false
            }

    })
    