const productos =
[
    {
        "nombre": "Shameik Moore",
        "descripcion": "Actor de doblaje de Miles Morales",
        "tierra": "de la Tierra-1610",
        "img": "Actor_Miles.jpg",
        "wikipedia": "https://es.wikipedia.org/wiki/Shameik_Moore"
    },
    {
        "nombre": "Hailee Steinfeld",
        "descripcion": "Actriz de doblaje de Gwen Stacy",
        "tierra": "de la Tierra-65",
        "img": "Gwen_Stacy.jpg",
        "wikipedia": "https://es.wikipedia.org/wiki/Hailee_Steinfeld"
    },
    {
        "nombre": "Oscar Isaac",
        "descripcion": "Actor de doblaje de Miguel O'Hara",
        "tierra": "de la Tierra-928",
        "img": "Miguel_OHara.jpg",
        "wikipedia": "https://es.wikipedia.org/wiki/Oscar_Isaac"
    },
    {
        "nombre": "Karan Soni",
        "descripcion": "Actor de doblaje de Pavitr Prabhakar",
        "tierra": "de la Tierra-50101",
        "img": "Pavitr_Prabhakar.jpg",
        "wikipedia": "https://es.wikipedia.org/wiki/Karan_Soni"
    },
    {
        "nombre": "Daniel Kaluuya",
        "descripcion": "Actor de doblaje de Hobbie Brown",
        "tierra": "de la Tierra-138",
        "img": "Hobbie_Brown.jpg",
        "wikipedia": "https://es.wikipedia.org/wiki/Daniel_Kaluuya"
    },
    {
        "nombre": "Jake Johnson",
        "descripcion": "Actor de doblaje de Peter B. Parker",
        "tierra": "de la Tierra-616B",
        "img": "Peter_B_Parker.jpg",
        "wikipedia": "https://es.wikipedia.org/wiki/Jake_Johnson_(actor)"
    }
];


function mostrarProductos(productos) {
    let html = "";
    productos.forEach(prod => {
      html += `
        <div class="producto-item">
          <h2 class="titulo">${prod.nombre}</h2>
          <img class="prod-img" src="./productos/${prod.img}" alt="${prod.nombre}">
          <p>${prod.descripcion}</p>
          <p>${prod.tierra}</p>
          <a href="${prod.wikipedia}"target="_blank" class="btn-saber-mas">Saber más</a>
        </div>
      `;        
    });
  
    let prodsContainer = document.getElementById("productos-container");
    prodsContainer.innerHTML = html;
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    mostrarProductos(productos);
  });
  