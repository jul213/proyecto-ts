import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import estudiantesRoutes from './routes/estudiantesRoutes';
import profesorRoutes from './routes/profesoresRoutes';
import cursosRoutes from './routes/cursosRoutes';

const app = express();
app.use(morgan("dev"));
app.use(cors());

app.get("/",(req: Request,res: Response)=> {
    console.log("hola mundo");
    res.send("Hola Mundo");
});

app.use("/estudiantes", estudiantesRoutes);
app.use("/profesores", profesorRoutes);
app.use("/cursos", cursosRoutes);

export default app;