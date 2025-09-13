from sqlalchemy import select
from models.models import User, async_session
from telegram_webapp_auth.auth import WebAppUser

async def add_user(user_data: WebAppUser) -> User:
    async with async_session() as session:
        # note that scalar is in single form
        user = await session.scalar(select(User).where(User.tg_id == user_data.id))
        if user:
            return user
        
        new_user = User(
            tg_id=user_data.id,
            first_name=user_data.first_name,
            last_name=user_data.last_name,
            rating=0,
            is_admin=False,
        )
        session.add(new_user)
        await session.commit()
        await session.refresh(new_user)
        return new_user