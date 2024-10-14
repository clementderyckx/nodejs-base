# Login form

- Récupérer les données du formulaire
- Hasher le mot de passe avec le module `node:crypto`
- Enregister l'utilisateur dans un fichier json avec :
  - id: `uuid`
  - email: `string`
  - password: `string` : mot de passe hashé
  - token:  `jwt`

- Créer la route login
- Créer la connexion
- Enregister le token d'accés dans le local storage `token`

Le contenu de la page private doit être `Welcome to the private area` 