from pydantic_settings import BaseSettings, SettingsConfigDict

class TelegramBotSettings(BaseSettings):
    # Эта строчка автоматически найдет переменную BOT_TOKEN в .env файле
    # и проверит, что это строка.
    bot_token: str

    # Эта строчка найдет ADMIN_ID и преобразует его в число.
    webapp_url: str

    # Настройки для Pydantic, чтобы он читал из .env файла
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")

