import { Inngest } from "inngest";

//create a client to send and receive events
export const inngest = new Inngest({
    id: "horizonai", name: "HorizonAI",
    credentials: {
        gemini: {
            apikey: process.env.GEMINI_API_KEY,

        }
    }
});