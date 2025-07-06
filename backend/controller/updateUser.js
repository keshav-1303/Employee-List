const User = require("../models/User");

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, title, department, role } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, email, title, department, role },
      { new: true }
    );
    res.status(200).json({
      status: 200,
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};
