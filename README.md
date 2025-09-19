# 🐾 Random Animal Image App with PostgreSQL

This project demonstrates deploying a **Node.js application** along with a **PostgreSQL database** on Kubernetes.  
The Node.js app serves random animal images from a local folder, and PostgreSQL is deployed as a backend service.

---

## 📦 Features
- Node.js app containerized with Docker
- PostgreSQL deployed in Kubernetes
- Configurations managed via ConfigMaps
- Organized deployment with a custom namespace

---

## 📂 Project Structure
.
├── Dockerfile
├── package.json
├── app.js # Node.js app
├── images/ # Animal images
├── k8s/
│ ├── namespace.yml # Namespace definition
│ ├── nodejs-deployment.yml # Node.js Deployment
│ ├── nodejs-service.yml # Node.js Service (NodePort)
│ ├── postgresql-deployment.yml # PostgreSQL Deployment
│ ├── postgres-service.yml # PostgreSQL Service (ClusterIP)
│ └── postgresql-init-configmap.yml # ConfigMap for DB init

yaml
Copy code

---

## 🚀 Run Locally (without Kubernetes)

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
Install dependencies:

bash
Copy code
npm install
Start the app:

bash
Copy code
node app.js
Open the app at http://localhost:3000

☸️ Deploy on Kubernetes
Create the namespace:


kubectl apply -f k8s/namespace.yml
Deploy PostgreSQL:

kubectl apply -f k8s/postgresql-init-configmap.yml
kubectl apply -f k8s/postgresql-deployment.yml
kubectl apply -f k8s/postgres-service.yml
Deploy the Node.js app:


kubectl apply -f k8s/nodejs-deployment.yml
kubectl apply -f k8s/nodejs-service.yml
Verify resources:


kubectl get all -n <namespace>
Access the app via NodePort:

Copy code
http://<NodeIP>:<NodePort>
Notes:
PostgreSQL is exposed inside the cluster (ClusterIP), while the Node.js service is exposed externally (NodePort).

The database is initialized using the postgresql-init-configmap.yml.
