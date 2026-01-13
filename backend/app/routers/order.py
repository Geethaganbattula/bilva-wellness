from fastapi import APIRouter
from datetime import datetime
from pydantic import BaseModel
from app.services import order_service

router = APIRouter(prefix="/order", tags=["Order"])

ORDERS = []

class OrderRequest(BaseModel):
    customer: dict
    products: list
    total: int

@router.post("/place")
def place_order(data: OrderRequest):
    order_id = order_service.generate_order_id()

    order = {
        "id": order_id,
        "date": datetime.now().strftime("%d %b %Y"),
        "total": data.total,
        "status": "Placed",
        "customer": data.customer,
        "products": data.products,
    }

    ORDERS.append(order)

    return {
        "success": True,
        "order_id": order_id
    }

@router.get("/list")
def list_orders():
    return {
        "success": True,
        "orders": ORDERS
    }
