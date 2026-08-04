# EcoBin: Smart Waste Solutions

Prompt para Lovable — Página web de EcoBin

Quiero que construyas una landing page (una sola página, tipo scroll) para presentar EcoBin, un proyecto escolar real del SENA. No es un producto comercial, es un prototipo funcional hecho por estudiantes, así que el diseño debe verse profesional y de alto nivel, pero el contenido debe sonar honesto y humano, no inflado como una startup.

Contexto del proyecto (úsalo tal cual, no lo cambies)

Nombre: EcoBin (nunca cambiar este nombre)

Programa: Técnico en Programación para Analítica de Datos, SENA

Institución: Institución Educativa Urbana San José, Ebéjico, Antioquia, Colombia

Equipo: Emiliano Henao, Eider Martínez, Jhonatan Acevedo, Justin Bedoya — estudiantes de grado 11

Qué es: una caneca inteligente + app móvil (EcoScan IA) que usan inteligencia artificial, IoT y analítica de datos para mejorar la separación de residuos en el colegio

Objetivo del proyecto: mejorar la separación de residuos combinando IA (visión artificial), app móvil, caneca con servomotores, IoT (ESP8266 + MQTT), base de datos SQL y dashboards de Power BI

Arquitectura del sistema: App móvil → IA (visión artificial clasifica el residuo) → servidor MQTT → ESP8266 NodeMCU V3 → caneca inteligente (servomotores abren el compartimento correcto) → base de datos SQL → Python → Power BI (analítica)

App EcoScan IA: el usuario toma foto de un residuo, la IA lo clasifica y devuelve categoría, nombre, explicación e instrucción de dónde botarlo; el usuario da feedback (sí/no/timeout)

Estado real del proyecto: ya llevan 100 escaneos de prueba, se actualiza ~50 escaneos por semana, meta final entre 250 y 500 escaneos. También hicieron una encuesta de diagnóstico a 30 estudiantes del colegio (grados 5°, 8° y 11°), con su propio dashboard en Power BI.

Reglas de contenido — muy importantes

No inventes estadísticas ni resultados. Donde normalmente pondrías una cifra (ej. "68% de estudiantes separa mal sus residuos"), deja un placeholder visible y claro como [DATO REAL: completar con resultado de la encuesta] para que el equipo lo reemplace con el número exacto.

Nunca prometas 100% de precisión de la IA ni la presentes como perfecta. Puedes decir cosas como "la IA identifica el residuo y sugiere la categoría correcta" sin garantizar infalibilidad.

El texto debe sonar como lo escribirían estudiantes de SENA presentando su proyecto: natural, claro, profesional pero cercano. Nada de tono corporativo exagerado ni de "paper académico".

Estructura de secciones

Hero / Portada — nombre EcoBin, una frase corta que explique qué es, y el sello del programa (SENA / Técnico en Programación para Analítica de Datos)

Problemática — por qué existe el proyecto (mal manejo de residuos en el colegio), con espacio para insertar datos reales de la encuesta a 30 estudiantes (placeholders claros)

Objetivos — qué busca resolver el proyecto

Cómo funciona — la arquitectura completa paso a paso (app → IA → MQTT → ESP8266 → caneca → SQL → Power BI), ideal como diagrama visual interactivo

Tecnologías usadas — React Native/Expo, visión artificial, ESP8266/MQTT/WiFi, SQL, Python (Pandas/NumPy), Power BI

EcoScan IA — cómo funciona la app: foto → clasificación → instrucción → feedback del usuario

Resultados y analítica — espacio para insertar/embeder los dashboards de Power BI ya construidos (déjalo listo para un iframe de Power BI o para imágenes de los dashboards)

Prototipo físico — galería de fotos reales del ensamblaje (ESP8266, servomotores, caja de cartón del prototipo); deja el layout listo, las fotos las sube el equipo después

Equipo — los 4 integrantes, el colegio, el programa

Cierre / próximos pasos — mención breve de que es un piloto en crecimiento, sin prometer resultados finales

Estilo de interacción (importante)

Nada de formularios ni cuestionarios para el usuario. Cero inputs tipo "responde esta pregunta".

