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
    //    Retrieve body from Client
    val bodyTaskSubject = (request.body \ "subject").as[String]
    val bodyTaskDesc = (request.body \ "desc").as[String]
    val bodyTaskUpdatedDate = LocalDateTime.now().toString
    db.withConnection { connect =>
      val updateSql = updateSqlInstance.updateTaskSql(id)
      val preparedStmt: PreparedStatement = connect.prepareStatement(updateSql)
      preparedStmt.setString(1, bodyTaskSubject)
      preparedStmt.setString(2, bodyTaskDesc)
      preparedStmt.setString(3, bodyTaskUpdatedDate)
      preparedStmt.setInt(4, id)
      val resultUpdate = preparedStmt.executeUpdate()
      //        Check Data Updated?
      if (resultUpdate > 0) {
        //          if Update Success
        Ok(resMsgInstance.responseMsg("Updated Success"))
      } else {
        //          if Update Unsuccessful
        BadRequest(resMsgInstance.responseMsg("Task id not existing, please try again."))
      }
    }
  }
}
