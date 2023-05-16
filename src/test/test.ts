import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

@Entity()
export class ChildEntity {
@PrimaryGeneratedColumn()
id: number;

@Column()
name: string;

@ManyToOne(type => ParentEntity, parent => parent.children)
@JoinColumn({ name: 'parent_id' })
parent: ParentEntity;
}

@Entity()
export class ParentEntity {
@PrimaryGeneratedColumn()
id: number;

@Column()
name: string;

@OneToMany(type => ChildEntity, child => child.parent)
children: ChildEntity[];
}