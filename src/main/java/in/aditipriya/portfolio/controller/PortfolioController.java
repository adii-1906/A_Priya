package in.aditipriya.portfolio.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PortfolioController {
    @GetMapping({"", "/", "/home"})
    public String showHomePage(){
        return "home";
    }

     // Add these two new methods
    @GetMapping("/projects/major")
    public String showMajorProjects() {
        return "major"; // Renders major.html
    }

    @GetMapping("/projects/minor")
    public String showMinorProjects() {
        return "minor"; // Renders minor.html
    }
}
