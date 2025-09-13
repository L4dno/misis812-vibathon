
# aiogram handlers

from aiogram.types import WebAppInfo
from aiogram.filters.command import Command
from aiogram import Bot, Dispatcher, types

from config import TelegramBotSettings
settings = TelegramBotSettings()

bot = Bot(token=settings.bot_token)
dp = Dispatcher()


play = types.InlineKeyboardMarkup(inline_keyboard=[
    [types.InlineKeyboardButton(text="Play", web_app=WebAppInfo(url=settings.webapp_url))]
])


@dp.message(Command("start"))
async def cmd_start(message: types.Message):
    await message.answer('Game', reply_markup=play)

