function toggleMode(){
    const html= document.documentElement
     html.classList.toggle("dark")

    const alt = document.querySelector("#profile img")

    if(html.classList.contains('dark')){
      alt.setAttribute("alt", "Foto de Gabriel no dark mode")
    } else {
      alt.setAttribute("alt", "Foto de Gabriel")
    }
}