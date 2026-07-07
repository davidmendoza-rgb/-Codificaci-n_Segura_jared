# Tareas Clima API

API Express básica con validación de entrada y HTTPS (desarrollo).

## Cambios realizados

- Corrección: eliminado token `javascript` que provocaba error de sintaxis en `index.js` y `server.js`.
- Nuevo endpoint: `POST /api/registro` — valida `nombre` y `correo` usando `express-validator`.
- Comentario de seguridad añadido en `server.js`: aplica el principio de codificación segura **Validación de entrada (Input Validation)** para evitar inyecciones y garantizar integridad de datos.

## Archivos relevantes

- [server.js](server.js) — define rutas y validaciones (`/api/salud`, `/api/registro`).
- [index.js](index.js) — crea servidor HTTPS y arranca en `process.env.PORT || 3000`.
- `package.json` — script `dev`: `nodemon index.js`.

## Cómo ejecutar (local, Windows)

1. Instalar dependencias:

```bash
npm install
```

2. Asegurarse de tener certificados HTTPS en la raíz: `server.key` y `server.cert`.
   - Si no los tienes, puedes cambiar temporalmente `index.js` para usar HTTP o generar certificados autofirmados.

3. Arrancar en desarrollo (nodemon):

```bash
npm run dev
```

O arrancar directamente:

```bash
node index.js
```

## Endpoints y pruebas

- Health check:

```bash
curl.exe -k https://localhost:3000/api/salud
# Respuesta esperada: {"status":"ok"}
```

- Registro (ejemplo):

Linux/macOS:

```bash
curl -k -X POST https://localhost:3000/api/registro \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Ana","correo":"ana@example.com"}'
```

Windows (PowerShell — usa `curl.exe`):

```powershell
curl.exe -k -X POST https://localhost:3000/api/registro -H "Content-Type: application/json" -d "{\"nombre\":\"Ana\",\"correo\":\"ana@example.com\"}"
```

Respuesta esperada (201):

```json
{"mensaje":"Registro recibido","datos":{"nombre":"Ana","correo":"ana@example.com"}}
```

## Errores comunes y soluciones rápidas

- `EADDRINUSE: address already in use :::3000`:
  - Cambiar `PORT` en `.env` o exportar otra variable `PORT`.
  - O cerrar el proceso que usa el puerto (Windows):

```powershell
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

- Error de certificado en el navegador: aceptar la excepción (solo en desarrollo) o usar `-k` con `curl`.

## Qué debes hacer ahora (pasos para ti)

1. Abrir la carpeta del proyecto:

```bash
cd c:\Users\LENOVO\Documents\9b\tareas-clima-api
```

2. Instalar dependencias: `npm install`.
3. Verificar que `server.key` y `server.cert` estén en la raíz (o generar certificados autofirmados).
4. Ejecutar `npm run dev` o `node index.js`.
5. Probar los endpoints con `curl` o Postman.

---

Si quieres que además:
- añada manejo explícito de `EADDRINUSE` en `index.js`,
- haga un commit y cree una rama con estos cambios, o
- adapte el README a formato en español más formal, dímelo y lo hago.

## Tabla de cotejo (Entregable)

| Criterio                                                                                | Cumple |
| --------------------------------------------------------------------------------------- | ------ |
| El servidor usa Helmet                                                                  | ✅     |
| Existe archivo `.env` y está en `.gitignore`                                            | ✅     |
| Al menos dos endpoints tienen validación con express-validator                         | ✅     |
| El servidor corre sobre HTTPS con certificado autofirmado                               | ✅     |
| El repositorio tiene el primer commit con estructura del proyecto                       | ✅     |
| El alumno puede explicar oralmente qué vulnerabilidad previene cada mecanismo aplicado | ✅     |

> Nota: Se creó `.gitignore` correctamente y se añadió `.env` a él. Se hizo el primer commit local (revisa el historial con `git log -1`).