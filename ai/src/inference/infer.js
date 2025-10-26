/**
 * Inference script for real-time dosha predictions
 * Processes user questionnaire responses and returns Prakriti analysis
 */

const natural = require('natural');
const compromise = require('compromise');

/**
 * Analyze user responses and predict dosha
 * @param {Object} userData - User profile information
 * @param {Array} responses - Questionnaire responses
 * @returns {Object} Predicted dosha and confidence scores
 */
async function predictDosha(userData, responses) {
  console.log('🔮 Running Prakriti inference...');
  
  // Calculate scores for each dosha
  const scores = calculateDoshaScores(responses);
  
  // Determine dominant dosha
  const dominant = Object.entries(scores).reduce((a, b) => 
    scores[a[0]] > scores[b[0]] ? a : b
  )[0];
  
  // Calculate confidence
  const total = Object.values(scores).reduce((a, b) => a + b, 0);
  const confidence = scores[dominant] / total;
  
  return {
    dominant_dosha: dominant,
    confidence: confidence,
    scores: scores,
    timestamp: new Date().toISOString()
  };
}

function calculateDoshaScores(responses) {
  let vata = 0, pitta = 0, kapha = 0;
  
  responses.forEach(response => {
    if (response === 'vata') vata++;
    else if (response === 'pitta') pitta++;
    else if (response === 'kapha') kapha++;
  });
  
  return { vata, pitta, kapha };
}

module.exports = { predictDosha };

