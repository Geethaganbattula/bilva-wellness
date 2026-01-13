from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from app.routers import product, order

app = FastAPI(
    title="Bilva Wellness API",
    version="1.0.0"
)

# ==============================
# CORS CONFIG (IMPORTANT)
# ==============================
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 🔥 Vercel + local + future domains
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ==============================
# STATIC FILES
# ==============================
app.mount(
    "/static",
    StaticFiles(directory="app/static"),
    name="static"
)

# ==============================
# ROUTERS
# ==============================
app.include_router(product.router, prefix="/products", tags=["Products"])
app.include_router(order.router, prefix="/orders", tags=["Orders"])

# ==============================
# ROOT TEST API
# ==============================
@app.get("/")
def root():
    return {
        "status": "Bilva Wellness Backend Running",
        "docs": "/docs"
    }
