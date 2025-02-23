export default {
  server: {
    host: true,
    allowedHosts: [
      'frontend',      // Permet l'accès depuis 'frontend' dans Docker
      'localhost',     // Permet l'accès depuis localhost
      '0.0.0.0',   // Permet l'accès depuis toute autre adresse
      'nginx'          // Permet l'accès depuis le service Nginx
    ]
  }
};
