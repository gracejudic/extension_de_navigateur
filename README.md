OBJECTIFS : 

Collaboration - partage de tâches - amélioration niveau logique et algorithmique - 

Mise en commun pour que chacun comprenne le code des autres

Communication - Stand-up matin midi et rétrospective le soir - Prendre le temps d’expliquer son code 

+

MÉTHODO DU PROJET :

Temps de groupe aux moments clés de la journée (matin, début d’après-midi, clotûre)

Poser les bases du projet en mob programming + respect du temps de clavier et de temps de pause + faire appel aux personnes qui ne tapent pas pour faire des recherches ou aider

Une branche par fonctionnalité 

Prendre deux pauses par jour  (~ 11h, ~15h)

Faire des maquettes (wireframe, appli)


GIT FLOW : 

Avant de commencer :
git checkout dev : on se place sur la branche dev
git pull origin dev : on s'assure de récupérer les mises à jour de la branche dev
git branch feature/(nom-de-la-fonctionnalité) : on crée une nouvelle branche de fonctionnalité
git checkout feature/(nom-de-la-fonctionnalité) : on se place sur la nouvelle branche de fonctionnalité

Après avoir effectué des modifications :
npm run prettier:lint : on formate le code et on vérifie les erreurs
git add . : on ajoute les fichiers modifiés
git commit -m "message" : on commit les modifications
git push origin feature/(nom-de-la-fonctionnalité) : on push la branche de fonctionnalité sur le repo distant
on crée une pull request sur github pour merger la branche de fonctionnalité sur la branche dev
En cas de conflit, on résout le conflit en local, on commit et on push à nouveau
Code review de la branche dev (en équipe)

récupération des mises à jour de la branche dev
DÉTAILS DU MVP:

Personnaliser les pages WEB:

changer la font - taille, couleur, police et interlignage


APRÈS MVP : 
proposer mode nuit 
lire balises des images au hover de la souris



