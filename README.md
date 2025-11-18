# 🎬 as_studio - Studio de Création Premium à Bruxelles

Site web ultra-moderne pour as_studio, spécialisé dans les studios de podcast, vidéo et photo à Bruxelles.

## ✨ Caractéristiques

### Direction Artistique
- **Design minimaliste et premium** avec beaucoup d'espace blanc
- **Palette de couleurs** : Dégradés violets-roses (#976EFD → #FFDEFC) + touches pastel
- **Typographie élégante** : Police Geist sans-serif moderne
- **Glassmorphism** et ombres douces pour un rendu premium
- **Animations Framer Motion** fluides et artistiques

### Pages Créées
1. **Home (/)** - Page d'accueil avec hero impressionnant, 3 offres studio, raisons de choisir as_studio, équipements, cibles, et blog
2. **Studios (/studios)** - Détails des 3 types de studios (Podcast, Vidéo, Photo) avec équipements et formules
3. **À propos (/a-propos)** - Histoire, philosophie, timeline et valeurs du studio
4. **Blog (/blog)** - Liste des articles avec filtres par catégorie
5. **Article (/blog/[slug])** - Template dynamique pour articles de blog
6. **Contact (/contact)** - Formulaire complet + carte Google Maps
7. **Mentions légales (/mentions-legales)** - Informations légales

### Fonctionnalités Techniques

#### SEO Optimisé
- Métadonnées complètes (title, description, keywords)
- Open Graph tags pour réseaux sociaux
- Twitter Cards
- JSON-LD structured data (LocalBusiness, Organization, WebSite)
- Optimisé pour les mots-clés : "studio podcast bruxelles", "studio vidéo bruxelles", "studio photo bruxelles"

#### Animations Avancées
- Transitions de page fluides (fade + slide + scale)
- Animations au scroll avec `whileInView`
- Hover effects magnétiques sur boutons
- Formes abstraites animées en arrière-plan (parallax)
- Stagger animations pour les listes

#### Responsive Design
- Mobile-first approach
- Burger menu animé sur mobile
- Grilles adaptatives
- Images optimisées avec Next.js Image

#### Blog System
- 6 articles pré-écrits avec contenu complet
- Filtrage par catégorie
- Articles liés (related posts)
- Temps de lecture estimé
- Structure markdown dans le code

## 🚀 Technologies

- **Framework** : Next.js 14 (App Router)
- **Language** : TypeScript
- **Styling** : TailwindCSS v4
- **Animations** : Framer Motion
- **Images** : Next.js Image (optimisation automatique)
- **Fonts** : Geist (Google Fonts)

## 📦 Installation

```bash
npm install
```

## 🛠️ Développement

```bash
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 🏗️ Build Production

```bash
npm run build
npm start
```

## 📁 Structure du Projet

```
as-studio/
├── app/
│   ├── page.tsx                    # Home
│   ├── studios/
│   │   └── page.tsx                # Studios
│   ├── a-propos/
│   │   └── page.tsx                # À propos
│   ├── blog/
│   │   ├── page.tsx                # Blog listing
│   │   └── [slug]/
│   │       └── page.tsx            # Article template
│   ├── contact/
│   │   └── page.tsx                # Contact
│   ├── mentions-legales/
│   │   └── page.tsx                # Mentions légales
│   ├── layout.tsx                  # Root layout
│   └── globals.css                 # Global styles
├── components/
│   ├── Header.tsx                  # Header avec navigation
│   ├── Footer.tsx                  # Footer avec infos
│   ├── Button.tsx                  # Bouton réutilisable
│   ├── PageTransition.tsx          # Transitions
│   └── JsonLd.tsx                  # SEO structured data
├── lib/
│   └── data/
│       └── blogPosts.ts            # Données blog
└── public/                         # Assets statiques
```

## 🎨 Direction Artistique

### Couleurs
- **Gradient principal** : `linear-gradient(90deg, #976EFD, #FFDEFC)`
- **Rose pastel** : `#FDADE1`
- **Violet pastel** : `#B8ADFF`
- **Fond** : Blanc avec touches de dégradés subtils

### Classes CSS Personnalisées
- `.gradient-primary` - Dégradé de fond
- `.gradient-text` - Texte dégradé
- `.gradient-border` - Bordure dégradée
- `.glass` - Effet glassmorphism

## 📍 Informations de Contact (à intégrer)

- **Adresse** : Chau. de Wavre 1259, 1160 Auderghem
- **Téléphone** : 0486 16 78 25
- **Réseaux sociaux** : Instagram, TikTok

## 🔄 Prochaines Étapes (Optionnel)

1. **Logo** : Remplacer le placeholder "as" par le vrai logo
2. **Images** : Remplacer les images Unsplash par les vraies photos du studio
3. **CMS** : Intégrer un CMS (Sanity, Contentful) pour le blog
4. **Formulaire** : Connecter le formulaire à un service (Formspree, SendGrid)
5. **Analytics** : Ajouter Google Analytics / Plausible
6. **i18n** : Ajouter la traduction EN si nécessaire

## 📝 Notes Importantes

- **Aucun prix affiché** : Conformément à la demande, aucun tarif n'est mentionné
- **Sur réservation** : Tous les services sont présentés comme "sur réservation uniquement"
- **SEO local** : Optimisé pour Bruxelles et Auderghem
- **Contenu blog** : 6 articles complets prêts à l'emploi

## 🎯 Optimisations SEO

Le site est optimisé pour les requêtes :
- "studio podcast bruxelles"
- "studio vidéo bruxelles"
- "studio photo bruxelles"
- "location studio bruxelles"
- "studio enregistrement bruxelles"

## 📄 License

© 2025 as_studio. Tous droits réservés.

---

**Crafted with passion by Claude Code**
