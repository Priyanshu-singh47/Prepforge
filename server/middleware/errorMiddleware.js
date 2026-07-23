const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

    res.status(statusCode).json({
        success: false,
        message: err.message || "Internal Server Error",
        data: null,
        ...(process.env.NODE_ENV === "development" && {
            stack: err.stack,
        }),
    });
};

module.exports = errorHandler;