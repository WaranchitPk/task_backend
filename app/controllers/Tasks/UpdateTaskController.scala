package controllers.Tasks

import java.sql.PreparedStatement
import java.time.LocalDateTime

import javax.inject._
import play.api.mvc._
import play.api.db.Database
import services.ResponseMessage
import services.TaskSqlCmd

@Singleton
class UpdateTaskController @Inject()(db: Database, cc: ControllerComponents) extends AbstractController(cc) {
  val resMsgInstance = new ResponseMessage
  val updateSqlInstance = new TaskSqlCmd

  def updateTaskById(id: Int) = Action(parse.json) { request =>

    val bodyTaskSubject = (request.body \ "subject").as[String]
    val bodyTaskDesc = (request.body \ "desc").as[String]
    val bodyTaskStatus = (request.body \ "status").as[String]
    val bodyTaskUpdatedDate = LocalDateTime.now().toString
    if (bodyTaskStatus == "pending" || bodyTaskStatus == "done") {
      db.withConnection { connect =>
        val updateSql = updateSqlInstance.updateTaskSql(id)
        val preparedStmt: PreparedStatement = connect.prepareStatement(updateSql)
        preparedStmt.setString(1, bodyTaskSubject)
        preparedStmt.setString(2, bodyTaskDesc)
        preparedStmt.setString(3, bodyTaskStatus)
        preparedStmt.setString(4, bodyTaskUpdatedDate)
        preparedStmt.setInt(5, id)
        val resultUpdate = preparedStmt.executeUpdate()

        if (resultUpdate > 0) {
          Ok(resMsgInstance.responseMsg("Updated Success"))
        } else {
          BadRequest(resMsgInstance.responseMsg("Updated UnSuccess"))
        }
      }
    } else {
      BadRequest(resMsgInstance.responseMsg("Please Input Status (pending Or done) is Only."))
    }
  }
}