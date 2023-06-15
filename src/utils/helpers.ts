export const paragraphShortner = (p: string) => {
    let p_arr = p.split(" ")
    p_arr.splice(28,)

    return p_arr.join(" ")
}

export const formatURLString = (p: string) => {
    return p.replace("%20", " ")
}