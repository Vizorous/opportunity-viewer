import { useMediaQuery } from 'react-responsive'

interface IUseResponsive {
    isXS: boolean,
    isLG: boolean,
    isSmallAF: boolean
}
export const useResponsive = (): IUseResponsive => {
    const isXS: boolean = useMediaQuery({ maxWidth: 576 });
    const isLG: boolean = useMediaQuery({ maxWidth: 992 })
    const isSmallAF: boolean = useMediaQuery({ maxWidth: 361 })

    return { isXS, isLG, isSmallAF }
}
// export const useLg = (): boolean => {
//     return isLg
// }
