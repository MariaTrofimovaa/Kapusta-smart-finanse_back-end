const getCurrentUser = async (req, res, next) => {
  try {
    const { email } = req.user; // забираем данные пользователя
    res.json({
      status: "success",
      code: 200,
      data: { email },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getCurrentUser;
