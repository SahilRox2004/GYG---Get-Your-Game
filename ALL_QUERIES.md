# GYG Website - All Database & API Queries

This document contains ALL queries used in the GYG gaming website.

---

## 🗄️ MONGODB QUERIES

### User Schema
```javascript
{
  username: String (unique, required),
  email: String (unique, required, lowercase),
  password: String (hashed, required),
  favourites: [{
    gameId: Number,
    title: String,
    cover: String
  }],
  wishlist: [{
    gameId: Number,
    title: String,
    cover: String
  }],
  timestamps: true
}
```

### 1. User Signup
```javascript
// Check if user exists
User.findOne({ email })

// Create new user
User.create({
  username,
  email,
  password: hashedPassword
})
```

### 2. User Signin
```javascript
// Find user by email
User.findOne({ email })

// Verify password
bcrypt.compare(password, user.password)

// Generate JWT
jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '7d' })
```

### 3. Get User Profile
```javascript
User.findById(req.userId).select('-password')
```

### 4. Add to Favourites/Wishlist
```javascript
// Find user
User.findById(req.userId)

// Check if already exists
user[list].some(game => game.gameId === numericGameId)

// Add game
user[list].push({
  gameId: numericGameId,
  title: name,
  cover: image
})

// Save
user.save()
```

### 5. Remove from Favourites/Wishlist
```javascript
// Find user
User.findById(req.userId)

// Remove game
user[list] = user[list].filter(game => game.gameId !== gameId)

// Save
user.save()
```

---

## 🎮 IGDB API QUERIES

### 1. Home Page Hero
```sql
fields
  id,
  name,
  cover.image_id,
  artworks.image_id,
  first_release_date,
  rating,
  summary;

where category = 0 &
  total_rating_count > 500;

sort total_rating desc;

limit 1;
```

### 2. Trending Games
```sql
fields
  id,
  name,
  cover.image_id,
  rating;

where category = 0 &
  total_rating_count > 500;

sort follows desc;

limit 20;
```

### 3. Search Games
```sql
fields
  name,
  cover.image_id,
  screenshots.image_id,
  artworks.image_id,
  platforms.name,
  rating,
  version_parent,
  first_release_date;

search "{searchTerm}";

where
  cover != null &
  version_parent = null;

limit 20;
```

### 4. Upcoming Games
```sql
fields
  id,
  name,
  cover.image_id,
  first_release_date,
  hypes,
  rating,
  summary,
  platforms.name;

where
  first_release_date > {currentTimestamp} &
  first_release_date < {futureTimestamp} &
  category = 0 &
  version_parent = null &
  cover != null;

sort hypes desc;

limit 50;
```

### 5. Released Today
```sql
fields
  id,
  name,
  cover.image_id,
  first_release_date,
  rating,
  platforms.name;

where
  first_release_date >= {todayStart} &
  first_release_date < {todayEnd} &
  category = 0;

sort first_release_date desc;

limit 20;
```

### 6. Game Details (Complete)
```sql
fields
  id,
  name,
  summary,
  storyline,
  cover.image_id,
  screenshots.image_id,
  artworks.image_id,
  videos.*,
  genres.name,
  themes.name,
  platforms.name,
  involved_companies.company.name,
  involved_companies.developer,
  involved_companies.publisher,
  first_release_date,
  rating,
  aggregated_rating,
  aggregated_rating_count,
  total_rating,
  total_rating_count,
  age_ratings.*,
  websites.*,
  game_modes.name,
  player_perspectives.name,
  release_dates.*,
  franchise.name,
  franchises.name,
  collection.name,
  collections.name,
  version_parent,
  version_title,
  parent_game.name,
  expansions.name,
  expansions.id,
  expansions.cover.image_id,
  expansions.first_release_date,
  standalone_expansions.name,
  standalone_expansions.id,
  dlcs.name,
  dlcs.id,
  dlcs.cover.image_id,
  similar_games.name,
  similar_games.id,
  similar_games.cover.image_id,
  similar_games.rating;

where id = {gameId};
```

### 7. Similar Games
```sql
fields
  id,
  name,
  cover.image_id,
  rating,
  first_release_date;

where
  similar_games = ({gameId}) &
  category = 0 &
  cover != null;

sort rating desc;

limit 20;
```

### 8. DLC & Expansions
```sql
-- Expansions
fields
  id,
  name,
  cover.image_id,
  summary,
  first_release_date,
  rating;

where
  parent_game = {gameId} &
  category = 1;

sort first_release_date asc;

-- DLC
fields
  id,
  name,
  cover.image_id,
  summary,
  first_release_date,
  rating;

where
  parent_game = {gameId} &
  category = 2;

sort first_release_date asc;
```

