from sqlalchemy.orm import Session
from . import models, schemas
from datetime import datetime

def get_user_by_email(db: Session, name: str):
    return db.query(models.User).filter(models.User.email == name).first()

def create_user(db: Session, user: schemas.UserCreate, hashed_password: str):  # hashed_password 引数を追加 , hushed_password: str
    db_user = models.User(company=user.company,
                          address=user.address,
                          phonenumber=user.phonenumber,
                          email=user.email,
                          industry=user.industry,
                          employees=user.employees,
                          username=user.username,
                          hashed_password=hashed_password
                          ) # hashed_password を指定してユーザーを作成
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def submit_answers(db: Session, answers: schemas.Answers, token: str):
    answer_datetime = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    q1_answers_str = ",".join(answers.q1_answer)
    q7_answers_str = ",".join(answers.q7_answer)
    q9_answers_str = ",".join(answers.q9_answer)

    db_answer = models.Answer(
        answer_date=answer_datetime,
        goal=q1_answers_str,
        team_structure=answers.q2_answer,
        solo_work=answers.q3_answer,
        remote_work=answers.q4_answer,
        solo_web=answers.q5_answer,
        web_mtg=answers.q6_answer,
        atmosphere=q7_answers_str,
        color=answers.q8_answer,
        well_being=q9_answers_str,
        office_capacity=answers.q10_answer,
        office_size=answers.q11_answer,
        token=token,  # トークンを保存
    )
    db.add(db_answer)
    db.commit()
    db.refresh(db_answer)
    return db_answer
