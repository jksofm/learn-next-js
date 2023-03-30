import type { NextApiRequest,NextApiResponse } from "next";
import httpProxy from "http-proxy";

export const config =  {
    api : {
        bodyparser: false,
    }
}
const proxy = httpProxy.createProxyServer();

export default function handler(req: NextApiRequest,res: NextApiResponse<any>){
req.headers.cookie = "";

proxy.web(req,res,{
    target: "https://api.kame.asia",
    changeOrigin: true,
    selfHandleResponse: false
})
}


