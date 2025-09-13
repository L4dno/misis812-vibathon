# сущности в проекте

from sqlalchemy import ForeignKey, String, BigInteger, Date, Integer
from sqlalchemy.orm import Mapped, mapped_column, DeclarativeBase, relationship
from sqlalchemy.ext.asyncio import AsyncAttrs, async_sessionmaker, create_async_engine
from typing import List

# Настройка соединения с базой данных
engine = create_async_engine(url="sqlite+aiosqlite:///db/db.sqlite3", echo=True)
async_session = async_sessionmaker(bind=engine, expire_on_commit=False)

class Base(AsyncAttrs, DeclarativeBase):
    pass

class User(Base):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(primary_key=True)
    tg_id = mapped_column(BigInteger, unique=True)
    rating: Mapped[int] = mapped_column(default=0)
    first_name: Mapped[str] = mapped_column(String(128))
    last_name: Mapped[str] = mapped_column(String(128), nullable=True)
    is_admin: Mapped[bool] = mapped_column(default=False)
    photo_url: Mapped[str] = mapped_column(String(256), nullable=True)

    # Отношение к бронированиям пользователя
    bookings: Mapped[List["Booking"]] = relationship(back_populates="user")

class Booking(Base):
    __tablename__ = "bookings"

    id: Mapped[int] = mapped_column(primary_key=True)
    booking_date: Mapped[Date] = mapped_column(Date)
    start_hour: Mapped[int] = mapped_column(Integer)
    end_hour: Mapped[int] = mapped_column(Integer)
    
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"))
    
    # Отношение к пользователю, который сделал бронирование
    user: Mapped["User"] = relationship(back_populates="bookings")


async def init_db():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)