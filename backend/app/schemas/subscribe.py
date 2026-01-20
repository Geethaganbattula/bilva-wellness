from pydantic import BaseModel, EmailStr


class SubscribeCreate(BaseModel):
    email: EmailStr
