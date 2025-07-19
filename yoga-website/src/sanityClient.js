// src/sanityClient.js
import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "sf5mpg71", // ✅ your real Sanity project ID
  dataset: "production", // ✅ your dataset name
  useCdn: true,
  apiVersion: "2023-01-01", // ✅ specify a recent version
});
