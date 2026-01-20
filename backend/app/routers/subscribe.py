from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.models.subscriber import Subscriber
from app.schemas.subscribe import SubscribeCreate


router = APIRouter(prefix="/subscribe", tags=["Subscribe"])

@router.post("/")
def subscribe(data: SubscribeCreate, db: Session = Depends(get_db)):
    existing = db.query(Subscriber).filter(
        Subscriber.email == data.email
    ).first()

    if existing:
        raise HTTPException(status_code=400, detail="Email already subscribed")

    subscriber = Subscriber(email=data.email)
    db.add(subscriber)
    db.commit()
    db.refresh(subscriber)

    return {"message": "Subscribed successfully"}

