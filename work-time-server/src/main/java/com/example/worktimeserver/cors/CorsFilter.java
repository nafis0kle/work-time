package com.example.worktimeserver.cors;

import lombok.SneakyThrows;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * @author nafis
 * @since 11.05.2022
 */

@Component
@Order(Ordered.HIGHEST_PRECEDENCE)
public class CorsFilter implements Filter {

    @SneakyThrows
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain){
        HttpServletResponse response = (HttpServletResponse) res;
        HttpServletRequest request = (HttpServletRequest) req;

        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PATCH, DELETE");
        response.setHeader("Access-Control-Max-Age", "3600");
        response.setHeader("Access-Control-Allow-Headers",  "Access-Control-Allow-Headers, Origin,Accept, " +
                "X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers," +
                "Access-Control-Allow-Origin, AUTHORIZATION");

        chain.doFilter(req, res);
    }
}
