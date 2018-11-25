package controllers_specs.taskData

import play.api.test._
import services.MockForApiTest
class GetListTasksSpec extends PlaySpecification{
  val pathApiInstance = new MockForApiTest
  "Test : Get List Task" should {
    "Get Task Success" in new WithServer {
      val response = await(WsTestClient
        .wsUrl(pathApiInstance.pathApi)(9000)
        .get()) //1

      response.status must equalTo(OK) //2
    }
  }
}
