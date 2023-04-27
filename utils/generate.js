import axios from "axios";

export async function getPages() {
  const pages = await axios.get(`http://localhost:1337/api/pages`, {
    // headers: {
    //   Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    // },
  });

  return pages.data.data.map((page) => `/${page?.attributes?.slug}`);
}
