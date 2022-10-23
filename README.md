<div align="center">
<img height="154" width="333" src="https://user-images.githubusercontent.com/76699403/197346176-7a86089d-facf-418c-ad0d-fd893171c129.png"/>
</div>

<p align="center">A simple application to manager the </a> and <a href="https://github.com/Ellathet/hey" target="_blank">hey</a></p>

## Description
  I always think about how things are behind it, so based on the [firebase](https://firebase.google.com/) message service, I decided to create my own, first which technology to use?
  - Socket is my first choice
  - Node.js, simple and powerfull solution
  
  So I started creating it, and this is the result
 
## How to start
  - To start the dashboard main application is needed, access this [repository](https://github.com/Ellathet/hey), where will you find, backend and main application to dispath and recive the notifications.
 
  To start in dev environment, you need use: node >= 16, yarn >= 1.22, this app using [vite.js](https://vitejs.dev/) to hot update feature and react. 
  - Configure your .env file:
  `VITE_API_TOKEN` is your password, it is necessary to authenticate the application when you send the notification, or recive, 
need without the same defined in the [main app](https://github.com/Ellathet/hey). And `VITE_API_URL`, where your main application it's alocate.

  - To send new notification just click on: `send notifications`, voilá! 
