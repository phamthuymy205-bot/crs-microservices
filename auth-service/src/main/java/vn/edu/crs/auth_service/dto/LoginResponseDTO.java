package vn.edu.crs.auth_service.dto; // Lưu ý kiểm tra lại đúng tên package của em nhé

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class LoginResponseDTO {

    private String token;
    private String username;
    private String role;
}
