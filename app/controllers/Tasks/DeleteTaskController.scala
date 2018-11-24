package controllers.Tasks

import java.sql.PreparedStatement

import javax.inject._
import play.api.mvc._
import play.api.db.Database

import services.ResponseMessage
import services.TaskSqlCmd

@Singleton
class DeleteTaskController @Inject()(db: Database, cc: ControllerComponents) extends AbstractController(cc) {
  val resMsgInstance = new ResponseMessage
  val deleteTaskSqlInstance = new TaskSqlCmd

  def deleteTaskById(id: Int) = Action {

    db.withConnection { connect =>
      val deleteSql = deleteTaskSqlInstance.deleteTaskSql(id)
      val preparedStmt: PreparedStatement = connect.prepareStatement(deleteSql)
      preparedStmt.setInt(1, id)
      val resultDelete = preparedStmt.executeUpdate()
      println(s"result : ${resultDelete}")
      if (resultDelete > 0) {
        NoContent
      } else {
        BadRequest(resMsgInstance.responseMsg("Delete UnSuccess"))
      }
    }
  }
}
