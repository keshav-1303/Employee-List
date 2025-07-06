const User = require("../models/User");

exports.getUser = async (req, res) => {
  try {
    const { id } = req.params;
    let userData;
    if (id) {
      userData = await User.findById(id);
    } else {
      userData = await User.find({});
    }
    res.json({ success: true, data: userData });
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};
