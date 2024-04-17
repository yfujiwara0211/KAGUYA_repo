from sqlalchemy import Column, Integer, String, Float
from .database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    company = Column(String)
    username = Column(String)
    address = Column(String)
    phonenumber = Column(String)
    email = Column(String)
    hashed_password = Column(String)
    industry = Column(String)
    employees = Column(String)

class Answer(Base):
    __tablename__ = "answers"

    id = Column(Integer, primary_key=True, index=True)
    answer_date = Column(String)
    goal = Column(String)
    team_structure = Column(String)
    solo_work = Column(Float)
    remote_work = Column(Float)
    solo_web = Column(Float)
    web_mtg = Column(Float)
    atmosphere = Column(String)
    color = Column(String)
    well_being = Column(String)
    office_capacity = Column(Integer)
    office_size = Column(Integer)
    token = Column(String)  # トークンを格納するフィールドを追加
