
# Bitcoin Bot - Server

### But
Contruire un bot, branché sur DialogFlow et qui irait chercher divers informations sur les Crypto-monnaies.

### Technologies

- Node JS
- Express.js
- DialogFlow
- API CoinMarketCap

### Installation 
Installation docker : 
// TODO : installation des dépendences à mettre en place et rédiger 

**En local**  
- Il faut lancer les containers du Nginx 
- Ajouter `bb.local` dans la liste des hosts
- Lancer le container du serveur NodeJS : 
> docker-compose -f docker-compose.dev.yml up -d

ou

> wdcf up -d


## Etat lors de la 1ere journée Acceleration (25/01/2018)
Toute la partie serveur est sous Docker. 

La base Node JS est en place avec une architecture de fichiers proche de Symfony et un système de Routage basique mais modulable.

l'URL http://bb.local/price/bitcoin/now permet d'avoir le cours du Bitcoin du jours car le serveur intérroge l'API de CoinMarketCap.

### Améliorations immédiates 

 - Installation des vendors npm via docker
 - En recette avoir un "watch" pour éviter de devoir redémarrer le container pour avoir les modifications dans le navigateur
 - Passer par un model pour uniformiser les datas de l'API avant de les exploiter dans le controlleur. 
 
## Etat lors de la 2ème journée Acceleration (15/02/2018)
Passage du projet sur Heroku (https://dashboard.heroku.com/apps/bitcoin-bot-server-le-retour/) pour pouvoir le déployer : https://bitcoin-bot-server-le-retour.herokuapp.com/price/LTC
Nous avons aussi enrichi la partie connexion à l'API en proposant de choisir la date pour laquelle on souhaite le prix d'une cryptomonnaie passée en paramètre. Pour mettre en place cette fonctionnalité, nous avons du changer d'API : cryptocompare.com
Pour finir, une fois le projet hébergé, il  a été connecté à DialogFlow pour permettre d'interroger le programme en langage naturel.
