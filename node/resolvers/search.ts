export const productsByCollection = async (
  _: any,
  { collection }: { collection: string },
  { clients: { search: searchClient } }: Context
) => {
  try {
    const response = await searchClient.productsByCollection(collection);

    console.log("response", response);

    return response;
  } catch (error) {
    console.log(error);
    return null
  }
};
