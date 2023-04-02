const fetchData = async (id: string = "") => {
  try {
    const response = await fetch(
      `https://api.noroff.dev/api/v1/online-shop/${id}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("An error occured while fetching the data");
  }
};

export default fetchData;
