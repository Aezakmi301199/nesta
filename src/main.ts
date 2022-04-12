import { NestFactory } from "@nestjs/core";
import { Appmodule } from "./app.module";
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger'



async function start () {
    const port = process.env.port || 5050;
    const app = await NestFactory.create(Appmodule);
    const config = new DocumentBuilder()
    .setTitle('Урок от уби по nest')
    .setDescription('Документация RESTAPI')
    .setVersion('1.0')
    .addTag('Lesha')
    .build()
    const document = SwaggerModule.createDocument(app,config);
    SwaggerModule.setup('/api/docs',app,document);
    await app.listen(port, () => {
        console.log(`Server has been started on PORT : ${port}`);
    })

}
start();
// http://localhost:5000 