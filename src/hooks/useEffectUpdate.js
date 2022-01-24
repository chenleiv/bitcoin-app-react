import { useEffect, useRef } from "react"

export const useEffectUpdate = (cb, dependencies) => {

    const isMounting = useRef(true)
    console.log('useEffectUpdate -> isMounting', isMounting)
    useEffect(() => {

        if (isMounting.current){
            isMounting.current = false
            return
        }
        cb()

    }, dependencies)

}