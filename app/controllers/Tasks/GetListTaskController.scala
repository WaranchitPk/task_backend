package controllers.Tasks

import javax.inject._
import play.api.mvc._
import play.api.db.Database
import play.api.libs.json._
import scala.collection.mutable

import models._
import services.TaskSqlCmd
import services.TaskJsonWrites

@Singleton
class GetListTaskController @Inject()(db: Database, cc: ControllerComponents) extends AbstractController(cc) {
  val taskWritesJsonInstance = new TaskJsonWrites
  val selectTaskSqlInstance = new TaskSqlCmd

  def getTask = Action {
    db.withConnection { connect =>
      val stm = connect.createStatement()
      val selectSql = stm.executeQuery(selectTaskSqlInstance.getTaskSql)
      val tasksList = mutable.ListBuffer[AllTask]()
      while (selectSql.next()) {
        val taskId = selectSql.getString(1)
        val taskSubject = selectSql.getString(2)
        val taskDesc = selectSql.getString(3)
        val taskStatus = selectSql.getString(4)
        tasksList.append(AllTask(taskId, taskSubject, taskDesc, taskStatus))
      }

      val taskSeq = Writes.seq(taskWritesJsonInstance.taskWrites)
      val response = taskSeq.writes(tasksList)
      Ok(response)
    }
  }

  def getTaskIsStatusEqualDone = Action {
    db.withConnection { connect =>
      val stm = connect.createStatement()
      val selectSql = stm.executeQuery(selectTaskSqlInstance.getTaskStatusIsDoneSql)
      val tasksList = mutable.ListBuffer[AllTask]()
      while (selectSql.next()) {
        val taskId = selectSql.getString(1)
        val taskSubject = selectSql.getString(2)
        val taskDesc = selectSql.getString(3)
        val taskStatus = selectSql.getString(4)
        tasksList.append(AllTask(taskId, taskSubject, taskDesc, taskStatus))
      }

      val taskSeq = Writes.seq(taskWritesJsonInstance.taskWrites)
      val response = taskSeq.writes(tasksList)
      Ok(response)
    }
  }

  def getTaskById(id: Int) = Action {
    db.withConnection { connect =>
      val stmt = connect.createStatement()
      val selectTaskByIdSql = stmt.executeQuery(selectTaskSqlInstance.getTaskByIdSql(id))
      val tasksList = mutable.ListBuffer[AllTaskById]()
      while (selectTaskByIdSql.next()) {
        val taskId = selectTaskByIdSql.getString(1)
        val taskSubject = selectTaskByIdSql.getString(2)
        val taskDesc = selectTaskByIdSql.getString(3)
        val taskStatus = selectTaskByIdSql.getString(4)
        val taskCreatedDate = selectTaskByIdSql.getString(5)
        tasksList.append(AllTaskById(taskId, taskSubject, taskDesc, taskStatus, taskCreatedDate))
      }
      val taskSeq = Writes.seq(taskWritesJsonInstance.taskByIdWrites)
      val response = taskSeq.writes(tasksList)
      Ok(response)
    }
  }
}
