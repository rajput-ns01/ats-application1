const Rule = require('../models/Rule');

// Create a rule
const createRule = async (req, res) => {
  try {
    const { rule } = req.body;
    const newRule = new Rule({ rule });
    await newRule.save();
    res.status(201).json(newRule);
  } catch (err) {
    res.status(500).json({ message: 'Error creating rule', error: err.message });
  }
};

// Evaluate a rule
const evaluateRule = async (req, res) => {
  try {
    const { ruleId, context } = req.body;
    const rule = await Rule.findById(ruleId);

    if (!rule) {
      return res.status(404).json({ message: 'Rule not found' });
    }

    const result = evalRule(rule.rule, context); // Evaluate the rule
    res.json({ result });
  } catch (err) {
    res.status(500).json({ message: 'Error evaluating rule', error: err.message });
  }
};

// Function to safely evaluate the rule
const evalRule = (ruleString, context) => {
  // Inject context into rule string, making sure it's safe
  const ruleEvalString = ruleString
    .replace(/age/g, context.age)
    .replace(/salary/g, context.salary)
    .replace(/experience/g, context.experience)
    .replace(/department/g, `'${context.department}'`);

  return eval(ruleEvalString); // Use eval to execute the rule
};

module.exports = {
  createRule,
  evaluateRule,
};
