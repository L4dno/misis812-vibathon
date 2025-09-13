import logging
import sys
from loguru import logger

class InterceptHandler(logging.Handler):
    """
    Intercepts standard logging messages and redirects them to Loguru.
    """
    def emit(self, record):
        try:
            level = logger.level(record.levelname).name
        except ValueError:
            level = record.levelno

        frame, depth = logging.currentframe(), 2
        while frame and frame.f_code.co_filename == logging.__file__:
            frame = frame.f_back
            depth += 1

        logger.opt(depth=depth, exception=record.exc_info).log(level, record.getMessage())

def configure_logging():
    """
    Configures the logger for the entire application.
    This should be called once when the application starts.
    """
    # Remove any default handlers
    logger.remove()

    # Add a sink for console output
    logger.add(
        sys.stderr,
        level="INFO",
        format="<green>{time:YYYY-MM-DD HH:mm:ss}</green> | <level>{level: <8}</level> | <cyan>{name}</cyan>:<cyan>{function}</cyan>:<cyan>{line}</cyan> - <level>{message}</level>",
        colorize=True,
    )

    # Add a file sink for detailed logging
    logger.add(
        "logs/app.log",
        level="DEBUG",
        rotation="10 MB",
        retention="10 days",
        format="{time:YYYY-MM-DD HH:mm:ss} | {level: <8} | {name}:{function}:{line} - {message}",
        enqueue=True,  # Make it process-safe
        backtrace=True,
        diagnose=True,
    )

    # Configure standard logging to use the InterceptHandler, effectively redirecting all standard logs to Loguru
    logging.basicConfig(handlers=[InterceptHandler()], level=0, force=True)

    # Set the level for other loggers to prevent them from being too verbose
    logging.getLogger("uvicorn").setLevel(logging.INFO)
    logging.getLogger("aiogram").setLevel(logging.INFO)

    logger.info("Logger has been configured.")

# The logger object can be imported from this module in other parts of the application
# Example: from shared.logs import logger