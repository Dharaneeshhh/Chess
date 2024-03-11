package com.chess.pk.config;

import static com.chess.pk.utils.MyConstant.SWAGGER_BEARER_FORMAT;
import static com.chess.pk.utils.MyConstant.SWAGGER_DESCRIPTION;
import static com.chess.pk.utils.MyConstant.SWAGGER_LOCALHOST_URL;
import static com.chess.pk.utils.MyConstant.SWAGGER_SECURITY_SCHEME;
import static com.chess.pk.utils.MyConstant.SWAGGER_SECURITY_SCHEME_NAME;
import static io.swagger.v3.oas.models.security.SecurityScheme.Type.HTTP;

import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.chess.pk.utils.MyConstant;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import io.swagger.v3.oas.models.servers.Server;

@Configuration
public class SwaggerApiConfig {

    @Bean
    public OpenAPI openApi(){
        return new OpenAPI().servers(List.of(new Server().url(SWAGGER_LOCALHOST_URL)))
        .addSecurityItem(new SecurityRequirement().addList(SWAGGER_SECURITY_SCHEME_NAME))
        .components(new Components().addSecuritySchemes(SWAGGER_SECURITY_SCHEME_NAME, new SecurityScheme()
        .name(MyConstant.SWAGGER_SECURITY_SCHEME_NAME).type(HTTP).scheme(SWAGGER_SECURITY_SCHEME)
        .description(SWAGGER_DESCRIPTION).bearerFormat(SWAGGER_BEARER_FORMAT)));
    }
}
