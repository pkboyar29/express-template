import { Sequelize } from 'sequelize-typescript'
import Todo from './entity/todo.entity'

export default function db() {
   const sequelize = new Sequelize({
      dialect: 'postgres',
      username: 'user',
      password: 'password',
      database: 'db',
      logging: true,
      models: [Todo]
   })

   sequelize.authenticate().then(() => {
      console.log("Connection has been established successfully.")
   })
      .catch((err) => {
         console.error("Unable to connect to the Database:", err)
      })

   return sequelize
}