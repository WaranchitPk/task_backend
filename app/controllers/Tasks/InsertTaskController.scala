package controllers.Tasks

import java.sql.PreparedStatement
import java.time.LocalDateTime

import javax.inject._
import play.api.mvc._
import play.api.db.Database
import play.api.libs.json._

import services.ResponseMessage
import services.TaskSqlCmd

@Singleton
class InsertTaskController @Inject()(db: Database, cc: ControllerComponents) extends AbstractController(cc) {
  val resMsgInstance = new ResponseMessage
  val insertTaskInstance = new TaskSqlCmd

  def createTask = Action(parse.json) { request: Request[JsValue] =>
    //  Check the body from  Client
    val bodyTaskSubject = (request.body \ "subject").as[String]
    val bodyTaskDesc = (request.body \ "desc").as[String]
    val bodyTaskStatus = "pending"
    val bodyTaskcreatedDate = LocalDateTime.now().toString

    if (bodyTaskSubject == "" || bodyTaskDesc == "") {
      BadRequest(resMsgInstance.responseMsg("Please Input Value Subject And Content!"))
    } else {
      db.withConnection { connect =>
        val insertSql = insertTaskInstance.insertTaskSql
        val preparedStmt: PreparedStatement = connect.prepareStatement(insertSql)
        preparedStmt.setString(1, bodyTaskSubject)
        preparedStmt.setString(2, bodyTaskDesc)
        preparedStmt.setString(3, bodyTaskStatus)
        preparedStmt.setString(4, bodyTaskcreatedDate)
        val resultInsert = preparedStmt.executeUpdate()
        if (resultInsert > 0) {
          //          if Update Success
          Created(resMsgInstance.responseMsg("Created Success"))
        } else {
          //          if Update Unsuccessful
          BadRequest(resMsgInstance.responseMsg("Created UnSuccessful"))
        }
      }
    }
  }
}
