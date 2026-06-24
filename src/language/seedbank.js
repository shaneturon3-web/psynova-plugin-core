export const seedbank = {
  locales: {
    en: {
      navigation: {
        home: "Home",
        capabilities: "Capabilities",
        "operating-map": "Operating Map",
        organizations: "Organizations",
        organization: "Organization",
        diagnostic: "Diagnostic",
        contact: "Contact",
      },

      hero: {
        brand: "PSYNOVA",
        title: "Professional Practice Infrastructure",
        subtitle: "Public presence, intake, communication, routing, and operational infrastructure for professional practices.",
        primaryCta: "View operating map",
        secondaryCta: "Define practice shape",
      },

      operatingMap: {
        title: "Operating Map",
        practiceInterface: { title: "Practice Interface", status: "Mapped" },
        capabilitySet: { title: "Capability Set", status: "Mapped" },
        organizationShape: { title: "Organization Shape", status: "Mapped" },
        deploymentShape: { title: "Deployment Shape", status: "Mapped" },
      },

      firstUsefulStep: {
        eyebrow: "FIRST USEFUL STEP",
        title: "How do we begin without overcommitting?",
        body: "First, we identify the practice shape, the current friction, and the smallest deployment worth testing.",
      },

      capabilityCards: {
        practiceInterface: {
          title: "Practice Interface",
          body: "How the practice is reached or presented: public page, contact path, intake forms, client reception, and first visible response.",
          label: "Interface",
        },
        capabilitySet: {
          title: "Capability Set",
          body: "The functions needed in the system: intake, communication, routing, records, follow-up, payments, and administrative coordination.",
          label: "Functions",
        },
        organizationShape: {
          title: "Organization Shape",
          body: "The structure the system serves: solo professional, office, group, clinic, network, supervisor layer, or administrative team.",
          label: "Structure",
        },
        deploymentShape: {
          title: "Deployment Shape",
          body: "How the system is delivered: static site, web app, app surface, frontend, backend, admin console, or hybrid deployment.",
          label: "Delivery",
        },
      },

      organizationDesign: {
        title: "Designed around the shape of the organization",
        body: "PsyNova adapts from an individual professional practice to a larger organization without forcing every deployment into the same structure.",
      },

      organizationTypes: {
        individualPractice: {
          title: "Individual Practice",
          points: ["Solo professional", "Focused workflow", "Simple intake"],
        },
        professionalOffice: {
          title: "Professional Office",
          points: ["Small office", "Shared administration", "Coordinated communication"],
        },
        professionalGroup: {
          title: "Professional Group",
          points: ["Multiple professionals", "Shared capabilities", "Internal role separation"],
        },
        network: {
          title: "Network",
          points: ["Multiple locations", "Repeatable deployment", "Controlled configuration"],
        },
      },

      valueStatement: {
        title: "More professional time. Less administration.",
        body: "PsyNova organizes public presence, intake, communication, routing, and administrative flow. The machine serves the person, so the professional can focus on the people they serve.",
      },

      practiceTypes: {
        regular: {
          title: "Regular practice",
          body: "For consultants, coaches, educators, creators, and service providers who need public presence, intake, communication, and follow-up without a heavy regulatory layer.",
          cta: "Organize the practice",
        },
        partial: {
          title: "Partially regulated practice",
          body: "For professionals whose workflows require structure, records, privacy, or client handling without every action being regulated.",
          cta: "Reduce the administrative load",
        },
        regulated: {
          title: "Heavily regulated practice",
          body: "For clinical, medical, legal, or licensed environments where PsyNova supports the operation around professional authority.",
          cta: "Support the licensed professional",
        },
      },

      contact: {
        title: "Contact us",
        lead: "Before we propose a platform, we map the practice.",
        body: "We identify what exists today, what breaks, who carries the work, and what should be built first.",
        cta: "Contact us",
      },

      diagnostic: {
        title: "Practice Diagnostic",
        subtitle: "A short assessment of the practice shape, current friction, required capabilities, and first useful deployment.",
        currentState: {
          title: "What exists today?",
          body: "We identify the current public presence, intake path, communication channels, records, tools, and administrative responsibilities.",
        },
        friction: {
          title: "What breaks?",
          body: "We look for repeated handoffs, missing information, duplicated work, unclear ownership, privacy risk, and tasks that depend too heavily on memory.",
        },
        ownership: {
          title: "Who carries the work?",
          body: "We separate professional work from administrative work, client communication, support tasks, and system maintenance.",
        },
        firstBuild: {
          title: "What should be built first?",
          body: "We define the smallest useful system that makes the operation clearer without overbuilding the platform.",
        },
        cta: "Start diagnostic",
      },

      capabilities: {
        title: "Capabilities",
        subtitle: "PsyNova organizes the operational layer around a professional practice.",
        publicPresence: {
          title: "Public Presence",
          body: "Website, service pages, contact paths, profile structure, multilingual copy, and first visible response.",
        },
        intake: {
          title: "Intake",
          body: "Forms, intake routes, initial information capture, consent-aware flows, and handoff preparation.",
        },
        communication: {
          title: "Communication",
          body: "Client messages, confirmations, reminders, internal updates, and structured follow-up.",
        },
        scheduling: {
          title: "Scheduling",
          body: "Booking paths, availability logic, appointment preparation, and calendar coordination.",
        },
        records: {
          title: "Records",
          body: "Administrative records, client routing data, service notes, file organization, and access boundaries.",
        },
        payments: {
          title: "Payments",
          body: "Payment links, receipts, billing preparation, reconciliation support, and financial visibility.",
        },
        routing: {
          title: "Routing",
          body: "Moving the right information to the right role without forcing the professional to become the system bridge.",
        },
        administrativeFlow: {
          title: "Administrative Flow",
          body: "The repeatable operating path that keeps the practice running between client-facing moments.",
        },
      },

      organizationPage: {
        title: "Organization Shape",
        subtitle: "The system changes depending on the shape of the practice.",
        individualPractice: {
          title: "Individual Practice",
          body: "For one professional who needs a clearer public presence, intake path, and administrative rhythm.",
        },
        professionalOffice: {
          title: "Professional Office",
          body: "For small offices that share administration, communication, records, or scheduling.",
        },
        professionalGroup: {
          title: "Professional Group",
          body: "For multiple professionals who need shared capabilities while keeping roles and responsibilities separate.",
        },
        network: {
          title: "Network",
          body: "For organizations that need repeatable deployment, controlled configuration, and visibility across locations or teams.",
        },
        cta: "Define practice shape",
      },

      compliance: {
        title: "Professional authority stays with the professional",
        body: "PsyNova supports operational and administrative work. It does not replace clinical, legal, financial, or licensed professional judgment.",
        zone1: {
          title: "Zone 1 — Operational Support",
          body: "Intake, scheduling, reminders, communication, billing preparation, routing, and administrative coordination.",
        },
        zone2: {
          title: "Zone 2 — Privacy and Data Boundary",
          body: "Access controls, records, permissions, privacy-aware workflows, and data handling rules.",
        },
        zone3: {
          title: "Zone 3 — Professional Authority",
          body: "Clinical, legal, financial, or licensed judgment remains with the authorized professional.",
        },
      },

      footer: {
        brand: "PsyNova",
        subtitle: "Professional Practice Infrastructure",
        copyright: "© 2026 PsyNova",
      },

      shortCopyBank: [
        "The machine serves the person.",
        "Map the practice before the platform.",
        "More professional time. Less administration.",
        "Infrastructure for the work around the professional.",
        "Start with the shape of the practice.",
        "PsyNova organizes the operational layer around professional work.",
        "The system adapts to the practice, not the other way around.",
        "We map what exists before we build what comes next.",
        "Professional authority remains with the professional.",
        "The first deployment should make the work clearer, not heavier.",
      ],
    },

    "es-MX": {
      navigation: {
        home: "Inicio",
        capabilities: "Capacidades",
        "operating-map": "Mapa operativo",
        organizations: "Organizaciones",
        organization: "Organización",
        diagnostic: "Diagnóstico",
        contact: "Contacto",
      },

      hero: {
        brand: "PSYNOVA",
        title: "Infraestructura para servicios profesionales",
        subtitle: "Presencia pública, recepción de clientes, comunicación, enrutamiento e infraestructura operativa para prácticas profesionales.",
        primaryCta: "Ver mapa operativo",
        secondaryCta: "Definir forma de la práctica",
      },

      operatingMap: {
        title: "Mapa operativo",
        practiceInterface: { title: "Interfaz de la práctica", status: "Mapeado" },
        capabilitySet: { title: "Conjunto de capacidades", status: "Mapeado" },
        organizationShape: { title: "Forma de la organización", status: "Mapeado" },
        deploymentShape: { title: "Forma de despliegue", status: "Mapeado" },
      },

      firstUsefulStep: {
        eyebrow: "PRIMER PASO ÚTIL",
        title: "¿Cómo comenzar sin prometer de más?",
        body: "Primero identificamos la forma de la práctica, la fricción actual y el despliegue más pequeño que vale la pena probar.",
      },

      capabilityCards: {
        practiceInterface: {
          title: "Interfaz de la práctica",
          body: "Cómo se presenta o se alcanza la práctica: página pública, ruta de contacto, formularios de recepción, primera respuesta visible y entrada del cliente.",
          label: "Interfaz",
        },
        capabilitySet: {
          title: "Conjunto de capacidades",
          body: "Funciones necesarias: recepción, comunicación, enrutamiento, registros, seguimiento, pagos y coordinación administrativa.",
          label: "Funciones",
        },
        organizationShape: {
          title: "Forma de la organización",
          body: "La estructura real que el sistema sirve: práctica individual, oficina, grupo, clínica, red, supervisión o equipo administrativo.",
          label: "Estructura",
        },
        deploymentShape: {
          title: "Forma de despliegue",
          body: "Cómo se entrega el sistema: sitio web, app, frontend, backend, consola administrativa o despliegue híbrido.",
          label: "Despliegue",
        },
      },

      organizationDesign: {
        title: "Diseñado según la forma de la organización",
        body: "PsyNova se adapta desde una práctica profesional individual hasta una organización más grande, sin forzar cada despliegue dentro de la misma estructura.",
      },

      organizationTypes: {
        individualPractice: {
          title: "Práctica individual",
          points: ["Profesional independiente", "Flujo de trabajo enfocado", "Recepción sencilla"],
        },
        professionalOffice: {
          title: "Oficina profesional",
          points: ["Oficina pequeña", "Administración compartida", "Comunicación coordinada"],
        },
        professionalGroup: {
          title: "Grupo profesional",
          points: ["Múltiples profesionales", "Capacidades compartidas", "Separación interna de roles"],
        },
        network: {
          title: "Red",
          points: ["Múltiples ubicaciones", "Despliegue repetible", "Configuración controlada"],
        },
      },

      valueStatement: {
        title: "Más tiempo para atender. Menos administración.",
        body: "PsyNova organiza la presencia pública, la recepción de clientes, la comunicación, el enrutamiento y el flujo administrativo. La máquina sirve a la persona, para que el profesional pueda enfocarse en quienes atiende.",
      },

      practiceTypes: {
        regular: {
          title: "Práctica regular",
          body: "Para consultores, coaches, educadores, creadores y proveedores de servicios que necesitan presencia pública, recepción de clientes, comunicación y seguimiento sin una capa regulatoria pesada.",
          cta: "Organizar la práctica",
        },
        partial: {
          title: "Práctica parcialmente regulada",
          body: "Para profesionales cuyos flujos de trabajo requieren estructura, registros, privacidad o manejo de clientes sin que todo el trabajo esté regulado.",
          cta: "Reducir la carga administrativa",
        },
        regulated: {
          title: "Práctica altamente regulada",
          body: "Para entornos clínicos, médicos, legales o autorizados, donde PsyNova sostiene la operación alrededor de la autoridad profesional.",
          cta: "Apoyar al profesional autorizado",
        },
      },

      contact: {
        title: "Contacto",
        lead: "Antes de proponer una plataforma, mapeamos la práctica.",
        body: "Identificamos qué existe hoy, qué se rompe, quién sostiene el trabajo y qué debe construirse primero.",
        cta: "Contacto",
      },

      diagnostic: {
        title: "Diagnóstico de práctica",
        subtitle: "Una evaluación breve de la forma de la práctica, la fricción actual, las capacidades requeridas y el primer despliegue útil.",
        currentState: {
          title: "¿Qué existe hoy?",
          body: "Identificamos la presencia pública actual, la ruta de recepción, los canales de comunicación, los registros, las herramientas y las responsabilidades administrativas.",
        },
        friction: {
          title: "¿Qué se rompe?",
          body: "Buscamos entregas repetidas, información faltante, trabajo duplicado, responsabilidades poco claras, riesgos de privacidad y tareas que dependen demasiado de la memoria.",
        },
        ownership: {
          title: "¿Quién sostiene el trabajo?",
          body: "Separamos el trabajo profesional del trabajo administrativo, la comunicación con clientes, las tareas de soporte y el mantenimiento del sistema.",
        },
        firstBuild: {
          title: "¿Qué debe construirse primero?",
          body: "Definimos el sistema útil más pequeño que aclara la operación sin sobreconstruir la plataforma.",
        },
        cta: "Iniciar diagnóstico",
      },

      capabilities: {
        title: "Capacidades",
        subtitle: "PsyNova organiza la capa operativa alrededor de una práctica profesional.",
        publicPresence: {
          title: "Presencia pública",
          body: "Sitio web, páginas de servicio, rutas de contacto, estructura de perfil, copy multilingüe y primera respuesta visible.",
        },
        intake: {
          title: "Recepción de clientes",
          body: "Formularios, rutas de recepción, captura inicial de información, flujos conscientes del consentimiento y preparación de entregas internas.",
        },
        communication: {
          title: "Comunicación",
          body: "Mensajes a clientes, confirmaciones, recordatorios, actualizaciones internas y seguimiento estructurado.",
        },
        scheduling: {
          title: "Agenda",
          body: "Rutas de reserva, lógica de disponibilidad, preparación de citas y coordinación de calendario.",
        },
        records: {
          title: "Registros",
          body: "Registros administrativos, datos de enrutamiento, notas de servicio, organización de archivos y límites de acceso.",
        },
        payments: {
          title: "Pagos",
          body: "Ligas de pago, recibos, preparación de cobros, apoyo de conciliación y visibilidad financiera.",
        },
        routing: {
          title: "Enrutamiento",
          body: "Mover la información correcta al rol correcto sin obligar al profesional a convertirse en el puente del sistema.",
        },
        administrativeFlow: {
          title: "Flujo administrativo",
          body: "El camino operativo repetible que mantiene funcionando la práctica entre momentos de atención al cliente.",
        },
      },

      organizationPage: {
        title: "Forma de la organización",
        subtitle: "El sistema cambia según la forma de la práctica.",
        individualPractice: {
          title: "Práctica individual",
          body: "Para un profesional que necesita presencia pública, ruta de recepción y ritmo administrativo más claros.",
        },
        professionalOffice: {
          title: "Oficina profesional",
          body: "Para oficinas pequeñas que comparten administración, comunicación, registros o agenda.",
        },
        professionalGroup: {
          title: "Grupo profesional",
          body: "Para múltiples profesionales que necesitan capacidades compartidas manteniendo roles y responsabilidades separados.",
        },
        network: {
          title: "Red",
          body: "Para organizaciones que necesitan despliegue repetible, configuración controlada y visibilidad entre ubicaciones o equipos.",
        },
        cta: "Definir forma de la práctica",
      },

      compliance: {
        title: "La autoridad profesional permanece con el profesional",
        body: "PsyNova apoya el trabajo operativo y administrativo. No reemplaza el juicio clínico, legal, financiero ni profesional autorizado.",
        zone1: {
          title: "Zona 1 — Soporte operativo",
          body: "Recepción, agenda, recordatorios, comunicación, preparación de cobros, enrutamiento y coordinación administrativa.",
        },
        zone2: {
          title: "Zona 2 — Privacidad y datos",
          body: "Controles de acceso, registros, permisos, flujos conscientes de privacidad y reglas de manejo de datos.",
        },
        zone3: {
          title: "Zona 3 — Autoridad profesional",
          body: "El juicio clínico, legal, financiero o autorizado permanece con el profesional correspondiente.",
        },
      },

      footer: {
        brand: "PsyNova",
        subtitle: "Infraestructura para servicios profesionales",
        copyright: "© 2026 PsyNova",
      },

      shortCopyBank: [
        "La máquina sirve a la persona.",
        "Mapea la práctica antes de la plataforma.",
        "Más tiempo para atender. Menos administración.",
        "Infraestructura para el trabajo alrededor del profesional.",
        "Empieza con la forma real de la práctica.",
        "PsyNova organiza la capa operativa alrededor del trabajo profesional.",
        "El sistema se adapta a la práctica, no al revés.",
        "Mapeamos lo que existe antes de construir lo que sigue.",
        "La autoridad profesional permanece con el profesional.",
        "El primer despliegue debe aclarar el trabajo, no hacerlo más pesado.",
      ],
    },

    "fr-CA": {
      navigation: {
        home: "Accueil",
        capabilities: "Capacités",
        "operating-map": "Carte opérationnelle",
        organizations: "Organisations",
        organization: "Organisation",
        diagnostic: "Diagnostic",
        contact: "Contact",
      },

      hero: {
        brand: "PSYNOVA",
        title: "Infrastructure pour pratiques professionnelles",
        subtitle: "Présence publique, accueil, communication, orientation et infrastructure opérationnelle pour les pratiques professionnelles.",
        primaryCta: "Voir la carte",
        secondaryCta: "Définir la forme de la pratique",
      },

      operatingMap: {
        title: "Carte opérationnelle",
        practiceInterface: { title: "Interface de la pratique", status: "Défini" },
        capabilitySet: { title: "Ensemble de capacités", status: "Défini" },
        organizationShape: { title: "Forme de l’organisation", status: "Défini" },
        deploymentShape: { title: "Forme de déploiement", status: "Défini" },
      },

      firstUsefulStep: {
        eyebrow: "PREMIER PAS UTILE",
        title: "Comment commencer sans trop promettre?",
        body: "Nous identifions d’abord la forme de la pratique, la friction actuelle et le plus petit déploiement qui mérite d’être testé.",
      },

      capabilityCards: {
        practiceInterface: {
          title: "Interface de la pratique",
          body: "La façon dont la pratique se présente ou est rejointe : page publique, chemin de contact, formulaires d’accueil, première réponse visible et entrée client.",
          label: "Interface",
        },
        capabilitySet: {
          title: "Ensemble de capacités",
          body: "Fonctions nécessaires : accueil, communication, orientation, dossiers, suivi, paiements et coordination administrative.",
          label: "Fonctions",
        },
        organizationShape: {
          title: "Forme de l’organisation",
          body: "La structure réelle servie par le système : pratique individuelle, bureau, groupe, clinique, réseau, supervision ou équipe administrative.",
          label: "Structure",
        },
        deploymentShape: {
          title: "Forme de déploiement",
          body: "La façon dont le système est livré : site web, application, frontend, backend, console administrative ou déploiement hybride.",
          label: "Déploiement",
        },
      },

      organizationDesign: {
        title: "Conçu autour de la forme de l’organisation",
        body: "PsyNova s’adapte à partir d’une pratique professionnelle individuelle jusqu’à une organisation plus large, sans forcer chaque déploiement dans la même structure.",
      },

      organizationTypes: {
        individualPractice: {
          title: "Pratique individuelle",
          points: ["Professionnel autonome", "Flux de travail ciblé", "Accueil simple"],
        },
        professionalOffice: {
          title: "Bureau professionnel",
          points: ["Petit bureau", "Administration partagée", "Communication coordonnée"],
        },
        professionalGroup: {
          title: "Groupe professionnel",
          points: ["Plusieurs professionnels", "Capacités partagées", "Séparation interne des rôles"],
        },
        network: {
          title: "Réseau",
          points: ["Plusieurs emplacements", "Déploiement reproductible", "Configuration contrôlée"],
        },
      },

      valueStatement: {
        title: "Plus de temps pour votre pratique. Moins d’administration.",
        body: "PsyNova organise la présence publique, l’accueil, la communication, l’orientation et le flux administratif. La machine sert la personne, afin que le professionnel puisse se concentrer sur les personnes qu’il accompagne.",
      },

      practiceTypes: {
        regular: {
          title: "Pratique régulière",
          body: "Pour les consultants, coachs, éducateurs, créateurs et fournisseurs de services qui ont besoin d’une présence publique, d’un accueil, d’une communication et d’un suivi sans couche réglementaire lourde.",
          cta: "Organiser la pratique",
        },
        partial: {
          title: "Pratique partiellement réglementée",
          body: "Pour les professionnels dont les flux de travail exigent de la structure, des dossiers, de la confidentialité ou une gestion des clients sans que tout le travail soit réglementé.",
          cta: "Réduire la charge administrative",
        },
        regulated: {
          title: "Pratique fortement réglementée",
          body: "Pour les environnements cliniques, médicaux, juridiques ou autorisés, où PsyNova soutient l’opération autour de l’autorité professionnelle.",
          cta: "Soutenir le professionnel autorisé",
        },
      },

      contact: {
        title: "Contact",
        lead: "Avant de proposer une plateforme, nous cartographions la pratique.",
        body: "Nous identifions ce qui existe aujourd’hui, ce qui bloque, qui porte le travail et ce qu’il faut construire en premier.",
        cta: "Contact",
      },

      diagnostic: {
        title: "Diagnostic de pratique",
        subtitle: "Une courte évaluation de la forme de la pratique, de la friction actuelle, des capacités requises et du premier déploiement utile.",
        currentState: {
          title: "Qu’est-ce qui existe aujourd’hui?",
          body: "Nous identifions la présence publique actuelle, le chemin d’accueil, les canaux de communication, les dossiers, les outils et les responsabilités administratives.",
        },
        friction: {
          title: "Qu’est-ce qui bloque?",
          body: "Nous repérons les transferts répétés, l’information manquante, le travail dupliqué, les responsabilités floues, les risques de confidentialité et les tâches qui dépendent trop de la mémoire.",
        },
        ownership: {
          title: "Qui porte le travail?",
          body: "Nous séparons le travail professionnel du travail administratif, de la communication avec les clients, des tâches de soutien et de la maintenance du système.",
        },
        firstBuild: {
          title: "Que faut-il construire en premier?",
          body: "Nous définissons le plus petit système utile qui clarifie l’opération sans surconstruire la plateforme.",
        },
        cta: "Commencer le diagnostic",
      },

      capabilities: {
        title: "Capacités",
        subtitle: "PsyNova organise la couche opérationnelle autour d’une pratique professionnelle.",
        publicPresence: {
          title: "Présence publique",
          body: "Site web, pages de service, chemins de contact, structure de profil, texte multilingue et première réponse visible.",
        },
        intake: {
          title: "Accueil",
          body: "Formulaires, chemins d’accueil, capture initiale d’information, flux sensibles au consentement et préparation des transferts internes.",
        },
        communication: {
          title: "Communication",
          body: "Messages aux clients, confirmations, rappels, mises à jour internes et suivi structuré.",
        },
        scheduling: {
          title: "Horaire",
          body: "Chemins de réservation, logique de disponibilités, préparation des rendez-vous et coordination du calendrier.",
        },
        records: {
          title: "Dossiers",
          body: "Dossiers administratifs, données d’orientation, notes de service, organisation des fichiers et limites d’accès.",
        },
        payments: {
          title: "Paiements",
          body: "Liens de paiement, reçus, préparation de la facturation, soutien à la conciliation et visibilité financière.",
        },
        routing: {
          title: "Orientation",
          body: "Acheminer la bonne information vers le bon rôle sans obliger le professionnel à devenir le pont du système.",
        },
        administrativeFlow: {
          title: "Flux administratif",
          body: "Le chemin opérationnel répétable qui maintient la pratique en marche entre les moments avec les clients.",
        },
      },

      organizationPage: {
        title: "Forme de l’organisation",
        subtitle: "Le système change selon la forme de la pratique.",
        individualPractice: {
          title: "Pratique individuelle",
          body: "Pour un professionnel qui a besoin d’une présence publique, d’un chemin d’accueil et d’un rythme administratif plus clairs.",
        },
        professionalOffice: {
          title: "Bureau professionnel",
          body: "Pour les petits bureaux qui partagent l’administration, la communication, les dossiers ou l’horaire.",
        },
        professionalGroup: {
          title: "Groupe professionnel",
          body: "Pour plusieurs professionnels qui ont besoin de capacités partagées tout en gardant les rôles et responsabilités séparés.",
        },
        network: {
          title: "Réseau",
          body: "Pour les organisations qui ont besoin d’un déploiement reproductible, d’une configuration contrôlée et de visibilité entre emplacements ou équipes.",
        },
        cta: "Définir la forme de la pratique",
      },

      compliance: {
        title: "L’autorité professionnelle reste avec le professionnel",
        body: "PsyNova soutient le travail opérationnel et administratif. Elle ne remplace pas le jugement clinique, juridique, financier ou professionnel autorisé.",
        zone1: {
          title: "Zone 1 — Soutien opérationnel",
          body: "Accueil, horaire, rappels, communication, préparation de la facturation, orientation et coordination administrative.",
        },
        zone2: {
          title: "Zone 2 — Confidentialité et données",
          body: "Contrôles d’accès, dossiers, permissions, flux sensibles à la confidentialité et règles de gestion des données.",
        },
        zone3: {
          title: "Zone 3 — Autorité professionnelle",
          body: "Le jugement clinique, juridique, financier ou autorisé reste avec le professionnel concerné.",
        },
      },

      footer: {
        brand: "PsyNova",
        subtitle: "Infrastructure pour pratiques professionnelles",
        copyright: "© 2026 PsyNova",
      },

      shortCopyBank: [
        "La machine sert la personne.",
        "Cartographier la pratique avant la plateforme.",
        "Plus de temps pour votre pratique. Moins d’administration.",
        "Infrastructure pour le travail autour du professionnel.",
        "Commencer avec la forme réelle de la pratique.",
        "PsyNova organise la couche opérationnelle autour du travail professionnel.",
        "Le système s’adapte à la pratique, pas l’inverse.",
        "Nous cartographions ce qui existe avant de construire ce qui vient ensuite.",
        "L’autorité professionnelle reste avec le professionnel.",
        "Le premier déploiement doit clarifier le travail, pas l’alourdir.",
      ],
    },
  },
};

export default seedbank;
