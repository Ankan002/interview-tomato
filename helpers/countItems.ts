export const getItemsCountInCart = (cartItemsArray: Array<any>) => {
    if(cartItemsArray.length === 0) return 0
    
    let startingPoint: number = 0
    let endingPoint: number = cartItemsArray.length - 1
    let count: number | any = 0

    while(startingPoint <= endingPoint){
        count += cartItemsArray[startingPoint]?.quantity

        if(startingPoint === endingPoint){
            startingPoint++
            endingPoint--
            continue
        }

        count += cartItemsArray[endingPoint]?.quantity

        startingPoint++
        endingPoint--
    }

    return count
}