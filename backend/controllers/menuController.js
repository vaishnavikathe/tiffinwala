import Menu from "../models/menu.js";

// CREATE MENU
export const createMenu = async (req, res) => {
  try {
    const vendorId = req.user.id; // from protectVendor

    const { day, mealType, items } = req.body;

    const menu = await Menu.create({
      vendorId,
      day,
      mealType,
      items
    });

    res.status(201).json({
      message: "Menu created successfully",
      menu
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// GET ALL MENUS (vendor)
export const getMenus = async (req, res) => {
  try {
    const vendorId = req.user.id;

    const menus = await Menu.find({ vendorId })
      .sort({ createdAt: -1 });

    res.json(menus);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE MENU
export const deleteMenu = async (req, res) => {
  try {
    const { id } = req.params;

    await Menu.findByIdAndDelete(id);

    res.json({ message: "Menu deleted successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};