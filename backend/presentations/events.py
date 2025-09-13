
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from models.models import Event, Attendee, async_session
from schemas.base import EventSchema, AttendeeSchema, EventCreate, AttendeeCreate
from typing import List
from datetime import date
from sqlalchemy import select, delete

router = APIRouter()

@router.post("/api/events", response_model=EventSchema)
async def create_event(event: EventCreate):
    async with async_session() as session:
        new_event = Event(date=event.date, people_count=event.people_count)
        session.add(new_event)
        await session.commit()
        await session.refresh(new_event)
        return new_event

@router.get("/api/events", response_model=List[EventSchema])
async def get_events():
    async with async_session() as session:
        result = await session.execute(select(Event))
        events = result.scalars().all()
        return events

@router.get("/api/events/{event_id}", response_model=EventSchema)
async def get_event(event_id: int):
    async with async_session() as session:
        event = await session.get(Event, event_id)
        if not event:
            raise HTTPException(status_code=404, detail="Event not found")
        return event

@router.post("/api/events/{event_id}/attendees", response_model=AttendeeSchema)
async def add_attendee(attendee: AttendeeCreate):
    async with async_session() as session:
        event = await session.get(Event, attendee.event_id)
        if not event:
            raise HTTPException(status_code=404, detail="Event not found")
        
        existing_attendee = await session.scalar(select(Attendee).where(Attendee.event_id == attendee.event_id, Attendee.user_id == attendee.user_id))
        if existing_attendee:
            raise HTTPException(status_code=400, detail="Attendee already registered")

        new_attendee = Attendee(event_id=attendee.event_id, user_id=attendee.user_id)
        session.add(new_attendee)
        await session.commit()
        await session.refresh(new_attendee)
        return new_attendee

@router.delete("/api/events/{event_id}/attendees/{user_id}")
async def remove_attendee(event_id: int, user_id: int):
    async with async_session() as session:
        result = await session.execute(delete(Attendee).where(Attendee.event_id == event_id, Attendee.user_id == user_id))
        if result.rowcount == 0:
            raise HTTPException(status_code=404, detail="Attendee not found")
        await session.commit()
        return {"status": "ok"}
