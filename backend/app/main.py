from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from app.routers import product, order, subscribe
from app.db.database import engine
from app.models import subscriber   # 👈 VERY IMPORTANT

app = FastAPI(
    title="Bilva Wellness API",
    version="1.0.0"
)

# 🔥 CREATE TABLES
subscriber.Base.metadata.create_all(bind=engine)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount(
    "/static",
    StaticFiles(directory="app/static"),
    name="static"
)

app.include_router(product.router)
app.include_router(order.router)
app.include_router(subscribe.router)
