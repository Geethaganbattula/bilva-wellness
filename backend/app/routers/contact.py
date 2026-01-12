from fastapi import APIRouter

router = APIRouter(prefix="/contact", tags=["Contact"])

@router.post("/")
def contact_us(data: dict):
    return {"message": "Thank you, we will contact you soon"}
