from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from app.routers import product, order

app = FastAPI(
    title="Bilva Wellness API",
    version="1.0.0"
)

# 🔥 CORS FIX (LOCAL + VERCEL + RENDER)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "https://bilvawellness-z8n1-q37xxfn8e-geethas-projects-7db568ac.vercel.app",
        "https://bilva-wellness-backend.onrender.com",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ STATIC FILES
app.mount(
    "/static",
    StaticFiles(directory="app/static"),
    name="static"
)

# ✅ ROUTERS
app.include_router(product.router)
app.include_router(order.router)

# ✅ ROOT CHECK (optional but helpful)
@app.get("/")
def root():
    return {"message": "Bilva Wellness Backend Running"}
