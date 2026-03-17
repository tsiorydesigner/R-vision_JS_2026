// Petit exemple Node.js pour débutants : Créer un serveur HTTP simple
// Node.js permet d'exécuter du JavaScript côté serveur, pas seulement dans le navigateur.

// Importer le module 'http' intégré à Node.js
// Ce module permet de créer des serveurs HTTP
const http = require('http');

// Créer un serveur HTTP
// La fonction passée en paramètre est appelée pour chaque requête reçue
const server = http.createServer((req, res) => {
  // req : objet représentant la requête du client
  // res : objet pour envoyer la réponse au client

  // Définir le code de statut HTTP (200 = OK)
  res.statusCode = 200;

  // Définir le type de contenu de la réponse (texte simple)
  res.setHeader('Content-Type', 'text/plain');

  // Envoyer la réponse et terminer la connexion
  res.end('Hello World!\n');
});

// Faire écouter le serveur sur le port 3000
// La fonction callback est appelée quand le serveur démarre
server.listen(3000, () => {
  console.log('Serveur en cours d\'exécution sur http://localhost:3000/');
});

// Pour exécuter ce code :
// 1. Ouvrez un terminal
// 2. Naviguez vers le dossier contenant ce fichier
// 3. Tapez : node nom_du_fichier.js
// 4. Ouvrez votre navigateur et allez sur http://localhost:3000/
// 5. Vous devriez voir "Hello World!" affiché

// Exemple supplémentaire : Faire une requête HTTP GET
const https = require('https'); // Pour les URLs HTTPS

// Fonction pour faire une requête GET
function faireRequeteGET(url) {
  https.get(url, (res) => {
    let data = '';

    // Recevoir les données
    res.on('data', (chunk) => {
      data += chunk;
    });

    // Fin de la réponse
    res.on('end', () => {
      console.log('Réponse reçue :', data);
    });

  }).on('error', (err) => {
    console.error('Erreur :', err.message);
  });
}

// Exemple d'utilisation
// faireRequeteGET('https://jsonplaceholder.typicode.com/posts/1');