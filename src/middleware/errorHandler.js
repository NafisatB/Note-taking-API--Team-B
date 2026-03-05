const errorHandler = (err, req, res, next) => {
  console.error(err.message);

  res.status(500).json({
    error: "Server error"
  });
};

module.exports = errorHandler;