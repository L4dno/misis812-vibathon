from sqlalchemy import select, update, delete, func
from models.models import User, async_session, Task
from pydantic import BaseModel, ConfigDict
from typing import List

class TaskSchema(BaseModel):
    id: int
    title: str
    completed: bool
    user: int

    model_config = ConfigDict(from_attributes=True)

async def add_user(tg_id: int) -> User:
    async with async_session() as session:
        # note that scalar is in single form
        user = await session.scalar(select(User).where(User.tg_id == tg_id))
        if user:
            return user
        
        new_user = User(tg_id=tg_id)
        session.add(new_user)
        await session.commit()
        await session.refresh(new_user)
        return new_user
    
async def get_tasks(user_id):
    async with async_session() as session:
        tasks = await session.scalars(
            select(Task).where(Task.user == user_id, Task.completed == False)
        )
        serialized_tasks = [TaskSchema.model_validate(t).model_dump() for t in tasks]
        return serialized_tasks