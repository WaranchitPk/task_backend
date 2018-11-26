name := "backend"

version := "1.0"

lazy val `backend` = (project in file(".")).enablePlugins(PlayScala)

resolvers += "scalaz-bintray" at "https://dl.bintray.com/scalaz/releases"

resolvers += "Akka Snapshot Repository" at "http://repo.akka.io/snapshots/"

scalaVersion := "2.12.2"

libraryDependencies ++= Seq(
  jdbc,
  ehcache,
  ws,
  specs2 % Test,
  guice,
  "mysql" % "mysql-connector-java" % "6.0.6",
  jdbc % Test,
  "org.scalatestplus.play" %% "scalatestplus-play" % "3.1.2" % Test
)

unmanagedResourceDirectories in Test <+= baseDirectory(_ / "target/web/public/test")  

      