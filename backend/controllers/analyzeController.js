import { loadLocalData } from "../database/seed.js";
import validate from "../services/dataValidation.js";
import inferTypes from "../services/typeInference.js";
import recommendCharts from "../services/chartRecommender.js";

export const analyzeData = (req, res) => {
  try {
    const data = loadLocalData();

    const validation = validate(data);
    const types = inferTypes(data);
    const recommendedCharts = recommendCharts(types);

    res.json({
      message: "Local data processed successfully",
      validation,
      types,
      recommendedCharts,
      preview: data.slice(0, 5)
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};