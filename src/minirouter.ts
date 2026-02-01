import http from "http";

type Handler = (req:any,res:any,err:any) => void;
export class MiniRouter {
    routes : {method:string,path:string,handler:Handler}[] = [];

    get(path:string,handler:Handler){
        this.routes.push({method:"GET",path,handler})
    }

    handle(req:any,res:any){
        const route = this.routes.find(
            r => r.method == req.method && req.path === req.url
        );

        if(!route) return res.end("404")
        
        route.handler(req,res,()=>{})
    }

}

const router = new MiniRouter();

router.get("/",(req,res)=>{
  res.end("Hello World")
})

const server = http.createServer((req,res)=>{
  router.handle(req,res)
})

server.listen(3000)