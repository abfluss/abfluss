import {FlowApiClient} from "@donmahallem/flowapi";
import { MiddlewareFunction, Arguments } from "yargs";
export const createSigninMiddleware:(client:FlowApiClient)=>MiddlewareFunction =(client:FlowApiClient)=>{
    return(argv:Arguments&{email:string,password:string}) => {
        console.log("Middleware called");
        return client.signin(argv.email,argv.password).then((val)=>{
            console.log("JJ",val)
            return val;
        })
    }
}