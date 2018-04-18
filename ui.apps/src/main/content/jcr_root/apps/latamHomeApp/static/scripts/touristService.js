app.dest={
  cats_info : [
    {color : "#666666",name : "Precio",icono:"", rates:"true"},
    {color : "#77d4a5",name : "Atracciones",icono:"icon-pantheon"},
    {color : "#7362a2",name : "Gastronomía",icono:"icon-cutlery"},
    {color : "#df206d",name : "Compras",icono:"icon-bag"},
    {color : "#0f6cef",name : "Vida Nocturna",icono:"icon-drink"}
  ],
  dest_info : {
    type : "description",
    title : "lorem ipsum dolom ipsum",
    description : "Conocida mundialmente como \"Ciudad Maravillosa\" inmortalizado por canciones que hablan de sus playas, chicas y amores, Rio de Janeiro se prepara para acoger el mayor evento deportivo del mundo, los Juegos Olímpicos de 2016. Mientras las obras ocupan lugares importantes entre el mar y las colinas, puntos importantes como el Pan de Azúcar y el barrio de Santa Teresa y el nuevo Museo de Arte do Rio siguen siendo los preferidos de los turistas.",
    languages : ["Portugués"],
    currency : "Real",
    events : ["Carnaval (FEB)", "Año nuevo (DIC)"],
    location : { lat : "-22.9059147",lon : "-43.4493603"},
    links : [{text : "rioguiaoficial.com.br",url : "http://rioguiaoficial.com.br"}, {text : "rio2016.com",url : "http://rio2016.com"},{text : "rio450anos.com.br",url : "http://rio450anos.com.br"}]
  },
  rates_info: [
    // Free Text
    {
      type: 'free-text',
      category: "Atracciones",
      expandable: false,
      content: '<h2>Ofertas en Vuelos a Cancún</h2><p>Famoso destino vacacional, <strong>Cancún</strong> es un paraíso lleno de playas celestiales y diversión por donde lo mires. Ubicado en el sureste mexicano, ofrece a sus visitantes una variedad de atracciones para todos los gustos y edades. Nada con delfines en Dolphinaris, el contacto con estos animales será una experiencia que te acordaras por siempre. Vuela de Lima a Cancún y sorpréndete de la diversa flora y fauna que ofrece este paraíso de México.</p>',
      buttons:[
        {
          level: 'third',
          size: 'small',
          text: 'Leer más',
          link: "http://google.com",
          target: "_blank"
        },
        {
          level: 'third',
          size: 'small',
          text: 'Imprime ésto',
          link: "http://google.com"
        }
      ]
    },
    // Descuento
    {
      type: "discount",
      amount: 10, // porcentaje
      principal_text: "¡10% de descuento en el checkout en vuelos domésticos dentro de Ecuador!",
      description: "<p>10% discount is valid for travel within Ecuador with LAN Airlines in Economy class and must be purchased by September 30, 2015. Offers valid for new bookings. Discount will be apply on checkout (Step 3). <a href=\"#\">Optional Services and Fees</a>. Other restrictions may apply.</p>",
      button: {
        text: 'Comprar',
        link: "http://google.com",
        target: "_blank"
      }
    },
    // tarifa
    {
      type: "rate",
      rate_id: 26
    },
    // Free Text
    {
      type: "free-text",
      expandable: true,
      content: "<h2>Para Recordar</h2><p>En un lugar de la <strong>Mancha</strong>, de cuyo <i>nombre</i> no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que carnero, salpicón las más noches, duelos y quebrantos los sábados, lantejas los viernes, algún palomino de añadidura los domingos, consumían las tres partes de su hacienda. El resto della concluían sayo de velarte, calzas de velludo para las fiestas, con sus pantuflos de lo mesmo, y los días de entresemana se honraba con su vellorí de lo más fino. Tenía en su casa una ama que pasaba de los cuarenta, y una sobrina que no llegaba a los veinte, y un mozo de campo y plaza, que así ensillaba el rocín como tomaba la podadera. Frisaba la edad de nuestro hidalgo con los cincuenta años;</p>",
      buttons:[
        {
          level: 'third',
          size: 'small',
          text: 'Leer más',
          link: "http://google.com",
          target: "_blank"
        },
        {
          level: 'third',
          size: 'small',
          text: 'Imprime ésto',
          link: "http://google.com"
        },
        {
          level: 'third',
          size: 'small',
          icon: 'icon-print', // la alineación por defecto del icono es a la izquierda
          text: 'This shouldn\'t be shown',
          link: "http://google.com"
        }
      ]
    },
    // Descuento
    {
      type: "discount",
      amount: 15, // porcentaje
      image:{
        path: "http://dummyimage.com/300x120/aaa/fff.png",
        alt: "15% de descuento en Ecuador"
      },
      principal_text: "¡15% de descuento en el checkout en vuelos domésticos dentro de Ecuador!",
      description: "",
      button: {
        text: 'Comprar',
        link: "http://google.com",
        target: "_blank"
      }
    }
  ],
  cards_info : [
    {
      type : "information",
      category: "Gastronomía",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Vida Nocturna",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Atracciones",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Atracciones",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Gastronomía",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Vida Nocturna",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Compras",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Vida Nocturna",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "image",
      category: "Compras",
      multimedia :[
        {
          src : "http://dummyimage.com/300x275/ccc/fff.png",
          alt : "imageAlt"
        },
        {
          src : "http://dummyimage.com/300x275/ccc/fff.png",
          alt : "imageAlt"
        },
        {
          src : "http://dummyimage.com/300x275/ccc/fff.png",
          alt : "imageAlt"
        }
      ]
    },
    {
      type : "information",
      category: "Vida Nocturna",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Compras",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Vida Nocturna",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Atracciones",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Vida Nocturna",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Compras",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "video",
      category: "Vida Nocturna",
      description: "NavigationArts Director of Information Architecture, Kelley McDonald, discusses how to engage site visitors through effective site structure and relevant content.",
      multimedia : {
        youtube : "https://www.youtube.com/watch?v=qbToDF1M7j0",
        thumbnail: "/static/latam/images/content-image/subhome/VitrinaRio640x400.png"
      },
      destination_name:"Australia",
      place_name :"Sydney",
      destination_link : "http://www.sidney.com"
    },
    {
      type : "information",
      category: "Compras",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Vida Nocturna",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Compras",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Gastronomía",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Gastronomía",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Vida Nocturna",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Compras",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Vida Nocturna",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Gastronomía",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Atracciones",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Vida Nocturna",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Gastronomía",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Compras",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Gastronomía",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Compras",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Vida Nocturna",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Compras",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Vida Nocturna",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Gastronomía",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Compras",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Atracciones",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Compras",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Vida Nocturna",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Compras",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Gastronomía",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Vida Nocturna",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Compras",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Gastronomía",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Vida Nocturna",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Gastronomía",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Vida Nocturna",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Compras",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Vida Nocturna",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Gastronomía",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Compras",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Atracciones",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Vida Nocturna",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Vida Nocturna",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Compras",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Gastronomía",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Compras",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Atracciones",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Vida Nocturna",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Compras",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Gastronomía",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Compras",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Atracciones",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Gastronomía",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Atracciones",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Compras",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "video",
      category: "Vida Nocturna",
      description: "NavigationArts Director of Information Architecture, Kelley McDonald, discusses how to engage site visitors through effective site structure and relevant content.",
      multimedia : {
        youtube : "https://www.youtube.com/watch?v=qbToDF1M7j0",
        thumbnail: "/static/latam/images/content-image/subhome/VitrinaRio640x400.png"
      },
      destination_name:"Australia",
      place_name :"Sydney",
      destination_link : ""
    },
    {
      type : "information",
      category: "Gastronomía",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Compras",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Atracciones",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Gastronomía",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Compras",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Gastronomía",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Atracciones",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Compras",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Vida Nocturna",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Atracciones",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Vida Nocturna",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Atracciones",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Compras",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Gastronomía",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Compras",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Gastronomía",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Gastronomía",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Atracciones",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Vida Nocturna",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Atracciones",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Compras",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Gastronomía",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    },
    {
      type : "information",
      category: "Atracciones",
      place_name : "Bar Constitución",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      links : [
        {
          text : "www.barlaferia.com",
          url : "http://www.barlaferia.com"
        },
        {
          text : "www.atacamasanpedro.com",
          url : "http://www.atacamasanpedro.com"
        }
      ],
      tels :[
        "(+56 2) 124567454"
      ],
      tags:[
        "Wifi","Transporte","Vino","Gourmet"
      ]
    }
  ]
};
