from fastapi import APIRouter # type: ignore
from datetime import datetime
from app.services import order_service

router = APIRouter(prefix="/order", tags=["Order"])

# 🔴 TEMP storage (server restart ayithe clear avuthundi)
ORDERS = []

@router.post("/place")
def place_order(data: dict):
    order_id = order_service.generate_order_id()

    order = {
        "id": order_id,
        "date": datetime.now().strftime("%d %b %Y"),
        "total": data.get("total", 0),
        "status": "Placed",
        "customer": data.get("customer"),
        "products": data.get("products"),
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
