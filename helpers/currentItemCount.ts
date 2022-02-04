export const getCurrentItemCount = (cartItems: Array<any>, itemId: number | Number) => {
    let startingPoint: number = 0
    let endingPoint: number = cartItems.length - 1

    while(startingPoint <= endingPoint){
        if(cartItems[startingPoint].id === itemId) return cartItems[startingPoint]?.quantity

        if(cartItems[endingPoint].id === itemId) return cartItems[endingPoint]?.quantity

        startingPoint++
        endingPoint--
    }

    return 0
}