const BASE_URL =
  "https://adminzwy8.redwoodnationalparktours.com/api";

export const getHomepage = async ({
  langId = 1,
  websiteId = 1,
} = {}) => {
  try {
    const response = await fetch(
      `${BASE_URL}/get_homepage?lang_id=${langId}&website_id=${websiteId}`
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch homepage data (Status: ${response.status})`
      );
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Homepage API Error:", error);
    throw error;
  }
};
