import "reflect-metadata";
import express from "express";
import { createCombinedHandler } from "cds-routing-handlers";
import cds from "@sap/cds";

export class Server {
    public static async run() {
        const app = express();

        const hdl = createCombinedHandler({
            handler: [__dirname + "/entities/**/*.js", __dirname + "/functions/**/*.js"],
        });

        await cds.connect("db");
        await cds
            .serve("all")
            .at("odata")
            .in(app)
            .with(srv => hdl(srv));

        // Redirect requests to the OData Service
        app.get('/', function(req, res) {
            res.redirect('/odata/')
        })

        /*
        await cds
            .serve("demoService")
            .at("demo")
            .in(app)
            .with(srv => hdl(srv));

        // Redirect requests to the OData Service
        app.get('/', function(req, res) {
            res.redirect('/demo/')
        })
        */

        // Run the server.
        const port = process.env.PORT || 3001;
        app.listen(port, async () => {
            console.info(`Server is listing at http://localhost:${port}`);
        });
    }
}

Server.run();