package com.example.spring_test_authentik_oauth2;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @GetMapping("/hello")
    public String user(@AuthenticationPrincipal OidcUser oidcUser) {
        return "Hello "+oidcUser.getEmail(); //the email of the logged user
        // oidcUser.getIdToken().getTokenValue();   <= to get the token of the user
    }
}
