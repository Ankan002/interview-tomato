export const getTotalPrice = (cartItems: Array<any>) => {
    if(cartItems.length === 0) return 0

    let startingPoint: number = 0
    let endingPoint: number = cartItems.length - 1
    let totalPrice: number = 0

    while(startingPoint <= endingPoint){
        totalPrice += cartItems[startingPoint]?.price * cartItems[startingPoint]?.quantity

        if(startingPoint === endingPoint){
            startingPoint++
            endingPoint--
            continue
        }

        totalPrice += cartItems[endingPoint]?.price * cartItems[endingPoint]?.quantity

        startingPoint++
        endingPoint--
    }

    return totalPrice
}