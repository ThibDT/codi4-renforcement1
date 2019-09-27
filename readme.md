# Renforcement #1

**Tout se passe dans js/script.js, il n'est pas utile d'ouvrir les autres fichiers.
Pensez à utiliser l'inspecteur et la console !**

## Partie 1 : Communication
Le premier objectif est de pouvoir envoyer un message à Hubert, c'est-à-dire que celui-ci s'affiche dans la liste des messages prévue à cet effet.

## Partie 2 : Configuration
Cette partie se décompose en plusieurs étapes : 
- La première est de faire apparaître la modale et son layer, au clique sur le "bouton" de configuration.
- Il faut ensuite faire disparaître la modale lorsque l'on clique à côté (sur le layer).
- Place ensuite à la configuration. Lorsque l'on applique les changements de couleur de bulles, appliquer le style correspondant, à chaque bulle de message.
- Réitérer l'opération pour la couleur du texte.

## Bonus : Vérification
Définir une fonction qui, à partir d'un texte, vérifie que celui-ci correspond effectivement à un code couleurs (c'est-à-dire qu'il commence par un dièse suivi de 6 caractères, chiffre ou lettre de a à f). La fonction doit renvoyer true ou false.

Incorporer cette fonction à l'étape précédente (lors d'un changement de configuration).