import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "upyw8em0",
  dataset: "production",
  useCdn: true,
});
