# Development Environment Setup Guide

## Quick Start (Docker - Recommended)

### Prerequisites
- Docker Desktop
- Git
- 4GB RAM, 2GB free disk space

### Steps

1. **Clone Repository**
   ```bash
   git clone https://github.com/bijoumonk-blip/residential-association-app-.git
   cd residential-association-app-
   ```

2. **Configure Environment**
   ```bash
   cp .env.example .env
   ```

3. **Start All Services**
   ```bash
   docker-compose up -d
   ```

4. **Access Applications**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - PostgreSQL: localhost:5432
   - Redis: localhost:6379

5. **View Logs**
   ```bash
   docker-compose logs -f
   ```

6. **Stop Services**
   ```bash
   docker-compose down
   ```

---

## Manual Setup (Local Development)

### Backend Setup

1. **Create Database**
   ```bash
   psql -U postgres
   CREATE DATABASE residential_association;
   ```

2. **Install & Run**
   ```bash
   cd backend
   npm install
   npm run dev
   ```

### Frontend Setup

1. **Install & Run**
   ```bash
   cd frontend
   npm install
   npm start
   ```

---

## Troubleshooting

### Port Already in Use
```bash
lsof -i :3000
kill -9 <PID>
```

### Docker Issues
```bash
docker-compose down -v
docker-compose up -d --build
```

## Next Steps

1. Review project structure
2. Start implementing features
3. Create feature branches for development
