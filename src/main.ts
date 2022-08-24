import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { JwtAuthGuard } from "./auth/jwt-auth.guard";
import { ValidationPipe } from "./pipes/validation.pipe";


async function start() {
	const PORT = process.env.PORT || 5000
	const app = await NestFactory.create(AppModule)

	const config = new DocumentBuilder()
		.setTitle('Lesson for advanced backend')
		.setDescription('Rest API documentation')
		.setVersion('1.0.0')
		.addTag('Advanced back-end on nestJS')
		.build()
	const document = SwaggerModule.createDocument(app, config)
	SwaggerModule.setup('/api/docs', app, document)

	// Моем ограничить доступ к приложению глобально. Оно будет доступно только зарегистрированным пользователям
	// app.useGlobalGuards(JwtAuthGuard)

	// Используем глобально (Настроили в Dto лоя каждого)
	app.useGlobalPipes(new ValidationPipe())
	
	await app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))
}

start()
