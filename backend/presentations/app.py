
# fastapi endpoints

from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

from utils.logs import logger
from telegram_webapp_auth.auth import WebAppUser
from .auth import get_current_user

from models.models import init_db
from contextlib import asynccontextmanager

from requests.requests import add_user, get_tasks

@asynccontextmanager
async def lifespan(app: FastAPI):
    await init_db()
    logger.info("Database initialized")
    yield

app = FastAPI(title="todo miniapp", lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/health")
async def health():
    return {"status": "ok"}

@app.get("/api/auth-data")
async def auth(user: WebAppUser = Depends(get_current_user)):
    logger.info(f"User data: {vars(WebAppUser)}")
    await add_user(user.id)
    return await get_tasks(user.id)

#app.mount("/", StaticFiles(directory="../frontend", html = True), name="view")