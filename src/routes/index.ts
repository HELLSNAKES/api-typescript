import { Application, Response, Request } from 'express';
import path from 'path';

export default class Routes {
    public routes(app: Application): void {
        app.route('/status')
            .get((_req: Request, res: Response) => {
                res.status(200).send({
                    status: 'OK',
                    uptime: process.uptime(),
                    memoryUsage: process.memoryUsage(),
                    cpuUsage: process.cpuUsage(),
                    NodejsVersion: process.version,
                });
            });
        app.route('/')
            .get((_req: Request, res: Response) => {
                res.status(200).sendFile(path.join(__dirname, '..', '/assets/endpoints.json'));
            });
    }
}