import { NextApiRequest, NextApiResponse } from "next";
import oneTimeChat from "./ot-chat";
import AI_CONFIG_TYPE from "./ot-chat/index-d";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { configuration, statement }: AI_CONFIG_TYPE = req.body;
    if (configuration.OPEN_AI_ORG && configuration.OPENAI_API_KEY) {
        try {
            await oneTimeChat({ configuration, statement })
                .then(response => {
                    if (response?.choices && response.choices.length > 0)
                        return res.status(200).json({ data: response });
                    else
                        return res.status(401).json({ error: response });
                })
                .catch(err => console.debug("Error: ", err));
        }
        catch (error) { console.debug("Caught Error. Error details: ", error) };
    }
}

export default handler;