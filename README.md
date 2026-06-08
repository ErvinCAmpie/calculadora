# Calculadora React

## Descripción

Calculadora desarrollada con React y Math.js que permite realizar operaciones matemáticas básicas mediante una interfaz amigable.

### Funcionalidades

* Suma (+)
* Resta (-)
* Multiplicación (*)
* División (/)
* Limpieza de pantalla (C)
* Evaluación de expresiones matemáticas (=)
* Actualización dinámica del display
* Componentes reutilizables

---

## Tecnologías Utilizadas

* React.js
* JavaScript (ES6+)
* CSS3
* Math.js

---

## Estructura del Proyecto

```text
src/
│
├── components/
│   ├── Button.jsx
│   ├── Display.jsx
│   └── Calculadora.jsx
│
├── styles/
│   └── style.css
│
├── App.jsx
└── main.jsx
```

---

## Instalación

### Clonar el repositorio

```bash
git clone https://github.com/usuario/calculadora-react.git
```

### Entrar al proyecto

```bash
cd calculadora-react
```

### Instalar dependencias

```bash
npm install
```

### Instalar Math.js

```bash
npm install mathjs
```

### Ejecutar proyecto

```bash
npm run dev
```

---

## Arquitectura

La aplicación está compuesta por tres componentes principales:

### Calculadora

Componente principal encargado de:

* Gestionar el estado de la aplicación.
* Capturar eventos de los botones.
* Procesar operaciones matemáticas.
* Actualizar el display.

### Display

Muestra:

* Expresión matemática actual.
* Resultado de la operación.

### Button

Componente reutilizable para cada botón de la calculadora.

---

## Flujo de Funcionamiento

```text
Usuario presiona botón
          │
          ▼
      Button
          │
          ▼
    handleClick
          │
          ▼
 Actualiza State
          │
          ▼
      Display
          │
          ▼
 Muestra resultado
```

### Ejemplo

```text
Usuario presiona: 7
Display: 7

Usuario presiona: +
Display: 7+

Usuario presiona: 5
Display: 7+5

Usuario presiona: =
Display: 12
```

---

## Manejo de Estado

Se utiliza el Hook `useState` para almacenar la expresión actual.

```jsx
const [expression, setExpression] = useState("");
```

---

## Evaluación de Expresiones

Math.js permite resolver expresiones matemáticas complejas.

```jsx
import { evaluate } from "mathjs";

const resultado = evaluate(expression);
```

Ejemplos válidos:

```text
5+5
10/2
4*8
(5+5)*2
```

---

## Mejoras Futuras

* Soporte para teclado físico.
* Historial de operaciones.
* Modo oscuro.
* Operaciones avanzadas.
* Porcentajes.
* Raíz cuadrada.
* Potencias.
* Responsive Design.

---

## Autor

Proyecto desarrollado como práctica para fortalecer conocimientos en:

* React.js
* Componentes
* Props
* State
* Eventos
* Manejo de librerías externas
* Math.js

```
```Ervinn Isaac
