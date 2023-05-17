import { useEffect } from "react"

const useTitle = title=>{
    useEffect(()=>{
        document.title= (`Toy Zoon-${title}`)
    },[title])
}

export default useTitle