import { client, MODEL } from "./client.js";

const message = await client.messages.create({
  model: MODEL,
  max_tokens: 256,
  system: "Tu es un assistant de support client concis et poli.",
  messages: [{ role: "user", content: "Bonjour, je n'arrive pas à me connecter à mon compte." }],
});

for (const block of message.content) {
  if (block.type === "text") console.log(block.text);
}
