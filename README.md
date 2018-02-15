
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


### Etat actuel
Toute la partie serveur est sous Docker. 

La base Node JS est en place avec une architecture de fichiers proche de Symfony et un système de Routage basique mais modulable.

l'URL http://bb.local/price/bitcoin/now permet d'avoir le cours du Bitcoin du jours car le serveur intérroge l'API de CoinMarketCap.

### Améliorations immédiates 

 - Installation des vendors npm via docker
 - En recette avoir un "watch" pour éviter de devoir redémarrer le container pour avoir les modifications dans le navigateur
 - Passer par un model pour uniformiser les datas de l'API avant de les exploiter dans le controlleur. 
