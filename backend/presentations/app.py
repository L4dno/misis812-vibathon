
# fastapi endpoints

from fastapi import FastAPI, Depends, APIRouter
from fastapi.middleware.cors import CORSMiddleware

from utils.logs import logger
from telegram_webapp_auth.auth import WebAppUser
from .auth import get_current_user

from models.models import init_db
from contextlib import asynccontextmanager

from requests.requests import add_user
from schemas.base import Message

@asynccontextmanager
async def lifespan(app: FastAPI):
    await init_db()
    logger.info("Database initialized")
    yield

app = FastAPI(title="todo miniapp", lifespan=lifespan)

# через этот мы не получаем объект, а просто защищаем ручку
protected_router = APIRouter(
    dependencies=[Depends(get_current_user)]
)
# через этот нужно оставить Depends в параметрах для получения объекта пользователя внутри функции
router = APIRouter() 

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# эта ручка не защищена
@router.get("/api/health")
async def health():
    return {"status": "ok"}

@protected_router.post("/api/message")
async def send_message(message: Message):
    # Логика отправки сообщения.
    # Обратите внимание, что здесь нет доступа к объекту user.
    # Эта функция просто выполнится, если get_current_user не вызовет исключение.
    return {"status": "ok", "message": f"Protected message '{message.text}' sent."}

@router.get("/api/auth-data")
async def auth(user: WebAppUser = Depends(get_current_user)):
    logger.info(f"User data: {vars(user)}")
    await add_user(user)
    return {"status": "ok"}

app.include_router(protected_router)
app.include_router(router)

#app.mount("/", StaticFiles(directory="../frontend", html = True), name="view")