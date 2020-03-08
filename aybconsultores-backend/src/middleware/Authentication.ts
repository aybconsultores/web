import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export function generateToken() {

}

export function verifyToken(req:Request, res:Response, next:NextFunction) {

  let token = req.headers.token[0];

  jwt.verify(token, process.env.SEED || 'kimera', (err:any, decoded:any) => {
    if(err){
      return res.status(401).json({
        ok: false,
        mensaje: 'Token inválido',
        error: err
      });
    }
    next();
  });
}
