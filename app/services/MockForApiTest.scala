package services

class MockForApiTest {
  def pathApi: String = {
    val url = "/api/v1/tasks/"
    url
  }

  def bodyInsertAndUpdate: String = {
    val body = "{ \"subject\" : \"Task 01 \",\"desc\" : \"Task Api Test\",\"status\": \"pending\"}"
    body
  }
}
