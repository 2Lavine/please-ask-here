// src/context/LoginContext.ts
import { ILoginStrategy } from './LoginStrategies';

export class LoginContext {
    private strategy: ILoginStrategy;

    constructor(strategy: ILoginStrategy) {
        this.strategy = strategy;
    }

    public setStrategy(strategy: ILoginStrategy) {
        this.strategy = strategy;
    }

    public async login(data: any): Promise<Object> {
        return this.strategy.doLogin(data);
    }
}
