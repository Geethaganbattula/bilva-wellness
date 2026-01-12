from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from app.routers import product, order

app = FastAPI(
    title="Bilva Wellness API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ CORRECT STATIC PATH
app.mount(
    "/static",
    StaticFiles(directory="app/static"),
    name="static"
)

app.include_router(product.router)
app.include_router(order.router)
