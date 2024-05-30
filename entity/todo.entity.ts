import { Model, Table, Column, DataType } from 'sequelize-typescript'

@Table({
   tableName: 'todos',
})
export default class Todo extends Model {
   @Column({
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
   })
   id!: number

   @Column({
      type: DataType.STRING(255),
      field: 'title'
   })
   title!: string

   @Column({
      type: DataType.STRING(255),
      field: 'description'
   })
   description?: string
}