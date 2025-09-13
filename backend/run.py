import uvicorn
import asyncio
from presentations.app import app
from presentations.dispatcher import dp, bot
from utils.logs import configure_logging, logger

async def start_polling():
    await dp.start_polling(bot)

async def start_uvicorn():
    config = uvicorn.Config(app, host="0.0.0.0", port=6812)
    server = uvicorn.Server(config)
    await server.serve()

async def main():
    await asyncio.gather(start_uvicorn(), start_polling())

if __name__ == "__main__":
    configure_logging()
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        logger.info("keyboard exit")
