// Datos demo para el paquete básico de boda

/**
 * Ceremonia
Iglesia santa maria de la asunción acajete puebla 
Hora de misa 11:00am.
Fiesta o recepción en Atoyatempan puebla 
Comida de 2:00pm a 5:00pm 
Calle nacional  num 512 int.2

Papas del novio 
Bonifacio Bautista de la luz
Edith Serrano Nolasco

Papas de la novia 
Leopoldo juarez Morales
Claudia Hernandez Sanchez
 */

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
        father: "Leopoldo Juarez Morales",
        mother: "Claudia Hernandez Sanchez"
      },
      groomParents: {
        father: "Bonifacio Bautista de la Luz",
        mother: "Edith Serrano Nolasco"
      }
    },
    //Alberto Bautista y Cristina Ramirez
    padrinos: {
      father: "Alberto Bautista",
      mother: "Cristina Ramirez"
    },
    date: {
      full: "Sábado 8 de Noviembre 2025",
      day: "Sábado",
      date: "8 de Noviembre 2025"
    },
    ceremony: {
      time: "11:00 hrs.",
      venue: "Iglesia De Santa Maria De La Asuncion Acajete Puebla.",
      address: "75110, Acajete, Pue.",
      type: "Misa de Matrimonio",
      ubiLink: "https://maps.app.goo.gl/zqDTC6QkYkHydUUg7"
    },
    party: {
      time: "14:00 hrs.",
      venue: "Atoyatempan, Pue.",
      address: "Av. Nacional 512 int-2, Aldama, 75620 Atoyatempan, Pue.",
      type: "Recepción",
      ubiLink: "https://maps.app.goo.gl/UhfXoMW8ZkYyYHfi7"
    },
    dressCode: "Formal",
    restrictions: "No Niños"
  },

  countdown: {
    targetDate: "November 8, 2025 11:00:00",
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