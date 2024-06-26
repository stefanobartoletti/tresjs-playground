export const useGreeting = (name) => {
    const greeting = `Hello ${name}!`

    const menu = useMenu()

    console.log(menu)

    return greeting
}