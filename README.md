# Residential Association Management System

A comprehensive web application for managing residential associations in Kerala, India.

## Features

- **Member Management**: Resident profiles, directory, and user roles
- **Complaint Management**: Submit and track maintenance requests
- **Billing System**: Dues tracking, invoices, and online payments (Razorpay)
- **Announcements**: Community news and important notices
- **Event Management**: Schedule and manage community events
- **Document Management**: Store and share association documents
- **Voting System**: Democratic decision-making for association matters
- **Dashboard**: Overview of key metrics and activities

## Tech Stack

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- Redux Toolkit (State Management)
- React Router (Navigation)

### Backend
- Node.js with Express
- PostgreSQL (Primary Database)
- Redis (Caching)
- JWT (Authentication)
- Razorpay (Payment Processing)

### DevOps
- Docker & Docker Compose
- GitHub Actions (CI/CD)
- AWS/Cloud Deployment Ready

## Quick Start

```bash
# Clone the repository
git clone https://github.com/bijoumonk-blip/residential-association-app-.git
cd residential-association-app-

# Copy environment file
cp .env.example .env

# Start with Docker
docker-compose up -d
```

**Access Points:**
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## Documentation

See [SETUP_GUIDE.md](SETUP_GUIDE.md) for detailed setup instructions.
