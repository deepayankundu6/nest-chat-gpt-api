import { SSMClient, GetParametersCommand } from "@aws-sdk/client-ssm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ParameterStoreService {
    async getParameter(parameterName: string): Promise<string> {
        const input = {
            Names: [
                parameterName,
            ],
            WithDecryption: true,
        };
        try {
            const client = new SSMClient();
            const command = new GetParametersCommand(input);
            const response = await client.send(command);
            if (response.Parameters[0].Value) {
                return response.Parameters[0].Value;
            } else {
                throw new Error("Parameter not found!!");
            }
        } catch (error: any) {
            throw new Error(`Some error occured while getting the paramerer: ${parameterName}: `, error.message ? error.message : error)
        }
    }
}
