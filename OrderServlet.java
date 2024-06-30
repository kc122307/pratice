import java.io.IOException;
import java.io.PrintWriter;
import java.math.BigDecimal;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class OrderServlet extends HttpServlet {
    
    private static final String JDBC_URL = "CAfe.html";
    private static final String JDBC_USER = "root";
    private static final String JDBC_PASSWORD = "password";
    
    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        String customerName = request.getParameter("customerName");
        String orderName = request.getParameter("orderName");
        BigDecimal orderPrice = new BigDecimal(request.getParameter("orderPrice"));
        
        try (Connection conn = DriverManager.getConnection(JDBC_URL, JDBC_USER, JDBC_PASSWORD)) {
            String sql = "INSERT INTO orders (customer_name, order_name, order_price) VALUES (?, ?, ?)";
            PreparedStatement pstmt = conn.prepareStatement(sql);
            pstmt.setString(1, customerName);
            pstmt.setString(2, orderName);
            pstmt.setBigDecimal(3, orderPrice);
            
            pstmt.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
        
        response.sendRedirect("orderSuccess.html");
    }
}
