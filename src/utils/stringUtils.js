/**
 * Formats url string for specific static player image
 *
 * @param {string} playerTeamId
 * @param {string} playerId
 * @param {string} year
 * @returns {string}
 */
export const formatPlayerPhotoUrl = (playerTeamId, playerId, year = '2019') =>
  `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/${playerTeamId}/${year}/260x190/${playerId}.png`;
