export const moneyFormatter = (num) => {
    return num.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}