export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      home: "home",
      welcome: 'Welcome',
      'user-profile': 'User Profile',
      delivery: "Delivery!"
    },
    fr: {
      home: "Accueil",
      welcome: 'Bienvenue',
      'user-profile' : 'Profil utilisateur',
      delivery: "Livraison!"
    }
  }
}))
