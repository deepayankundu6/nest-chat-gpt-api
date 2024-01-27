import OpenAI, { ClientOptions } from 'openai';

export class OpenAIserviceService {
    openAIClient: OpenAI;

    constructor() { }

    async getMessageResponse(APIKey: string, message: string): Promise<string> {
        try {

            if (!APIKey) throw new Error("API key not provided.");
            if (!message) throw new Error("Chat message not provided.")

            const OpenAIConfig: ClientOptions = {
                apiKey: APIKey,
                organization: process.env.Organization_Name
            };

            this.openAIClient = new OpenAI(OpenAIConfig);

            const chatParams: OpenAI.Chat.ChatCompletionCreateParams = {
                messages: [{ role: 'user', content: message }],
                model: process.env.CHAT_GPT_MODEL,
                temperature: 0.7,
            };

            const chatCompletion: OpenAI.Chat.ChatCompletion = await this.openAIClient.chat.completions.create(chatParams);
            return chatCompletion.choices[0]?.message.content;

        } catch (err: any) {
            throw new Error(`Some error occured while getting the response from chat GPT `, err.data ? err.data.message : err);
        }
    }
}
