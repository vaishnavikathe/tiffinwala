import Plan from "../models/plan.js";

export const createPlan = async (req, res) => {
  try {
    // ✅ get vendorId from token (middleware)
    const vendorId = req.user.id;

    const { planTypes, prepaidPlans, postpaidPlan } = req.body;

    // const existing = await Plan.findOne({ vendorId });

    // if (existing) {
    //   return res.status(400).json({
    //     message: "Plan already exists"
    //   });
    // }

    const plan = await Plan.create({
      vendorId,
      planTypes,
      prepaidPlans,
      postpaidPlan
    });

    return res.status(201).json({
      message: "Plan created successfully",
      plan
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};