export const isItemInCart = (cartItems: Array<any>, itemId: number | Number) => {
    if(cartItems.length === 0) return false

    let startingPoint: number = 0
    let endingPoint: number = cartItems.length - 1

    while(startingPoint <= endingPoint){
        if(cartItems[startingPoint].id === itemId || cartItems[endingPoint].id === itemId) return true

        startingPoint++
        endingPoint--
    }

    return false
}