
import { Module } from "@nestjs/common";
import { AxiosAdapter } from "./adapters/axios.adpter.js";


@Module({
    providers: [ AxiosAdapter ],
    exports: [ AxiosAdapter ]
})

export class CommonModule {}