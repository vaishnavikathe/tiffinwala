import Plan from "../models/plan.js";

export const createPlan = async (req, res) => {
  try {
    //  get vendorId from token (middleware)
    const vendorId = req.user.id;
    const { planTypes, prepaidPlans, postpaidPlan } = req.body;
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

export const getPlans = async (req, res) => {
  try {
    const vendorId = req.user.id;

    const plans = await Plan.find({ vendorId }).sort({ createdAt: -1 });

    res.json(plans);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deletePlan = async (req, res) => {
  try {
    const vendorId = req.user.id;
    const { id } = req.params;

    const plan = await Plan.findOneAndDelete({
      _id: id,
      vendorId,
    });

    if (!plan) {
      return res.status(404).json({ message: "Plan not found" });
    }

    res.json({ message: "Plan deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
export const updatePlan = async (req, res) => {
  try {
    const vendorId = req.user.id;
    const { id } = req.params;

    const { planTypes, prepaidPlans, postpaidPlan } = req.body;

    const plan = await Plan.findOneAndUpdate(
      { _id: id, vendorId },
      {
        planTypes,
        prepaidPlans,
        postpaidPlan,
      },
      { new: true }
    );

    if (!plan) {
      return res.status(404).json({ message: "Plan not found" });
    }

    res.json({
      message: "Plan updated successfully",
      plan,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};