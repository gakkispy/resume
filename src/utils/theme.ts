const theme = {
    primary: '#48D1CC',
    black: '#333',
    white: '#fff'
}
export enum Theme {
    COlORFUL = 'colorful',
    BLACK = 'black',

}
export default {
    [Theme.COlORFUL]: {
        '--background-color': theme.primary,
        '--color': theme.white,
        '--border-color': theme.primary,
    },
    [Theme.BLACK]: {
        '--background-color': theme.white,
        '--color': theme.black,
        '--border-color': theme.black,
    }
}