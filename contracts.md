# API Contracts & Integration Plan

## Current State
- Frontend is fully functional with mock data from `/app/frontend/src/data/mock.js`
- All sections render correctly with smooth animations
- No backend integration yet

## Mock Data Structure

### Data Files
- **Location**: `/app/frontend/src/data/mock.js`
- **Content**: 
  - Personal info (name, title, contact)
  - About section text
  - Skills organized by category with proficiency levels
  - Work experience with nested projects
  - Education history
  - Certifications
  - Achievements

## Backend Implementation Plan (If Requested)

### 1. Database Schema (MongoDB)

#### Portfolio Collection
```javascript
{
  _id: ObjectId,
  personal_info: {
    name: String,
    title: String,
    tagline: String,
    location: String,
    email: String,
    linkedin: String,
    github: String,
    website: String
  },
  about: {
    summary: String,
    passion: String
  },
  updated_at: Date
}
```

#### Skills Collection
```javascript
{
  _id: ObjectId,
  category: String,
  skills: [{
    name: String,
    level: Number  // 0-100
  }],
  order: Number
}
```

#### Experience Collection
```javascript
{
  _id: ObjectId,
  company: String,
  role: String,
  location: String,
  duration: String,
  description: String,
  projects: [{
    name: String,
    description: String,
    technologies: [String],
    highlights: [String]
  }],
  start_date: Date,
  end_date: Date,
  is_current: Boolean
}
```

#### Education Collection
```javascript
{
  _id: ObjectId,
  degree: String,
  institution: String,
  location: String,
  duration: String,
  cgpa: String,
  start_year: Number,
  end_year: Number
}
```

#### Certifications Collection
```javascript
{
  _id: ObjectId,
  name: String,
  issuer: String,
  year: String,
  credential_url: String
}
```

#### Achievements Collection
```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  date: Date
}
```

### 2. API Endpoints

#### GET `/api/portfolio`
- Returns complete portfolio data
- Response: All portfolio information in one object
- Used by: Frontend on initial load

#### GET `/api/skills`
- Returns all skill categories
- Response: Array of skill categories with skills
- Used by: Skills section

#### GET `/api/experience`
- Returns all work experience
- Response: Array of experience objects with projects
- Used by: Experience section

#### GET `/api/education`
- Returns education history
- Response: Array of education objects
- Used by: Education section

#### GET `/api/certifications`
- Returns all certifications
- Response: Array of certification objects
- Used by: Education section (certifications subsection)

#### GET `/api/achievements`
- Returns all achievements
- Response: Array of achievement objects
- Used by: Education section (achievements subsection)

#### Admin Endpoints (Optional)
- POST `/api/admin/portfolio` - Update portfolio info
- POST `/api/admin/skills` - Add/update skills
- POST `/api/admin/experience` - Add/update experience
- etc.

### 3. Frontend Integration Steps

#### Update API calls in components:
```javascript
// Replace mock data imports with API calls
const fetchPortfolioData = async () => {
  const response = await axios.get(`${API}/portfolio`);
  return response.data;
};
```

#### Files to modify:
1. `/app/frontend/src/components/Portfolio3D.jsx`
   - Add useEffect to fetch data on mount
   - Replace mock imports with API calls
   - Add loading states
   - Add error handling

2. Create `/app/frontend/src/services/api.js`
   - Centralize all API calls
   - Handle errors consistently
   - Export functions for each endpoint

### 4. Migration Strategy

1. **Keep mock data as fallback**: If API fails, use mock data
2. **Gradual migration**: Implement backend one section at a time
3. **Testing**: Ensure each section works before moving to next
4. **Caching**: Use React Query or similar for data caching

## Notes

- Current implementation is a fully functional frontend-only portfolio
- Backend is optional and only needed if:
  - Content needs to be updated frequently
  - Admin dashboard is required
  - Multiple users/portfolios need to be supported
  - Analytics or visitor tracking is desired

- For a single-user portfolio, mock data is sufficient
- Data can be updated by editing the mock.js file
