package controllers_specs.taskData

import play.api.test._
import services.MockForApiTest

class DeleteTaskSpec extends PlaySpecification {
  val apiInstance = new MockForApiTest
  val idTaskDelete = 20
  "Test : Delete Task" should {
    "Delete Task Success" in new WithServer() {
      val responseDelete = await(WsTestClient
        .wsUrl(apiInstance.pathApi + idTaskDelete)(9000)
        .delete())
      responseDelete.status must equalTo(NO_CONTENT)
    }
  }
}
