package controllers_specs.taskData

import play.api.test._
import services.MockForApiTest

class InsertTaskSpec extends PlaySpecification {
  val apiInstance = new MockForApiTest

  "Test : Insert Task" should {
    "Insert Task Success" in new WithServer() {
      val responseInsert = await(WsTestClient
        .wsUrl(apiInstance.pathApi)(9000)
        .addHttpHeaders("Content-Type" -> "application/json")
        .post(apiInstance.bodyInsert))
      val bodyMsgInsert = (responseInsert.json \ "msg").as[String]
      responseInsert.status must equalTo(CREATED)
      bodyMsgInsert must equalTo("Created Success")
    }
  }
}
