// TODOS OS LINKS ABREM EM OUTRA ABA
let links = document.querySelectorAll(".link");
links.forEach(function (link) {
  link.setAttribute("target", "_blank");
});

// repetir header e footer caso faca novas paginas
const header = document.querySelector("header");
const footer = document.querySelector("footer");
header.innerHTML = `
<div class="header-conteudo">
<a href="index.html" id="logo" class="cor-1 font2-bold-Pg">Cube<span class="cor-1 font1-normal-Pp">.dev</span></a>

<nav id="nav">
  <button aria-label="Abrir Menu" id="btn-mobile" aria-haspopup="true" aria-controls="menu" aria-expanded="false">
    <span id="hamburger"></span>
  </button>

  <ul id="menu" role="list">
    <li role="listitem"><a href="#sobre">About</a></li>
    <li role="listitem"><a href="#experiencia">Experience</a></li>
    <li role="listitem"><a href="#projetos">Projects</a></li>
    <li role="listitem"><a href="#contato">Contact</a></li>
  </ul>
</nav>
</div>
`;
footer.innerHTML = `
<div class="footer-container">
<div class="btn-top" onclick="scrollToTop()" id="btn-topo">
<p class="cor-4 font1-normal-Pp">Voltar ao Topo <img src="./Assets/icons/arrow-up.svg" alt="seta pra cima" width="20px" height="20px"></p>
</div>
<div class="footer-conteudo">
  <p class="cor-4">CubeElement © Todos os direitos reservados.</p>
</div>
</div> <!-- FIM FOOTER CONTAINER -->
`;

// VOLTAR AO TOPO NO FOOTER
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
window.addEventListener("scroll", function () {
  let scrollTopBtn = document.getElementById("btn-topo");
  if (window.scrollY > 700) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

// BAIXAR CURRICULO
function downloadResume() {
  const resumeUrl = "Assets/docs/CV_Joao_Santos.pdf";

  // elemento de link para o download
  const cv = document.createElement("a");
  cv.href = resumeUrl;
  cv.target = "_blank";
  cv.download = "Curriculo 2023 - Joao Santos.pdf"; // Nome do arquivo

  cv.click();
}
const downloadButton = document.getElementById("downloadButton");
downloadButton.addEventListener("click", downloadResume);

// MENU MOBILE HAMBURGER
const btnMobile = document.getElementById("btn-mobile");
function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}
btnMobile.addEventListener("click", toggleMenu, { passive: true });
btnMobile.addEventListener("touchstart", toggleMenu, { passive: false });

// ANIMACAO DE ESCREVER NA INTRODUCAO
function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = "";
  textoArray.forEach((letra, i) => {
    setTimeout(() => (elemento.innerHTML += letra), 100 * i);
  });
}
const titulo = document.querySelector("h1");
typeWriter(titulo);

// TOOLTIP
const imagem = document.getElementById("main-image");
const tooltip = document.getElementById("tooltip");

// MOUSE SEGUIR MOUSEMOVE OU OVER
imagem.addEventListener("mousemove", (event) => {
  tooltip.textContent = "Curto estilo Van Gogh";

  // posição do tooltip
  tooltip.style.left = `${event.clientX}px`;
  tooltip.style.top = `${event.clientY}px`;
  tooltip.style.display = "block";
});
// MOUSE SAI DO ELEMENTO
imagem.addEventListener("mouseout", () => {
  tooltip.style.display = "none";
});

//ANIMACAO DE IR APARECENDO OS ITENS
// MOVE DA ESQUERDA PRA DIREITA
const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show_left");
    } else {
      entry.target.classList.remove("show_left");
    }
  });
});
const elements = document.querySelectorAll(".animated_left");
elements.forEach((element) => myObserver.observe(element));

// MOVE DE BAIXO PRA CIMA
const myObserver2 = new IntersectionObserver((entries2) => {
  entries2.forEach((entry2) => {
    if (entry2.isIntersecting) {
      entry2.target.classList.add("show_right");
    } else {
      entry2.target.classList.remove("show_right");
    }
  });
});
const elements2 = document.querySelectorAll(".animated_right");
elements2.forEach((element) => myObserver2.observe(element));
