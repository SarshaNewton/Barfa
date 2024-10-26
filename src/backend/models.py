from sqlalchemy import Column, Integer, String, BLOB, ForeignKey, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship

Base = declarative_base()

class User(Base):
    __tablename__ = 'login'

    username = Column(Integer, primary_key=True)
    first_name = Column(String(50), unique=False, nullable=False)
    last_name = Column(String(50), unique=False, nullable=False)
    user_email = Column(String(50), unique=True, nullable=False)
    credential = Column(String(50), unique=False, nullable=False)
    
    # Relationship to Events
    events = relationship('Events', back_populates='user')

    def __repr__(self):
        return f'<User(user_id={self.user_id}, first_name={self.first_name}, last_name={self.last_name}, user_email={self.user_email}, password={self.credential})>'

class Events(Base):
    __tablename__ = 'events'

    event_id = Column(Integer, primary_key=True, autoincrement=True)
    owner = Column(Integer, ForeignKey('login.user_id'), nullable=False)
    budget = Column(Integer)
    no_tasks_outs = Column(Integer)
    no_items-outs = Column(Integer)

    # Relationship to User
    user = relationship("User", back_populates="events")

    # Relationship to TranslatedFiles
    translated_files = relationship("TranslatedFile", order_by="TranslatedFile.file_id", back_populates="original_file")

    def __repr__(self):
        return f'<Events(event_id={self.event_id}, owner={self.owner}, file_name={self.file_name}, file_content={self.file_content}, original_language={self.original_language}, upload_date={self.upload_date})>'

c