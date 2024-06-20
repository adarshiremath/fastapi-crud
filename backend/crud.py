from sqlalchemy.orm import Session
import models, schemas

def get_produce(db: Session, produce_id: int):
    return db.query(models.Produce).filter(models.Produce.id == produce_id).first()

def get_produce_list(db: Session, skip: int = 0, limit: int = 10):
    return db.query(models.Produce).offset(skip).limit(limit).all()

def create_produce(db: Session, produce: schemas.ProduceCreate):
    db_produce = models.Produce(**produce.dict())
    db.add(db_produce)
    db.commit()
    db.refresh(db_produce)
    return db_produce

def update_produce(db: Session, produce_id: int, produce: schemas.ProduceCreate):
    db_produce = db.query(models.Produce).filter(models.Produce.id == produce_id).first()
    if db_produce:
        for key, value in produce.dict().items():
            setattr(db_produce, key, value)
        db.commit()
        db.refresh(db_produce)
        return db_produce
    return None

def delete_produce(db: Session, produce_id: int):
    db_produce = db.query(models.Produce).filter(models.Produce.id == produce_id).first()
    if db_produce:
        db.delete(db_produce)
        db.commit()
        return db_produce
    return None
