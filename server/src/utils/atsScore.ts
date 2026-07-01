export const calculateATSScore = (
  resumeKeywords: string[],
  jdKeywords: string[]
) => {
  const matchedKeywords = jdKeywords.filter((keyword) =>
    resumeKeywords.includes(keyword)
  );

  const missingKeywords = jdKeywords.filter(
    (keyword) => !resumeKeywords.includes(keyword)
  );

  const keywordMatch =
    jdKeywords.length === 0
      ? 0
      : Math.round((matchedKeywords.length / jdKeywords.length) * 100);

  return {
    matchedKeywords,
    missingKeywords,
    keywordMatch,
    atsScore: keywordMatch,
  };
};