import uuid
from datetime import datetime

def generate_order_id():
    date = datetime.now().strftime("%Y%m%d")
    unique = str(uuid.uuid4())[:6].upper()
    return f"ORD-{date}-{unique}"
