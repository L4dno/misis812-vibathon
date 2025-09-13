from pydantic import BaseModel, ConfigDict
from datetime import date
from typing import List

class Message(BaseModel):
    text: str

class AttendeeBase(BaseModel):
    user_id: int
    event_id: int

class AttendeeCreate(AttendeeBase):
    pass

class AttendeeSchema(AttendeeBase):
    id: int

    model_config = ConfigDict(from_attributes=True)

class EventBase(BaseModel):
    date: date
    people_count: int

class EventCreate(EventBase):
    pass

class EventSchema(EventBase):
    id: int
    attendees: List[AttendeeSchema] = []

    model_config = ConfigDict(from_attributes=True)