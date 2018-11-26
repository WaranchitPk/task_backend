package controllers.Tasks

import java.sql.PreparedStatement
import java.time.LocalDateTime

import javax.inject._
import play.api.mvc._
import play.api.db.Database
import services.ResponseMessage
import services.TaskSqlCmd

@Singleton
class UpdateStatusTaskController @Inject()(db: Database, cc: ControllerComponents) extends AbstractController(cc) {
  val resMsgInstance = new ResponseMessage
  val updateSqlInstance = new TaskSqlCmd

  def updateStatusTaskById(id: Int) = Action(parse.json) { request =>

    val bodyTaskStatus = (request.body \ "status").as[String]
    db.withConnection { connect =>
      val updateSql = updateSqlInstance.updateStatusTaskSql(id)
      val preparedStmt: PreparedStatement = connect.prepareStatement(updateSql)
      preparedStmt.setString(1, bodyTaskStatus)
      preparedStmt.setInt(2, id)
      val resultUpdate = preparedStmt.executeUpdate()

      if (resultUpdate > 0) {
        Ok(resMsgInstance.responseMsg("Updated Status Success"))
      } else {
        BadRequest(resMsgInstance.responseMsg("Updated UnSuccess"))
      }
    }
  }
}
