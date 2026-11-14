const logMiddleware = (req, res, next) => {
  const timeStart = new Date();

  res.on('finish', () => {
    const timeEnd = new Date();
    const duration = timeEnd - timeStart;

    console.log({
      timeStart: timeStart.toISOString(),
      timeEnd: timeEnd.toISOString(),
      duration: `${duration}ms`,
    });
  });

  next();
};

export default logMiddleware;