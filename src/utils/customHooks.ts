import { useMediaQuery } from 'react-responsive'

interface IUseResponsive {
    isXS: boolean,
    isLG: boolean
}
export const useResponsive = (): IUseResponsive => {
    const isXS: boolean = useMediaQuery({ maxWidth: 576 });
    const isLG: boolean = useMediaQuery({ maxWidth: 992 })
    return { isXS, isLG }
}
// export const useLg = (): boolean => {
//     return isLg
// }
