import Anthropic from "@anthropic-ai/sdk";

export const MODEL = "claude-sonnet-5-5";

export const client = new Anthropic(); // lit ANTHROPIC_API_KEY dans l'environnement
