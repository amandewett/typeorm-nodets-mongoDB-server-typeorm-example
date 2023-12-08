import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn, ObjectIdColumn, ObjectId, PrimaryColumn } from 'typeorm';

export class SharedEntity {
    @ObjectIdColumn()
    _id: ObjectId;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
};