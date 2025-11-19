# Protection par mot de passe du site AS Studio

## 📝 Configuration effectuée

Le site est maintenant protégé par mot de passe. Voici ce qui a été mis en place :

### Fichiers créés :
1. `middleware.ts` - Vérifie l'authentification sur toutes les pages
2. `app/login/page.tsx` - Page de connexion élégante
3. `app/api/auth/login/route.ts` - API pour valider le mot de passe
4. `.env.local` - Mot de passe en local

### Mot de passe par défaut :
**`ASStudio2024`**

## 🚀 Configuration sur Vercel

Pour que le mot de passe fonctionne sur Vercel, suivez ces étapes :

1. **Allez sur votre projet Vercel** : https://vercel.com/dashboard
2. **Sélectionnez votre projet** `as_studioo`
3. **Allez dans Settings → Environment Variables**
4. **Ajoutez une nouvelle variable :**
   - Name: `SITE_PASSWORD`
   - Value: `ASStudio2024` (ou votre mot de passe personnalisé)
   - Environments: cochez **Production**, **Preview**, et **Development**
5. **Cliquez sur Save**
6. **Redéployez le site** : allez dans Deployments → cliquez sur les 3 points → Redeploy

## 🔒 Comment ça marche

1. Quand quelqu'un visite le site, il est redirigé vers `/login`
2. Il entre le mot de passe
3. Si correct, un cookie est créé pour 30 jours
4. L'utilisateur peut naviguer librement sur le site
5. Après 30 jours, il devra se reconnecter

## ✏️ Changer le mot de passe

### En local :
Éditez `.env.local` et changez la valeur de `SITE_PASSWORD`

### Sur Vercel :
1. Settings → Environment Variables
2. Modifiez la variable `SITE_PASSWORD`
3. Redéployez le site

## 🎨 Design

La page de login utilise le même design que le reste du site :
- Dégradé violet/rose
- Animations Framer Motion
- Style moderne et épuré
- Responsive mobile

## ⚠️ Important

Le fichier `.env.local` n'est **PAS** sur GitHub (pour la sécurité).
Assurez-vous d'ajouter la variable `SITE_PASSWORD` sur Vercel !
