function toggleMode() {
  //dentro do comento eu acesso minha tag html
  const html = document.documentElement

  html.classList.toggle("light")
  //o toggle tem a logica semelhante a condiçao/logica a baixo, se tiver o 'light' ele tira e se não tiver ele coloca!

  /*
  if (html.classList.contains("light")) {  // se no html as listas de classes, estiver'light'
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  */

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode , adicionar img light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "retrado de gabriel sorrindo com o fundo amarelo")
  } else {
    //se tiver sem light mode, manter a img normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
