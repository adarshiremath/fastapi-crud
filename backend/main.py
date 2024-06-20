from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
import models, schemas, crud
from database import SessionLocal, engine, Base

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/produce/", response_model=schemas.Produce)
def create_produce(produce: schemas.ProduceCreate, db: Session = Depends(get_db)):
    return crud.create_produce(db=db, produce=produce)

@app.get("/produce/{produce_id}", response_model=schemas.Produce)
def read_produce(produce_id: int, db: Session = Depends(get_db)):
    db_produce = crud.get_produce(db, produce_id=produce_id)
    if db_produce is None:
        raise HTTPException(status_code=404, detail="Produce not found")
    return db_produce

@app.get("/produce/", response_model=list[schemas.Produce])
def read_produce_list(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    produce_list = crud.get_produce_list(db, skip=skip, limit=limit)
    return produce_list

@app.put("/produce/{produce_id}", response_model=schemas.Produce)
def update_produce(produce_id: int, produce: schemas.ProduceCreate, db: Session = Depends(get_db)):
    db_produce = crud.update_produce(db, produce_id=produce_id, produce=produce)
    if db_produce is None:
        raise HTTPException(status_code=404, detail="Produce not found")
    return db_produce

@app.delete("/produce/{produce_id}", response_model=schemas.Produce)
def delete_produce(produce_id: int, db: Session = Depends(get_db)):
    db_produce = crud.delete_produce(db, produce_id=produce_id)
    if db_produce is None:
        raise HTTPException(status_code=404, detail="Produce not found")
    return db_produce
