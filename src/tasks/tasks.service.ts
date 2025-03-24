import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  async findAll(): Promise<Task[]> {
    return this.tasksRepository.find();
  }

  async create(title: string): Promise<Task> {
    const task = this.tasksRepository.create({ title });
    return this.tasksRepository.save(task);
  }


  async update(id: number, completed: boolean): Promise<Task | null> {
    const task = await this.tasksRepository.findOne({ where: { id } });
  
    if (!task) {
      console.error(`Task with ID ${id} not found.`);
      return null;
    }
  
    task.completed = completed;
    return await this.tasksRepository.save(task); // ✅ Ensures the update is saved properly
  }

  async remove(id: number): Promise<void> {
    await this.tasksRepository.delete(id);
  }
}
