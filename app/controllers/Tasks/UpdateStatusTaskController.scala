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

    //  Check the body(status) from  Client
    if (bodyTaskStatus == "done") {
      //      if status equal done
      db.withConnection { connect =>
        val updateSql = updateSqlInstance.updateStatusTaskSql(id)
        val preparedStmt: PreparedStatement = connect.prepareStatement(updateSql)
        preparedStmt.setString(1, bodyTaskStatus)
        preparedStmt.setInt(2, id)
        val resultUpdate = preparedStmt.executeUpdate()

        //        Check Data Updated?
        if (resultUpdate > 0) {
          //          if Update Success
          Ok(resMsgInstance.responseMsg("Updated Status Success"))
        } else {
          //          if Update Unsuccessful
          BadRequest(resMsgInstance.responseMsg("Task id not existing, please try again."))
        }
      }
    } else {
      //      if Status body(status) is Not equal done
      BadRequest(resMsgInstance.responseMsg("Set Status, please Input done  is Only!!!"))
    }
  }
}
