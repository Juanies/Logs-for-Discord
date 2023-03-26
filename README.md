# Bot de registro de mensajes en Discord

Este bot de Discord fue creado para registrar todos los mensajes y comandos en un servidor de Discord. Además, en una futura versión, también registrará todas las imágenes enviadas en el servidor.

## Funcionamiento

El bot utiliza la librería `discord.js` para conectarse y comunicarse con el API de Discord. Cuando un usuario envía un mensaje o un comando en un canal de texto, el bot registra la información del mensaje en un archivo de registro (`LogsChat.txt`). 

Además, en una futura versión, el bot también registrará todas las imágenes enviadas en un canal de texto en un directorio específico.

![image](https://user-images.githubusercontent.com/80675013/227780701-14ad84b3-1135-49cb-9545-0fb29955dd0e.png)

## Comandos

El bot no responde a ningún comando, ya que su única función es registrar los mensajes y comandos enviados en el servidor.

## Instalación

1. Clona este repositorio en tu máquina local
2. Instala las dependencias con `npm install`
3. Crea un archivo `config.json` en el directorio raíz del proyecto y agrega el token de tu bot de Discord:

```json
{
  "token": "tu_token_aquí"
}
```
4. Ejecuta el bot con `node index.js`

##Licencia
Este proyecto está licenciado bajo la Licencia creative common.

