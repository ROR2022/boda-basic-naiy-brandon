// Datos demo para el paquete básico de boda
export const basicDemoData = {
  hero: {
    name: "Naiy & Brandon",
    subtitle: "¡Nos Casamos!",
    backgroundImage: "/images/giselleFernando1.jpg"
  },
  
  event: {
    celebrants: {
      bride: "Naiy Serrano Chávez",
      groom: "Brandon López Torres"
    },
    parents: {
      brideParents: {
        father: "Felipe Serrano García",
        mother: "María Dolores Chávez Garfias"
      },
      groomParents: {
        father: "Policarpo López Alonso",
        mother: "Lucrecia Torres Salinas"
      }
    },
    padrinos: {
      father: "Bonifacio Romero Linares",
      mother: "Matilde Josefina López Alonso"
    },
    date: {
      full: "Sábado 4 de Octubre 2025",
      day: "Sábado",
      date: "4 de Octubre 2025"
    },
    ceremony: {
      time: "12:00 hrs.",
      venue: "Parroquia de San Francisco De Asís",
      address: "And. Vista Hermosa Manzana 019, INFONAVIT San Francisco, 52176 San Salvador Tizatlalli, Méx.",
      type: "Misa de Matrimonio",
      ubiLink: "https://maps.app.goo.gl/NXmbEKR9Y49VEG5Q7"
    },
    party: {
      time: "15:30 hrs.",
      venue: "Salon FABELA",
      address: "Manzana 001, Isidro Fabela, 52004 Col. Isidro Fabela, Méx.",
      type: "Recepción",
      ubiLink: "https://maps.app.goo.gl/im4sayd1shRqhP3a7"
    },
    dressCode: "Formal",
    restrictions: "No Niños"
  },

  countdown: {
    targetDate: "October 4, 2025 12:00:00",
    backgroundImage: "/images/countdown-bg.jpg"
  },

  attendance: {
    title: "CONFIRMACIÓN DE ASISTENCIA",
    message: "Respetuosamente <No Niños>",
    subtitle: "Esperamos que no sea impedimento para que puedan acompañarnos en este día tan especial.",
    fields: {
      name: "Nombre completo",
      response: "¿Podrás acompañarnos?",
      companions: "Nombre(s) de acompañante(s)",
      phone: "Número de celular",
      responseOptions: {
        yes: "¡Claro, ahí estaré!",
        no: "Lo siento, no podré asistir."
      }
    }
  },

  gifts: {
    title: "OPCIONES DE REGALO",
    message: "Su presencia es nuestro mejor regalo, pero si desean obsequiarnos algo, pueden considerar las siguientes opciones:",
    options: [
      {
        icon: "💳",
        title: "Transferencia Bancaria",
        description: "BBVA Bancomer",
        details: "Cuenta: 1234567890\nCLABE: 012345678901234567\nA nombre de: Ana Lucía Martínez Rodríguez"
      },
      {
        icon: "🎁",
        title: "Mesa de Regalos",
        description: "Liverpool",
        details: "Evento: Boda Ana & Carlos\nCódigo: 51234567"
      },
      {
        icon: "💰",
        title: "Sobre con efectivo",
        description: "El día del evento",
        details: "Pueden entregarlo en la recepción"
      }
    ]
  },

  demo: {
    badge: "🎭 DEMO - Paquete Básico ($299)",
    description: "Esta es una demostración del paquete básico",
    features: [
      "Cuenta Regresiva",
      "Cuándo y dónde", 
      "Confirmación de asistencia",
      "Opciones de regalo",
      "Código de vestimenta"
    ],
    cta: {
      title: "¿Te gusta este paquete?",
      subtitle: "Incluye todas las características esenciales para tu boda",
      buttonText: "Contratar Paquete Básico - $299",
      link: "/#pricing"
    }
  }
}

export type BasicDemoData = typeof basicDemoData 