package com.chess.pk.config;

import static com.chess.pk.utils.MyConstant.AUTH;
import static com.chess.pk.utils.MyConstant.HEADERS;
import static com.chess.pk.utils.MyConstant.METHODS;
import static com.chess.pk.utils.MyConstant.ORIGINS;
import static org.springframework.security.config.http.SessionCreationPolicy.STATELESS;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {
    private final AuthenticationProvider authenticationProvider;
    private final JwtAuthenticationConfig jwtAuthenticationconfig;
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception{
        httpSecurity.csrf(AbstractHttpConfigurer::disable)
                    .cors(cors->cors.configurationSource(configurationSource()))
                    .authorizeHttpRequests(authorise->authorise
                    .requestMatchers(AUTH+"/**","/swagger-ui/**",
                    "swagger-ui.html/",
                    "/v3/api-docs/**")
                    .permitAll().anyRequest().authenticated())
                    .sessionManagement(session->session.sessionCreationPolicy(STATELESS))
                    .authenticationProvider(authenticationProvider).addFilterBefore(jwtAuthenticationconfig, UsernamePasswordAuthenticationFilter.class);
        return httpSecurity.build();
    }
    public CorsConfigurationSource configurationSource(){
        CorsConfiguration corsConfiguration=new CorsConfiguration();
        corsConfiguration.setAllowedOrigins(Arrays.asList("http://localhost:4000/"));
        corsConfiguration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));
        corsConfiguration.setAllowedHeaders(Arrays.asList("Content-Type", "Authorization"));
        corsConfiguration.setAllowCredentials(true);
        UrlBasedCorsConfigurationSource source=new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", corsConfiguration);
        return source;
 }

}
