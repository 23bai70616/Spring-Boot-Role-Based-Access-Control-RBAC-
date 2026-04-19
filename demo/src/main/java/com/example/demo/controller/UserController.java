package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @GetMapping("/profile")
    public Map<String, Object> profile(java.security.Principal principal, org.springframework.security.core.Authentication auth) {
        return Map.of(
            "message", "User profile accessed",
            "username", principal.getName(),
            "roles", auth.getAuthorities().stream().map(a -> a.getAuthority()).toList()
        );
    }

}