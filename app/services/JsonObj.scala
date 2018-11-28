package services

import play.api.libs.functional.syntax._
import play.api.libs.json.{JsPath, JsValue, Json, Writes}
import models._

class ResponseMessage {
  def responseMsg(msg: String): JsValue = {
    val strResponse: JsValue = Json.obj("msg" -> msg)
    strResponse
  }
}


class TaskJsonWrites {
  implicit val taskWrites: Writes[AllTask] = (
    (JsPath \ "id").write[String] and
      (JsPath \ "title").write[String] and
      (JsPath \ "desc").write[String] and
      (JsPath \ "status").write[String]
    ) (unlift(AllTask.unapply))

  implicit val taskByIdWrites: Writes[AllTaskById] = (
    (JsPath \ "id").write[String] and
      (JsPath \ "title").write[String] and
      (JsPath \ "desc").write[String] and
      (JsPath \ "status").write[String] and
      (JsPath \ "created_date").write[String]
    ) (unlift(AllTaskById.unapply))

}