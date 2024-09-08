import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class HttpClientExample {
    public static void main(String[] args) {
        // Create an HttpClient instance
        HttpClient client = HttpClient.newBuilder()
                .version(HttpClient.Version.HTTP_2) // Use HTTP/2
                .build();

        // Create a GET request
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("http://localhost:3001/handelsum?counter=11"))
                .GET()
                .build();

        // Send the request and handle the response
        try {
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

            // Print the response status code and body
            System.out.println("Status Code: " + response.statusCode());
            System.out.println("Response Body: " + response.body());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