La interacción debe ser visual: clics sobre gráficas, íconos o pasos del diagrama que revelan más información (tooltips, expandibles, animaciones al hacer scroll o hover), no encuestas.

Estilo visual

Estética eco + tech: verdes junto con un acento tecnológico (azul o teal), fondo claro, tipografía moderna y limpia

Profesional pero con energía joven (son estudiantes de grado 11, no una corporación)

Uso de íconos/ilustraciones simples para representar IA, IoT, reciclaje y datos

Diseño responsive (funciona bien en celular, porque se compartirá en el colegio)

Que no se vea plana: usa fondos con formas orgánicas sutiles, degradados suaves, separación clara entre secciones (no todo bloques blancos apilados), y buen uso de espacio negativo

Logos e imágenes

Header: debe llevar el logo del SENA y el logo de la Institución Educativa Urbana San José, uno junto al otro (o el del SENA a la izquierda y el de la institución a la derecha). Repetir ambos logos en el footer junto con los créditos del equipo.

Deja el espacio de los logos como un placeholder claro (ej. un recuadro con el texto [LOGO SENA] / [LOGO INSTITUCIÓN]) — no generes logos genéricos ni inventados, el equipo subirá los archivos reales.

Fotos del prototipo físico (ensamblaje ESP8266, servomotores, caja de cartón): preséntalas en una galería atractiva, no en una simple cuadrícula plana — por ejemplo con hover que las agranda levemente, o un carrusel/mosaico con distintos tamaños.

Capturas o mockup de la app EcoScan IA: incluye espacio para 2-3 pantallas de la app (mostrando la foto del residuo, la clasificación y la instrucción) dentro de un marco de celular, para que se vea como un producto real.

Diagrama de arquitectura (app → IA → MQTT → ESP8266 → caneca → SQL → Power BI): que sea una ilustración visual del flujo, no solo texto con flechas — íconos por cada etapa.

Todos los espacios de imágenes reales deben quedar como placeholders bien identificados y fáciles de reemplazar.

Animaciones e interactividad

Scroll reveal: cada sección debe aparecer con una animación suave (fade-in + leve desplazamiento hacia arriba) al entrar en la pantalla, no aparecer todo de golpe.

Micro-interacciones: tarjetas y botones que reaccionan al hover (leve elevación, cambio de color o sombra), para que se sienta viva la página.

Diagrama de arquitectura interactivo: al hacer clic o hover sobre cada etapa del proceso (app, IA, MQTT, ESP8266, caneca, base de datos, Power BI), que se resalte esa etapa y aparezca una breve explicación de qué hace.

Contadores animados: las cifras reales del proyecto (ej. escaneos realizados, meta de escaneos) deben contar hacia arriba cuando el usuario llega a esa sección, en vez de mostrarse estáticas.

Transiciones suaves entre secciones, y un pequeño efecto de parallax o movimiento sutil en el Hero para que no se sienta estático desde el primer segundo.

Todo esto con moderación: que se sienta pulido y profesional, no cargado ni distraído.

Requisitos técnicos

Página única (single page, con scroll y navegación por anclas)

Debe poder integrarse fácilmente dentro de otra página web más grande (la de un profesor que reúne las páginas de todos los equipos), así que evita dependencias raras y mantenla liviana y autocontenida — pensada para funcionar bien también dentro de un iframe

Carga rápida, sin elementos innecesarios

El código debe quedar editable después, fuera de Lovable: que el proyecto se pueda exportar/descargar y seguir ajustándose en Visual Studio Code sin depender de la plataforma. Usa una estructura de carpetas y componentes clara y ordenada (nombres descriptivos, separación lógica de componentes), con comentarios donde el flujo no sea obvio, para que cualquiera que abra el proyecto en VS Code entienda rápido cómo está armado.

El proyecto debe poder compartirse fácilmente (por ejemplo subiéndolo a GitHub) para que otra persona —o otra IA— revise el código y evalúe si está bien construido antes de publicarlo.

Nota para ti (Lovable): deja marcados con comentarios o placeholders visibles todos los espacios donde falten datos reales (estadísticas de encuestas, dashboards de Power BI, fotos del prototipo), para que el equipo los complete antes de publicar.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://ecobinsena.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/1b5caa36-3fc1-4cc4-beff-f437c42ffaee).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
