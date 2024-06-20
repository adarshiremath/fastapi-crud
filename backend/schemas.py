from pydantic import BaseModel

class ProduceBase(BaseModel):
    name: str
    description: str
    price: float
    quantity: int

class ProduceCreate(ProduceBase):
    pass

class Produce(ProduceBase):
    id: int

    class Config:
        orm_mode = True
