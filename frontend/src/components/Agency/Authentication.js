export const Authentication = () => {
    const token = localStorage.getItem('token')

    if(token) return true
    if(!token) return false
}