### 9. Platform Games
```sql
-- Get Platform ID
fields name, id;
where name ~ *"{platformName}"*;
limit 1;

-- Popular Games
fields
  id,
  name,
  cover.image_id,
  rating,
  total_rating_count;

where
  platforms = ({platformId}) &
  category = 0 &
  cover != null &
  total_rating_count > 10;

sort total_rating_count desc;
limit 40;

-- Highest Rated
where
  platforms = ({platformId}) &
  category = 0 &
  cover != null;

sort rating desc;
limit 40;

-- Upcoming
where
  platforms = ({platformId}) &
  first_release_date > {currentTime} &
  category = 0 &
  cover != null;

sort hypes desc;
limit 40;

-- Exclusives
where
  platforms = ({platformId}) &
  category = 0 &
  cover != null;

sort rating desc;
limit 40;
```

### 10. Company Games
```sql
-- Get Company ID
fields name, id;
search "{companyName}";
where name ~ *"{companyName}"*;
limit 1;

-- Get Games
fields
  id,
  name,
  cover.image_id,
  rating,
  first_release_date;

where
  involved_companies.company = ({companyId}) &
  category = 0 &
  cover != null;

sort rating desc;
limit 50;
```

### 11. Hero Carousel (Most Anticipated)
```sql
fields
  id,
  name,
  summary,
  cover.image_id,
  screenshots.image_id,
  artworks.image_id,
  first_release_date,
  hypes;

where
  first_release_date > {currentTime} &
  first_release_date < {futureTime} &
  category = 0 &
  hypes > 10 &
  cover != null &
  version_parent = null;

sort hypes desc;

limit 10;
```

### 12. Collections (Per Game)
```sql
fields
  id,
  name,
  summary,
  cover.image_id,
  screenshots.image_id,
  artworks.image_id,
  rating,
  total_rating,
  total_rating_count,
  first_release_date,
  version_parent;

search "{gameName}";

where
  cover != null &
  version_parent = null;

limit 10;
```

---

## 📰 NEWS API QUERY

```javascript
GET https://newsapi.org/v2/everything

params: {
  q: "video games OR gaming",
  language: "en",
  sortBy: "publishedAt",
  pageSize: 20,
  apiKey: NEWS_API_KEY
}
```

---

## 🤖 GROQ AI QUERY

```javascript
POST https://api.groq.com/openai/v1/chat/completions

body: {
  model: "mixtral-8x7b-32768",
  messages: [
    {
      role: "system",
      content: "You are a gaming expert providing comprehensive game guides..."
    },
    {
      role: "user",
      content: "Create a comprehensive guide for: {gameName}"
    }
  ],
  temperature: 0.7,
  max_tokens: 2000
}
```

---

## 🔐 TWITCH OAUTH (IGDB Authentication)

```javascript
POST https://id.twitch.tv/oauth2/token

params: {
  client_id: CLIENT_ID,
  client_secret: CLIENT_SECRET,
  grant_type: "client_credentials"
}
```

---

## 🎯 COLLECTION TYPES

### Available Collections:
1. **open-world** - 15 open world games
2. **horror** - 15 horror games
3. **action** - 15 action games
4. **superhero** - 15 superhero games
5. **scifi** - 15 sci-fi games

---

## 📊 QUERY STATISTICS

- **Total Endpoints**: 19+
- **MongoDB Operations**: 5
- **IGDB Queries**: 14+
- **External APIs**: 3
- **Collections**: 5 curated sets

---

## 🔧 QUERY PATTERNS

### Standard IGDB Filters
```sql
where category = 0 &          -- Main games only
  cover != null &              -- Has cover
  version_parent = null        -- Not a remaster
```

### Popular Games
```sql
where total_rating_count > 500 &
  rating > 70
sort total_rating desc
```

### Upcoming
```sql
where first_release_date > {now} &
  hypes > 10
sort hypes desc
```

---

## 🌐 API ENDPOINTS USED

### IGDB
- Base: `https://api.igdb.com/v4/`
- Endpoints: `/games`, `/platforms`, `/companies`, `/release_dates`

### News API
- Base: `https://newsapi.org/v2/`
- Endpoint: `/everything`

### Groq AI
- Base: `https://api.groq.com/openai/v1/`
- Endpoint: `/chat/completions`

### Twitch OAuth
- `https://id.twitch.tv/oauth2/token`

---

## 🖼️ IMAGE URLs

### Cover Images
```
https://images.igdb.com/igdb/image/upload/t_cover_big/{image_id}.jpg
Size: 264x352px
```

### Backgrounds
```
https://images.igdb.com/igdb/image/upload/t_1080p/{image_id}.jpg
Size: 1920x1080px
```

---

## 🔑 ENVIRONMENT VARIABLES

```env
MONGODB_URI=mongodb+srv://...
CLIENT_ID=twitch_client_id
CLIENT_SECRET=twitch_client_secret
JWT_SECRET=jwt_secret
NEWS_API_KEY=news_api_key
GROQ_API_KEY=groq_api_key
PORT=5000
```

---

**Document Generated**: Today
**Total Queries**: 19+ different operations
**APIs**: MongoDB, IGDB, News API, Groq AI
