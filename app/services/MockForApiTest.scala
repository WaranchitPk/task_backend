package services

class MockForApiTest {
  def pathApi: String = {
    val url = "/api/v1/tasks/"
    url
  }

  def bodyInsert: String = {
    val body = "{ \"subject\" : \"Task 01 : Insert \",\"desc\" : \"Task Api Test : Insert\"}"
    body
  }

  def boduUpdate : String = {
    val body = "{ \"subject\" : \"Task 01 : Update \",\"desc\" : \"Task Api Test : Update\"}"
    body
  }
}
