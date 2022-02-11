# Publier une application strapi sur heroku

je me suis aider de la documentation de strapi: https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment/hosting-guides/heroku.html#heroku-install-requirements

- initialiser le projet avec la commande 'npx create-strapi-app@latest charles-cantin-serveur --quickstart'
- lancer le serveur de développement avec la commande 'npm run develop'
- configurer le projet avec interface graphique de strapi
- configure un basse de donné PosgreSQL car heroku ne prend pas en charge sqlite
- créer un nouveau dépôt sur github
- créer une nouveaux projet sur le site heroku et le connecter au dépôt github
- ajouter le dépôt github au projet local avec la command 'git remote add origin nom-du-projet'
- commité le projet avec la command 'git add .' et 'git commit – m"message" '
- publier le projet avec la command 'git push -u origin master'
- Heroku va détecter les modifications sur le projet github et va déployer l'application
