// @ts-nocheck
import muiShadows from '@mui/material/styles/shadows.js';
import iconClasses from "@mui/material/Icon/iconClasses.js";

const shadows = muiShadows.map((v, k) => {
    if(k === 1) return '0 0 #0000, 0 0 #0000, 0 3px 10px 0 rgb(48 46 56/6%)'
    return v
})

const sizeFactor = 16.654/100

export default {
    typography: {
        fontFamily: ['Poppins', 'Inter var', 'Roboto', '"Helvetica"', 'Arial', 'sans-serif'].join(','),
        htmlFontSize: 10,
        fontSize: 15,
        body1: {
            fontSize: '1.5rem',
        },
        body2: {
            fontSize: '1.5rem',
        },
    },
    shape: {
        borderRadius: 8
    },
    shadows,
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: false,
            },
        },
        MuiButton: {
            defaultProps: {
                variant: 'text',
                color: 'inherit',
            },
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
                sizeMedium: {
                    borderRadius: 8,
                    height: 38,
                    minHeight: 38,
                    maxHeight: 38,
                },
                sizeSmall: {
                    borderRadius: 8,
                },
                sizeLarge: {
                    borderRadius: 12,
                },
                contained: {
                    boxShadow: 'none',
                    '&:hover, &:focus': {
                        boxShadow: 'none',
                    },
                },
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                },
                rounded: ({theme}) => ({
                    borderRadius: theme.shape.borderRadius
                })
            },
        },
        MuiCardContent: {
            styleOverrides: {
                root: ({theme}) => ({
                    // padding: 20,
                    // [theme.breakpoints.down('md')]: {
                    //     padding: 16,
                    // },
                    //
                    // '&:last-child': {
                    //     paddingBottom: 20,
                    //     [theme.breakpoints.down('md')]: {
                    //         padding: 16,
                    //     },
                    // }
                }),
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                standard: ({ownerState}) => ({
                    ...(ownerState.shrink && {
                        transform: 'translate(0, -1.5px) scale(0.85)',
                    }),
                }),
                outlined: ({ownerState}) => ({
                    ...(ownerState.shrink && {
                        transform: 'translate(14px, -9px) scale(0.85)',
                    }),
                }),
                filled: ({ownerState}) => ({
                    ...(ownerState.shrink && {
                        transform: 'translate(12px, 7px) scale(0.85)',
                        ...(ownerState.size === 'small' && {
                            transform: 'translate(12px, 4px) scale(0.85)',
                        }),
                    }),
                }),
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: ({theme}) => ({
                    [`& span.${iconClasses.fontSizeInherit}`]: {
                        fontSize: theme.typography.pxToRem(24*(1 - sizeFactor)),
                        width: theme.typography.pxToRem(24),
                        height: theme.typography.pxToRem(24),
                    }
                }),
                sizeSmall: ({theme}) => ({
                    [`& span.${iconClasses.fontSizeInherit}`]: {
                        fontSize: theme.typography.pxToRem(18*(1 - sizeFactor)),
                        width: theme.typography.pxToRem(18),
                        height: theme.typography.pxToRem(18),
                    }
                }),
                sizeLarge: ({theme}) => ({
                    [`& span.${iconClasses.fontSizeInherit}`]: {
                        fontSize: theme.typography.pxToRem(28*(1 - sizeFactor)),
                        width: theme.typography.pxToRem(28),
                        height: theme.typography.pxToRem(28),
                    }
                }),
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    minHeight: 43,
                    lineHeight: 1,
                },
            },
        },
        FuseTextField: {
            defaultProps: {
                floatingLabel: false
            },
        },
        FuseTooltip: {
            defaultProps: {

            },
            styleOverrides: {
                root: {
                    color: 'red',
                    fontSize: 20
                },
            },
        }
    }
}