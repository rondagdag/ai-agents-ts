import { researchWithLangGraph } from "./research"; // Import a custom function for conducting research.

async function fetchData() {
  const data = await researchWithLangGraph("Write interesting facts about Harry Potter");
}

async function main() {
  await fetchData();
}

main();