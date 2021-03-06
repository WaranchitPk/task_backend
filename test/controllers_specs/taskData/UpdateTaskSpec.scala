package controllers_specs.taskData

import play.api.test._
import services.MockForApiTest

class UpdateTaskSpec extends PlaySpecification {
  val apiInstance = new MockForApiTest
  val idTaskUpdate = 1
  "Test : Insert Task" should {
    "Update Task Success" in new WithServer() {
      val responseUpdate = await(WsTestClient
        .wsUrl(apiInstance.pathApi + idTaskUpdate)(9000)
        .addHttpHeaders("Content-Type" -> "application/json")
        .put(apiInstance.boduUpdate))
      val bodyMsg = (responseUpdate.json \ "msg").as[String]
      responseUpdate.status must equalTo(OK)
      bodyMsg must equalTo("Updated Success")
    }
  }
}
