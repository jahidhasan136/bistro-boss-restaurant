import { useEffect, useState } from "react"

const useMenu = () => {
        const [menu, setMenu] = useState([])
        useEffect(()=>{
            fetch('/public/menu.json')
            .then(res => res.json())
            .then(data => {
                // const popularMenu = data.filter(items => items.category === "popular")
                setMenu(data)
            })
        },[])
        return[menu]
    }

    export default useMenu