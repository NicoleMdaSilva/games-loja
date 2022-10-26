import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt/dist";
import { PassportModule } from "@nestjs/passport";
import { UsuarioService } from "../usuario/service/usuario.service";
import { UsuarioModule } from "../usuario/usuarios.module";
import { Bcrypt } from "./bcrypt/bcrypt";
import { jwtConstants } from "./constants/constants";
import { AuthController } from "./controllers/auth.services";
import { AuthService } from "./services/auth.service";
import { JwtStrategy } from "./strategy/jwt.strategy";
import { LocalStrategy } from "./strategy/local.strategy";

@Module({
    imports: [
        UsuarioModule,
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '24h' }
        })
    ],
    providers: [Bcrypt, AuthService, LocalStrategy, JwtStrategy, UsuarioService],
    controllers: [AuthController],
    exports: [Bcrypt]
})
export class AuthModule {} 