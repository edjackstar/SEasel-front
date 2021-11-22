
import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

interface UserData {
    access: string | null,
    refresh: string | null
}

@Module({
    name: 'user',
    stateFactory: true,
    namespaced: true
})
export default class User extends VuexModule {
    
    public info: UserData = {
        access: null,
        refresh: null
    }
    
    get getAccessToken(): string | null{
        return this.info.access
    }
    
    get getRefreshToken(): string | null{
        return this.info.refresh
    }

    get getTokenData(): object {
        return this.info.access ? JSON.parse(atob(this.info.access.split('.')[1])) : {}
    }

    @Mutation
    setAccessToken(data: string | null) {
        this.info.access = data
    }

    @Mutation
    setRefreshToken(data: string | null) {
        this.info.refresh = data
    }
}