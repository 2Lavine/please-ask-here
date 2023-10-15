/* eslint-disable no-unused-vars */
// src/strategies/LoginStrategies.ts
import { signIn, SignInResponse } from "next-auth/react";
export interface ILoginStrategy {
    doLogin(data: any): Promise<Object>;
}

export class ThirdPartyStrategy implements ILoginStrategy {
    async doLogin(data: any): Promise<Object> {
        console.log(data);
        const response: SignInResponse | undefined = await signIn(data.type);
        if (response?.error) {
            throw new Error(response.error);
        }
        return "Third party login success";
    }
}


export class EmailLogin implements ILoginStrategy {
    async doLogin(data: any): Promise<Object> {
        const { password, email } = data;
        const response = await fetch('/api/auth/pwd-login', {
            method: 'POST',
            body: JSON.stringify({ password, email, type: 'email' }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const responseBody = await response.json();
        return responseBody;
    }
}

export class PasswordLogin implements ILoginStrategy {
    async doLogin(data: any): Promise<Object> {
        const { password, userName } = data;
        const response = await fetch('/api/auth/pwd-login', {
            method: 'POST',
            body: JSON.stringify({ password, userName, type: 'email' }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const responseBody = await response.json();
        return responseBody;
    }
}
