package services

class TaskSqlCmd {
  def getTaskSql: String = {
    val selectTaskSql = "SELECT tasks_id,tasks_subject, tasks_desc,task_status FROM tasks"
    selectTaskSql
  }

  def getTaskByIdSql(id: Int): String = {
    val selectTaskByIdSql = s"SELECT tasks_id,tasks_subject, tasks_desc,task_status FROM tasks WHERE tasks_id = ${id}"
    selectTaskByIdSql
  }

  def insertTaskSql: String = {
    val insertTaskSql = "INSERT INTO tasks (tasks_subject, tasks_desc,task_status,created_date) VALUES(?,?,?,?)"
    insertTaskSql
  }

  def updateTaskSql(id: Int): String = {
    val updateTaskSql = "Update tasks SET tasks_subject = ?,tasks_desc = ?,task_status = ?,updated_date = ? WHERE tasks_id = ?"
    updateTaskSql
  }

  def deleteTaskSql(id: Int): String = {
    val deleteTaskSql = "DELETE FROM tasks WHERE tasks_id = ?"
    deleteTaskSql
  }
}
