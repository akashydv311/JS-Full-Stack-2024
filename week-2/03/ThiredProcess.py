
import requests

# URL of the Express server endpoint
url = "http://localhost:3001/handelsum?counter=11"

# Sending a GET request
response = requests.get(url)

# Checking the response status code
print(f"Status Code: {response.status_code}")

# Printing the response content
print(f"Response Body: {response.text}")



