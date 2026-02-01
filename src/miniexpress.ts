import type { Handler } from "express";
import { MiniRouter } from "./minirouter.ts";

export class MiniExpress {
  middlewares: Handler[] = [];
  router = new MiniRouter();

  use(mw: Handler) {
    this.middlewares.push(mw);
  }

  get(path: string, handler: Handler) {
    this.router.get(path, handler);
  }

  handleRequest(req: any, res: any) {
    let index = 0;

    const next = () => {
      if (index < this.middlewares.length) {
        const mw = this.middlewares[index++];
        return mw?.(req, res, next);
      }
      this.router.handle(req, res);
    };

    next();
  }
}
