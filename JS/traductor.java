import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ResponseBody;

@SpringBootApplication
public class ImageToggleApp {
    public static void main(String[] args) {
        SpringApplication.run(traductor.class, args);
    }
}

@Controller
@RequestMapping("/")
class WebController {
    @GetMapping
    public String index() {
        return "index.html"; 
    }
}

@RestController
@RequestMapping("/api")
class ImageController {
    @GetMapping("/image-status")
    @ResponseBody
    public String getImageStatus() {
        return "show"; 
    }
}