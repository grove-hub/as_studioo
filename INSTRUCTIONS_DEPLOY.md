# Instructions pour déployer sur Vercel

## Problème actuel
Le dépôt GitHub `grove-hub/as-studio` retourne une erreur 500 et ne peut pas être cloné par Vercel.

## Solution : Créer un nouveau dépôt

### Étape 1 : Créer le nouveau repo sur GitHub
1. Allez sur https://github.com/new
2. Nommez votre repo (ex: `as-studio`)
3. Laissez-le vide (ne cochez aucune option)
4. Cliquez sur "Create repository"

### Étape 2 : Connecter votre projet au nouveau repo
Remplacez `VOTRE-USERNAME` et `VOTRE-REPO` par vos valeurs :

```bash
cd /Users/walid/as-agency-2_0/as-studio

# Ajouter le nouveau remote
git remote add origin https://github.com/VOTRE-USERNAME/VOTRE-REPO.git

# Pousser tout le code
git push -u origin main
```

### Étape 3 : Déployer sur Vercel
1. Allez sur https://vercel.com
2. Cliquez sur "Add New Project"
3. Importez votre nouveau dépôt GitHub
4. Vercel détectera automatiquement Next.js
5. Cliquez sur "Deploy"

## Vérification que le code est correct
Les fichiers suivants ont été corrigés :
- ✅ `tsconfig.json` : `"jsx": "preserve"`
- ✅ `app/a-propos/page.tsx` : utilise `React.ReactElement` au lieu de `JSX.Element`

Le build devrait maintenant fonctionner !
