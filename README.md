# iAlmendros

Aplicación front-end para residentes de la colonia Almendros. De forma que puedan gestionar una talanquera implementada a base de TTLock.

# Backlog

Para ver detalles, dirigirse:  https://docs.google.com/document/d/1MO9fH3sgq5sOycdk4E-N0pFASFyL5QMhD4iE8QqZioo/edit?usp=sharing

# Runtime

- Nginx
- Unix-based OS (opcional)
- NodeJS & NPM


Para correr este proyecto, importa y `adapta` el bloque `server { ... }` 
ubicado en `$REPO/nginx/i-almendros.conf` dentro de `nginx.conf`. 

El ejemplo que incluye este repositorio necesita adaptarse al entorno de desarrollo.
Tiene algunos placeholders:

- 8087 `# Puerto del reverse proxy, escoge uno que no esté en uso todavía y que no haga conflicto con el Vue runtime, contenedores que tengas, etc.`
- i-almendros.local `# Nombre del servidor si prefieres entrar por nombre en localhost` 
- 0.0.0.0:80 `# Dirección IP del servidor de desarrollo.`
- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx `# Nombre codificado de un custom-header que utiliza el servidor para autenticar todas las requests que pasen por este proxy. Importante.` 
- yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy `# Valor del header (passcode) que utiliza el servidor para autenticar las requests`
- http://127.0.0.1:5173  `# Direccion del servidor de tu javascript framework, el ejemplo utiliza la que trae Vue + Vite por default.`

Los mismos pueden encontrarse en el backlog, o pedirse al administrador del repositorio.

### Ejemplo de como instalar i-almendros.conf 
Rutas relativas a la raiz del repo, referenciada como `$REPO`. Ejemplo para equipos Mac, 
adapta segun tu equipo.

1. Copia el archivo
```zsh
mkdir -p /opt/homebrew/etc/nginx/servers
cp $REPO/nginx/i-almendros.conf /opt/homebrew/etc/nginx/servers/
```

2. Asegúrate de que tu `nginx.conf` incluya esa carpeta dentro del bloque `http { ... }`:

```nginx
http {
   # ... otras directivas ...
   include servers/*;
}
```

3. Verifica los cambios: `nginx -t`
4. Reinicia nginx: `nginx -s reload`
5. Actualiza /etc/hosts si prefieres ingresar por nombre y no por puerto: `127.0.0.1   i-almendros.local`


# Design Principles
Este proyecto se desarrolla con un approach **mobile-first.** El diseño debe ser construido principalmente
para dispositivos de un viewport width de `450px`. El font-size más pequeño recomendado
en este tipo de diseños es de `16px` y el layout recomendado es por bloques en un estilo apilado.

En caso de utilizar medidas relativas `vw, %, etc`, considerar que el `<main>` debe tener un 
max-width de `450px` el diseño aún debe ser responsive, ya que existen dispositivos más pequeños
como algunos telefonos POCO, o los iPhone mini, que pueden ser tan pequeños como `350px`.
No es necesario considerar `< 300px`. 

Si un usuario entra al proyecto desde desktop (i.e viewport width de `1400px`) el usuario
deberá ver una columna de `450px` centrada con la aplicación, y el resto será margen.

El index.html de este proyecto ya trae configurado el `<body>, <main>, <div id="app">` de modo
que Vue o el framework que se ocupe se monte sobre la safe-area.

No utilices porcentajes o medidas relativas sin un `min()` operator en CSS, ya que cuando
abras el diseño en desktop se va a arruinar.

# Dependencias & index.html

Todos los frameworks javascript incluyen un index.html por lo general, asegurate de descartarlo
y utilizar el que trae este repositorio, ya que el mismo trae algunas dependencias
instaladas por CDN, así como los valores finales para meta tags como description, title, favicon, etc.

- fontawesome ya se encuentra instalada en index.html

# Colores & brand guide
Los colores pueden ser inspirados en la aplicacion original, la cual trae screenshots
en el backlog. Se incluye un logo y favicon.

# Credenciales
Para explorar la referencia oficial, ver credenciales en el backlog.

# API & Backend
El backend se encuentra bajo la ruta `/api` puedes enviar las peticiones
sin autenticación ya que el reverse-proxy adjunta un passcode especial que el servidor
automaticamente autentica y asigna una identidad de usuario de prueba con el que puedes
realizar todas las operaciones que se necesitan.

La definición de esquemas, rutas, códigos de error, etc, se encuentran en el folder `$REPO/api`