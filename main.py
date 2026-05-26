from fastapi import FastAPI
import time

# 1. Initialize the application engine
app = FastAPI(title="Core SaaS Engine", version="1.0.0")

# 2. Create a "Home" route
@app.get("/")
def home():
    return {
        "status": "online", 
        "message": "Welcome to your SaaS Backend Engine",
        "timestamp": time.time()
    }

# 3. Create a "Health Check" route for monitoring
@app.get("/health")
def health():
    return {"status": "healthy", "database": "disconnected_boilerplate"}