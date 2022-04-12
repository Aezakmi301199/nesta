import { NestFactory } from "@nestjs/core";
import { Appmodule } from "./app.module";




async function start () {
    const port = process.env.port || 5050;
    const app = await NestFactory.create(Appmodule);

    await app.listen(port, () => {
        console.log(`Server has been started on PORT : ${port}`);
    })

}
start();
// http://localhost:5000 