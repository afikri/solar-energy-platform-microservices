# Solar Energy Platform – Microservices Backend Demo

This project demonstrates a backend architecture for a pay-as-you-go solar energy platform similar to systems used by solar energy providers in emerging markets.

The goal of this project is to showcase modern backend engineering practices including microservices architecture, REST APIs, SQL and NoSQL databases, and automated testing.

## Architecture

The system is composed of multiple independent microservices:

- API Gateway
- Customer Service
- Device Service
- Payment Service

Each service runs independently and communicates through REST APIs and event messaging.

## Technology Stack

Backend
- Node.js
- TypeScript
- Express

Database
- PostgreSQL (relational data)
- MongoDB (device telemetry)

Infrastructure
- Redis (caching and messaging)
- Docker (containerization)

Development Tools
- TypeORM
- Jest (automated testing)
- GitHub

## Microservices

### Customer Service
Manages customer accounts and household registration.

### Device Service
Manages solar devices installed in households.

### Payment Service
Handles loan payments and triggers device activation events.

### API Gateway
Central entry point routing requests to backend services.

## Example Flow

1. A new customer registers in the system
2. A solar device is assigned to the customer
3. The customer makes a payment
4. Payment service emits a payment event
5. Device service activates the solar device

## Running the Project
