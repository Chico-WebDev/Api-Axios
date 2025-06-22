Dans ce point de contrôle, nous allons utiliser une API qui nous fournit la liste des utilisateurs. Suivez simplement les instructions :


Instructions
Créez un projet en utilisant create-react-app.
Créer le fichier UserList.js dans le dossier src
Installer axios.
Vous allez utiliser l'API jsonplaceholder pour obtenir la liste des utilisateurs 
Utiliser axios pour obtenir des données à partir d'un lien à l'intérieur des hooks useEffect
Utilisez les hooks UseState pour enregistrer les données dans l'état listOfUSer 
Map listOfUser pour afficher la liste des utilisateurs à l'écran 
Personnalisez votre application comme vous le souhaitez

📄 Projet : Affichage d'une liste d'utilisateurs via API
🎯 Objectif
Ce projet a pour but de consommer une API REST (jsonplaceholder) en utilisant React et Axios pour récupérer et afficher dynamiquement une liste d'utilisateurs.

🧩 Fonctionnalités
🔄 Requête GET vers l’API https://jsonplaceholder.typicode.com/users

📦 Utilisation de useState pour stocker les données

⚙️ Utilisation de useEffect pour déclencher l'appel API au montage

🔍 Affichage dynamique avec map()

🔐 Gestion d’erreur avec try...catch

🎨 Personnalisation de l’interface avec TailwindCSS

🛠️ Technologies utilisées
Outil / Librairie	Utilisation
React	Interface utilisateur
Axios	Requête HTTP vers l’API
TailwindCSS (optionnel)	Design réactif et moderne
useState / useEffect	Hooks pour gérer l'état et le cycle de vie

🧪 Exemple d'appel API avec gestion d'erreur
js
useEffect(() => {
  const fetchUsers = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      setListOfUsers(res.data);
    } catch (error) {
      console.error("Erreur lors du chargement des utilisateurs :", error);
    }
  };

  fetchUsers();
}, []);


🚀 Lancer le projet
Cloner le dépôt ou créer une app :
npx create-react-app user-list-app
cd user-list-app


Installer Axios :
npm install axios


Démarrer le projet :
npm start