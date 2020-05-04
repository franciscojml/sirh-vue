export const originalTheme = Object.freeze({
    context: {
        'gradient': true,
        'shadow': 'lg', // 3 states: 'sm', 'lg', undefined (no shadow).
        'invertedColor': false,
    },
    colors: {
        //primary: '#3e498c',
        primary: '#31396f',
        secondary: '#384582',
        success: '#52ab48',
        info: '#3d82c5',
        danger: '#c33a38',
        warning: '#d6ad30',
        gray: '#757b82',
        dark: '#253444',
    },
})

export const corporateTheme = Object.freeze({
    context: {
        'gradient': false,
        'shadow': 'sm',
        'invertedColor': true,
    },
    colors: {
        primary: '#31396f',
        secondary: '#384582',
        success: '#52ab48',
        info: '#3d82c5',
        danger: '#c33a38',
        warning: '#d6ad30',
        gray: '#757b82',
        dark: '#253444',
    },
})
