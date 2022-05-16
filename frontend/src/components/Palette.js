import { useState } from "react"
import { useEffect } from "react"
import styles from "../styles/palette.module.css"

export function Palette() {
    const [colors, setColors] = useState({
        color1: "red",
        color2: "black",
        color3: "grey",
        color4: "green",
        color5: "blue"
    })
    const [state,setState] = useState(false)
    const handleGet = async () => {
        const res = await fetch("/color/palette", {
            method: "GET",
        })
        const json = await res.json()
        setColors(json)
    }

    const animToggle = ()=>{
        setState(true)
        setTimeout(()=>setState(false),5000)
    }
    useEffect(() => {
        window.addEventListener('keypress', handleGet)
        window.addEventListener('keypress', animToggle)
        return () => {
            window.removeEventListener('keypress', handleGet)
            window.removeEventListener('keypress', animToggle)
        }
    }, [])


    return (
        <div className={styles.window}>
            <div id={styles.one} className={!state ? styles.colored : styles.animation1} style={{ backgroundColor: colors.color1 }}></div>
            <div id={styles.two} className={!state ? styles.colored : styles.animation2} style={{ backgroundColor: colors.color2 }}></div>
            <div id={styles.three} className={!state ? styles.colored : styles.animation3} style={{ backgroundColor: colors.color3 }}></div>
            <div id={styles.four} className={!state ? styles.colored : styles.animation4} style={{ backgroundColor: colors.color4 }}></div>
            <div id={styles.five} className={!state ? styles.colored : styles.animation5} style={{ backgroundColor: colors.color5 }}></div>
            
            {/* <div id={styles.ten} test="oof" style={{ backgroundColor: colors.color3 }} className={!state ? styles.coloredTest : styles.animation}></div> */}
            
            
        </div>
    )
}