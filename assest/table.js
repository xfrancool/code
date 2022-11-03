const table = [
  {
    id: 1,
    title: "Aprendí a Teclear Rápido en 22 Días [Mecanografía]",
    iframe: "https://www.youtube.com/embed/gCtBGEh_WkE",
    canal: "ian Omari",
  },
  {
    id: 2,
    title:
      "⚡️⚡️⚡️Como ESCRIBIR CÓDIGO más RÁPIDO con VISUAL STUDIO CODE ⚡️⚡️⚡️ LOS MEJORES ATAJOS Y CONSEJOS",
    iframe: "https://www.youtube.com/embed/JOEMj5zL4cY",
    canal: "Flama Studio",
  },
  {
    id: 3,
    title: "Guía de Emmet + Tips y Consejos para Visual Studio Code",
    iframe: "https://www.youtube.com/embed/71XPXr7Tf-Y",
    canal: "FalconMasters",
  },
  {
    id: 4,
    title:
      "EMMET + VISUAL STUDIO CODE: 2 trucos de Emmet para escribir código HTML/CSS más rápido!",
    iframe: "https://www.youtube.com/embed/NRHLi-RROjY",
    canal: "Truzz Blogg",
  },
  {
    id: 5,
    title:
      "⚡️Como ESCRIBIR CODIGO más RÁPIDO en VSCODE (2021)⚡️ [Y AUMENTAR TU PRODUCTIVIDAD]",
    iframe: "https://www.youtube.com/embed/by5mrRE-vbY",
    canal: "Aulaideal",
  },
  {
    id: 6,
    title:
      "VScode: 7 COMANDOS SECRETOS ⚡️ nivel NINJA ⚡️ ¿Seguro que conoces todos?",
    iframe: "https://www.youtube.com/embed/Sf6ENcesVcs",
    canal: "Aulaideal",
  },
  {
    id: 7,
    title:
      "🏆Los 5 mejores TRUCOS [poco conocidos] para VSCODE usado por PROFESIONALES (2021)",
    iframe: "https://www.youtube.com/embed/ZYSUN99taBo",
    canal: "Aulaideal",
  },
  {
    id: 8,
    title: "6 errores en HTML de los programadores novatos QUE DEBES EVITAR",
    iframe: "https://www.youtube.com/embed/s23t0rQuTZ4",
    canal: "Victor Robles WEB",
  },
  {
    id: 9,
    title: "Curso JavaScript",
    iframe:
      "https://www.youtube.com/embed/videoseries?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA",
    canal: "jonmircha",
  },
  {
    id: 10,
    title: "JavasCript",
    iframe:
      "https://www.youtube.com/embed/videoseries?list=PLrAw40DbN0l0p5K-fp4hDVCjZgZIQnSSE",
    canal: "Informática DP",
  },
  {
    id: 11,
    title: "React",
    iframe:
      "https://www.youtube.com/embed/videoseries?list=PLrAw40DbN0l0Oz8t6YW710elsz5dro8ec",
    canal: "Informática DP",
  },
  {
    id: 12,
    title: "¿Qué es React JS y cómo instalarlo? | React JS Desde Cero (2021)",
    iframe:
      "https://www.youtube.com/embed/videoseries?list=PLvSctTY7FvX_gQP8IbI-zQb8oR_3E445j",
    canal: "Code Hive",
  },
  {
    id: 13,
    title: "Vue Js",
    iframe:
      "https://www.youtube.com/embed/videoseries?list=PLrAw40DbN0l2W17aGTqrcER8LvyHhw90M",
    canal: "Informática DP",
  },
  {
    id: 14,
    title: "MongoDB",
    iframe:
      "https://www.youtube.com/embed/videoseries?list=PLrAw40DbN0l1tjWT1Lg2kKxm0eHdpPrDu",
    canal: "Informática DP",
  },
  {
    id: 15,
    title: "Nodejs",
    iframe:
      "https://www.youtube.com/embed/videoseries?list=PLrAw40DbN0l3ZY24DEsp66_jllaWkJaIg",
    canal: "Informática DP",
  },
  {
    id: 16,
    title: "DataTables",
    iframe:
      "https://www.youtube.com/embed/videoseries?list=PLrAw40DbN0l3S_1o1ya45SaWiMnGqboK7",
    canal: "Informática DP",
  },
  {
    id: 17,
    title:
      "🔥 CURSO de CSS desde CERO 2021 Para principiantes (COMPLETO y GRATIS)",
    iframe:
      "https://www.youtube.com/embed/videoseries?list=PLROIqh_5RZeDbvISffzihyxzqJBt_z3-Z",
    canal: "Dorian Desings",
  },
  {
    id: 18,
    title: "Resolviendo un examen técnico frontend real y en tiempo real",
    iframe: "https://www.youtube.com/embed/2-6hEFsXMaU",
    canal: "Programación Accesible",
  },
  {
    id: 19,
    title: "Desarrollando Blog en Astro",
    iframe:
      "https://www.youtube.com/embed/videoseries?list=PLo5lAe9kQrwoHwcbkdvckGjT0JnwxhAzz",
    canal: "Fazt Code",
  },
];
function Template(table) {
  return `
 
  <button class="accordion">${table.title}</button>
  <div class="panel">
    <p>Canal: <strong class="linkclas">${table.canal}</strong> </p>
    

    <iframe id="iframeacordion"
           width="475"
           height="315"
           src="${table.iframe}"
           title="YouTube video player"
           frameborder="0"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
           allowfullscreen
           ></iframe></p>
    
   
  </div>



  `;
}
/*********Acordion********** */
document.getElementById("table").innerHTML = `
          
          ${table.map(Template).join("")}
        `;

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
